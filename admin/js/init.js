document.getElementById('username').innerHTML=sessionStorage.getItem('username');
var uid = sessionStorage.getItem("userUID");
console.log(uid);
document.getElementById('profilepic').src=sessionStorage.getItem('photo');
console.log(sessionStorage.getItem('photo'));
       //logout
    const logout = document.querySelector("#logoutprofile");
    logout.addEventListener('click',(e) =>{
        e.preventDefault();

        auth.signOut().then(()=>{
            window.location.href="../index.html";
        })
    });