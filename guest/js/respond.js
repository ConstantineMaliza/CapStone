function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var uid = getUrlParameter("postuid");
db.collection("Message").doc(uid).get().then(function(snapshot) {
  
  var childData = snapshot.data();
  console.log("message",childData);
  
  document.getElementById("respondedname").innerHTML=childData.fullname;
  document.getElementById("respondForm").querymessage.value=childData.message;

    
});

const respondForm = document.querySelector('#respondForm');

respondForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  const message= respondForm.querymessage.value;
  const responds = respondForm.responds.value;
  var respondData={
    message,
    responds,
    respondeddate:new Date().getTime()
  }

  db.collection('Message').doc(uid).update(respondData).catch(function(error) {
    console.error("Error adding document: ", error);
}).then(function(){
    console.log('successful send!');
    window.location.href="message.html";
});
})