
db.collection("Blog").get().then(function(snapshot) {
    var html="";
    snapshot.forEach(function(doc) {
        var childUID = doc.id;
        var childData = doc.data();
   var date=new Date(childData.date).toLocaleDateString();
        
        html+=`
        <div class="col-4 col-s-4">
        <div class="card">
            <img src="${childData.photo}" alt="" style="height:30vh;object-fit:cover;">
            <div class="card-body container">
                <div class="card-title">
                    <h5>${childData.title}</h5>
                </div>
             
                <div class="card-text" style="height:20vh;">
                    <div class="date">
                        <p>${date}</p>
                    </div>
                    <p class="p">${childData.content}</p>
                </div>

            </div>
            <div class="card-footer">
                <a href="#read" onclick="read('${childUID}')">Read More</a>
            </div>
        </div>
       
    </div>
        `;
       
        document.getElementById("blogpage").innerHTML=html ;

        /* Limit Text */
   var txt= $('.p');
   txt.text(function(index, currentText) {
     return currentText.substr(0, 100)+"...";
   });


    });
});
// call selected articles page
function read(childUID) {
    window.location.href="selectedarticle.html?postuid="+childUID;
}
