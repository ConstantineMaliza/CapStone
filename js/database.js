
// var uid=db.collection('Message').push().key;


const contactform= document.querySelector('#contactForm');

contactform.addEventListener('submit',(e) =>{
    e.preventDefault();

    var fullname = contactform['fullname'].value;
    var email = contactform['email'].value;
    var message =contactform['message'].value;
    console.log(fullname);

    var querryData ={
        message,
        email,
        fullname,
        Date:new Date().getTime()
    }

    var message = db.collection("Message").doc();
    var uid=message.id;
    console.log(uid);

    message.set(querryData).catch(function(error) {
        console.error("Error adding document: ", error);
    }).then(function(){
        alert('successful message sent!');
        // window.location.href="index.html";
    });
});