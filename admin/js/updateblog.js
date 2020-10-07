function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
var uid = getUrlParameter("postuid");
var image = document.querySelector(".image");
db.collection("Blog").doc(uid).get().then( function(snapshot){
  
  var childData = snapshot.data();
  console.log(childData);
  document.getElementById("updateblog").title.value=childData.title;
  document.getElementById("updateblog").content.value=childData.content;
  image.src=childData.photo;
    
});

const blog = document.querySelector('#updateblog');

var photo="";
var functionphoto= document.querySelector('#inputfile');

functionphoto.addEventListener('change', function(input) {

      file = input.target.files[0];

      var path = window.URL.createObjectURL(file);

      document.querySelector("#imageFolder").src = path;
      storage.ref("BlogPhoto").put(file)
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((link) => {                                
        photo=link;
        alert("successfull Uploaded");
      });	

      });

blog.addEventListener('submit', (e) =>{

    e.preventDefault();

    const title =blog['title'].value;
    const content= blog ['content'].value;

    var blogData ={
        title,
        content,
        photo,
        date:new Date().getTime()
    }
    db.collection("Blog").doc(uid).update(blogData).catch(function(error) {
        console.error("Error adding document: ", error);
    }).then(function(){
        alert('successful publish!');
        window.location.href="viewblog.html";
    });

});