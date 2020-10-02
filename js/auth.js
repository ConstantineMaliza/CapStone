
const register = async () => {
    const register = document.querySelector("#registerForm");
    
    const username = register.name.value;
    const email = register.email.value;
    const password = register.pass.value;
    const conf_password = register.conf_pass.value;

    if (password !== conf_password) {
        alert('incorrect password and Confirm Password');
        return;
    }
    try {
        await auth.createUserWithEmailAndPassword(email, password).then(() => {
            console.log('user added');
            // try{
            //     await db.collection().doc().
            // }
        });
    } catch (e) {
        console.log(e);
    }
}

register();
