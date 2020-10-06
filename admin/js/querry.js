
db.collection("Message").get().then(function(snapshot) {
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
                 <td>${childData.fullname}</td>
                 <td>${childData.message}</td>
                  <td>22/8/2020</td>
               <td>
                    <a href="#respond" class="" style="color: white;" onclick="respond('${childUID}')">Respond</a>
                    <a href="#deleteQuerry" class="icon" onclick="deleteQuery('${childUID}')"><img src="../assets/delete.png" alt="" ></a>
                  </td>
              </tr>        
        `;
        htmlAll = html + htmlAll;
        if(t == childCounts) {
        document.getElementById("querry").innerHTML=htmlAll ;
        }
    });
});

function deleteQuery(childUID) {
    
    db.collection("Message").doc(childUID).delete().then(function() {
    
    alert("sucessfully deleted");

    var element = document.getElementById(childUID);

    document.querySelector("#querry").removeChild(element);

    });

}

function respond(childUID){
  window.location.href="respond.html?postuid="+childUID;
}
