// listen for auth status change

auth.onAuthStateChanged(user =>{
    if(user){
        console.log('User Logged in ',user);
        document.getElementById('username').innerHTML=user.email ;
        document.getElementById('commentsdiv').style.display='block';
        document.getElementById('username').style.display='block';
        document.getElementById('logout').style.display='block';


    }else{
        console.log('User Logged out ');
        document.getElementById('username').style.display='none';
        document.getElementById('logout').style.display='none';
       
    }
    
});

//logout
const logout = document.querySelector("#logout");
logout.addEventListener('click',(e) =>{
    e.preventDefault();

    auth.signOut().then(()=>{
         window.location.href="index.html";
    })
});





