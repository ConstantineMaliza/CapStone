// listen for auth status change

auth.onAuthStateChanged(user =>{
    if(user){
        console.log('User Logged in '+user);
    }else{
        console.log('User Logged out '+user);
    }
    
});


