function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var uid = getUrlParameter("postuid");
var image = document.querySelector(".image");
db.collection("Blog").doc(uid).get().then(function (snapshot) {

  var childData = snapshot.data();
  console.log(childData);
  document.getElementById("updateblog").title.value = childData.title;
  document.getElementById("updateblog").content.value = childData.content;
  image.src = childData.photo;

});

const blog = document.querySelector('#updateblog');

var photo = "";
var file;
var functionphoto = document.querySelector('#inputfile');

functionphoto.addEventListener("change", showPreviewImg);

function showPreviewImg(e) {
  file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const preview = document.querySelector("#imageFolder");
      preview.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(file);
  }
}

blog.addEventListener('submit', (e) => {

  e.preventDefault();

  const title = blog['title'].value;
  const content = blog['content'].value;
  if (file) return updateWithImage(title, content);
  updatePost(title, content);



});


function updatePost(title, content) {
  var blogData = {
    title,
    content,
    date: new Date().getTime()
  }
  db.collection("Blog").doc(uid).update(blogData).catch(function (error) {
    console.error("Error adding document: ", error);
  }).then(function () {
    alert('successful publish!');
    window.location.href = "viewblog.html";
  });

}
function updateWithImage(title, content) {
  const uploadTask = firebase.storage().ref()
    .child("BlogPhoto/" + file.name)
    .put(file);
  uploadTask.on(
    firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      const progress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log("Upload is paused");
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log("Upload is running");
          break;
      }
    },
    (error) => console.log(error),
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        var blogData = {
          title,
          content,
          photo: downloadURL,
          date: new Date().getTime()
        }
        db.collection("Blog").doc(uid).update(blogData).catch(function (error) {
          console.error("Error adding document: ", error);
        }).then(function () {
          console.log('successful publish!');
          window.location.href = "viewblog.html";
        });
      });
    })
}