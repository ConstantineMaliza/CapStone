// listen for auth status change

auth.onAuthStateChanged(user =>{
    if(user){
        console.log('User Logged in ',user);
        document.getElementById('commentsdiv').style.display='block';
        
    }else{
        console.log('User Logged out ');
    }
    
});


