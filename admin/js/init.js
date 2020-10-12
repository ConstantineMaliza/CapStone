var userUID = sessionStorage.getItem("userUID");

if (userUID == null || userUID.length == 0 || userUID == "" || userUID == " " || userUID == "null" || userUID == "undefined") {

    window.location.href = "../index.html";

} else {
    document.getElementById('username').innerHTML=sessionStorage.getItem('username');


    console.log(sessionStorage.getItem('photo'));
    //logout
    const logout = document.querySelector("#logoutprofile");
    logout.addEventListener('click', (e) => {
        e.preventDefault();

        auth.signOut().then(() => {
            window.location.href = "../index.html";
        })
    });
    db.collection('RegisteredUser').doc(userUID).get().then(function (snapshot) {
        var childData = snapshot.data();
        document.getElementById('username').innerHTML = childData.Username;
        document.getElementById('profilepic').src = childData.photo;
    });
}

