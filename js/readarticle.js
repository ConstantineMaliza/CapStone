function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
    var uid = getUrlParameter("postuid");

    db.collection("Blog").doc(uid).get().then(function(snapshot) {

        var html="";
        var childData = snapshot.data();

        html+=`
        <img src="${childData.photo}" alt="">
        <div class=""> 
            <div class="description">
                <h4 class="container title">${childData.title}</h4>
                <p>${childData.content}</p>
            </div>                      
        </div>
        `;
        document.getElementById('article').innerHTML=html;

           // leave comment
const commentForm = document.querySelector('.commentForm');

commentForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const commentmessage = commentForm['commentmessage'].value;
    const name = sessionStorage.getItem('username');
    const blogtitle = childData.title;

    var commentData ={
        commentmessage,
        name,
        blogtitle,
        date:new Date().getTime()
    }

    db.collection("Comment").doc().set(commentData).catch(function(error) {
        console.error("Error adding document: ", error);
    }).then(function(){
        alert('successful comment sent!');
        // window.location.href="index.html";
    });
});
    });

 
