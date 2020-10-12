
var uid = sessionStorage.getItem("userUID");
console.log("userid" + uid);
var image = document.querySelector(".image");
db.collection("RegisteredUser").doc(uid).get().then(function (snapshot) {

  var childData = snapshot.data();
  console.log(childData);
  document.getElementById("editprofile").name.value = childData.Username;
  document.getElementById("editprofile").email.value = childData.Email;
  document.getElementById("editprofile").password.value = childData.Password;
  image.src = childData.photo;

});

const profile = document.querySelector('#editprofile');

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

profile.addEventListener('submit', (e) => {

  e.preventDefault();

  const Username = profile['name'].value;
  const Email = profile['email'].value;
  const Password = profile['password'].value;

  if (file) return updateWithImage(Username, Email, Password);
  updatePost(Username, Email, Password);
});


function updatePost(Username, Email, Password) {
  var profileData = {
    Username,
    Email,
    Password,
    date: new Date().getTime()
  }
  db.collection("RegisteredUser").doc(uid).update(profileData).catch(function (error) {
    console.error("Error adding document: ", error);
  }).then(function () {
    console.log('successful publish!');
    window.location.href = "dashboard.html";
  });

}
function updateWithImage(Username, Email, Password) {
  const uploadTask = firebase.storage().ref()
    .child("ProfilePhoto/" + file.name)
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
        var profileData = {
          Username,
          Email,
          Password,
          photo: downloadURL,
          date: new Date().getTime()
        }
        db.collection("RegisteredUser").doc(uid).update(profileData).catch(function (error) {
          console.error("Error adding document: ", error);
        }).then(function () {
          console.log('successful publish!');
          window.location.href = "dashboard.html";
        });
      });
    })
}