
db.collection("Blog").get().then(function(snapshot) {
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
            <td>${childData.title}</td>
            <td>${childData.content}</td>
            <td>22/8/2020</td>
            <td>
            <a href="#edit" class="icon" onclick="edit('${childUID}')"><i class="fas fa-edit"></i></a>
            <a href="#deleteBlog" class="icon" onclick="deleteBlog('${childUID}')"><i class="fas fa-trash-alt"></i></a>
            </td>
            </tr>        
        `;
        htmlAll = html + htmlAll;
        if(t == childCounts) {
        document.getElementById("blog").innerHTML=htmlAll;
     
        }
    });
});

function deleteBlog(childUID) {
    
    db.collection("Blog").doc(childUID).delete().then(function() {
    
    alert("sucessfully deleted");

    var element = document.getElementById(childUID);

    document.querySelector("#blog").removeChild(element);
    window.location.href="viewblog";
    });

}

function edit(childUID){
  window.location.href="updateblog.html?postuid="+childUID;
}

//count blog
db.collection("Blog").get().then(function(snapshot) {
    var childCounts = snapshot.size;
    document.getElementById("countblog").innerHTML=childCounts;

});