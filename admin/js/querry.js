
db.collection("Message").get().then(function(snapshot) {
    var htmlAll = "";
    var childCounts = snapshot.size;
    var t = 0;
    var i = childCounts + 1;
    console.log(childCounts);
    snapshot.forEach(function(doc) {
        var childUID = doc.id;
        var childData = doc.data();
        var date = new Date(childData.date).toLocaleString();

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
                  <td>${date}</td>
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
    
    console.log("sucessfully deleted");

    var element = document.getElementById(childUID);

    document.querySelector("#querry").removeChild(element);

    });

}

function respond(childUID){
  window.location.href="respond.html?postuid="+childUID;
}

//count queries
db.collection("Message").get().then(function(snapshot) {
  var childCounts = snapshot.size;
  document.getElementById("countqueries").innerHTML = childCounts;
});