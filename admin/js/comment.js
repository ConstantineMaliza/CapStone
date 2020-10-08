db.collection('Comment').get().then(function(snapshot){
    var htmlAll = "";
    var childCounts = snapshot.size;
    var t = 0;
    var i = childCounts + 1;
    console.log(childCounts);
    snapshot.forEach(function(doc) {
        var childUID = doc.id;
        var childData = doc.data();
        var date = new Date(childData.date).toLocaleDateString();

        if(t==0){
            htmlAll = "";  
          }
          t++;
          i--;
        var html="";
        html+=`
        <tr>
            <td>${i}</td>
            <td>${childData.name}</td>
            <td>${childData.blogtitle}</td>
            <td>${childData.commentmessage}</td>
            <td>${date}</td>
            <td>
                <a href="#deleteComment" class="icon" onclick="deleteComment('${childUID}')"><img src="../assets/delete.png" alt="" ></a>
            </td>
        </tr>    
        `;
        htmlAll = html + htmlAll;
        if(t == childCounts) {
        document.getElementById("comments").innerHTML=htmlAll ;
        }
});
});


function deleteComment(childUID) {
    
    db.collection("Comment").doc(childUID).delete().then(function() {
    
    console.log("sucessfully deleted");

    var element = document.getElementById(childUID);

    document.querySelector("#comments").removeChild(element);

    });

}

//count comments

db.collection('Comment').get().then(function(snapshot){
    var childCounts = snapshot.size;
    document.getElementById("countcomments").innerHTML = childCounts;
});