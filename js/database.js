//Contact Form
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

        $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
        contactform.reset();
        // window.location.href="index.html";
    });
});