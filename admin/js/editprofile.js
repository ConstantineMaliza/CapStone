  
var uid = sessionStorage.getItem("userUID");
console.log("userid"+ uid);
var image = document.querySelector(".image");
db.collection("RegisteredUser").doc(uid).get().then( function(snapshot){
  
  var childData = snapshot.data();
  console.log(childData);
  document.getElementById("editprofile").name.value=childData.Username;
  document.getElementById("editprofile").email.value=childData.Email;
  document.getElementById("editprofile").password.value=childData.Password;
  image.src=childData.photo;
    
});

const profile = document.querySelector('#editprofile');

var photo="";
var functionphoto= document.querySelector('#inputfile');

functionphoto.addEventListener('change', function(input) {

      file = input.target.files[0];

      var path = window.URL.createObjectURL(file);

      document.querySelector("#imageFolder").src = path;
      storage.ref("ProfilePhoto").put(file)
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then((link) => {                                
        photo=link;
        alert("successfull Uploaded");
      });	

      });

profile.addEventListener('submit', (e) =>{

    e.preventDefault();
    
    const Username =profile['name'].value;
    const Email= profile ['email'].value;
    const Password= profile ['password'].value;

    var profileData ={
        Username,
        Email,
        Password,
        photo,
        date:new Date().getTime()
    }
    db.collection("RegisteredUser").doc(uid).update(profileData).catch(function(error) {
        console.error("Error adding document: ", error);
    }).then(function(){
        alert('successful publish!');
        window.location.href="dashboard.html";
    });

});


