

db.collection('RegisteredUser').get().then(function(snapshot){

    var htmlAll = "";
    var childCounts = snapshot.size;
    var t = 0;
    var i = childCounts + 1;
    console.log(childCounts);
    snapshot.forEach(function(doc) {
        var childUID = doc.id;
        var childData = doc.data();
        if(t==0){
            htmlAll = "";  
          }
          t++;
          i--;
        var html="";
        html+=`
        <tr>
            <td>${i}</td>
            <td><img src="${childData.photo}" alt="" srcset=""></td>
            <td>${childData.Username}</td>
            <td>${childData.Email}</td>
            <td>${childData.Role}</td>
            <td>
                <a href="#deleteUser" class="icon" onclick="deleteUser('${childUID}')"><i class="fas fa-user-tie"></i></a>
                <a href="#deleteUser" class="icon" onclick="promoteUser('${childUID}')"><i class="fas fa-trash-alt"></i></a>
            </td>
        </tr>     
        `;
        htmlAll = html + htmlAll;
        if(t == childCounts) {
        document.getElementById("users").innerHTML=htmlAll ;


        }

    });
});

function deleteUser(childUID) {
    
    db.collection("RegisteredUser").doc(childUID).delete().then(function() {
    
    console.log("sucessfully deleted");

    var element = document.getElementById(childUID);

    document.querySelector("#users").removeChild(element);

    });

}
/// count 

db.collection('RegisteredUser').get().then(function(snapshot){
    var childCounts = snapshot.size;
    document.getElementById("countuser").innerHTML=childCounts;
});