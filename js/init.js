var email = document.getElementById("email");
var text = document.getElementById('text');
    
var emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        
// When the user clicks on the password field, show the message box
email.onfocus = function() {
    document.getElementById("text").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
email.onblur = function() {
    document.getElementById("text").style.display = "none";
}
email.onkeyup = function() {
    
    
  if (email.value.match(emailpattern)) {
    form.classList.add('valid')
    form.classList.remove('invalid')
    text.style.display='none';
    text.innerHTML = "Your Email Address in valid"
    text.style.color = '#0000ff'
    
  } else {
    form.classList.remove('valid')
    form.classList.add('invalid')
    text.style.display='block';
    text.innerHTML = "Please Enter Valid Email Address"
    text.style.color = '#ff0000'
  }

  if (email.value == '') {
    form.classList.remove('valid')
    form.classList.remove('invalid')
    text.style.display='none';
    text.innerHTML = ""
    text.style.color = '#00ff00'
  }

}



var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


// //confirm password
// var name =document.getElementById('username');
// var text1 = document.getElementById('name');
// var namepattern =/^[a-zA-Z\d\s]{10,}/;

// name.onfocus = function() {
//   document.getElementById("name").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// name.onblur = function() {
//   document.getElementById("name").style.display = "none";
// }
// name.onkeyup = function() {
//   if (name.value.match(namepattern)) {
//     form.classList.add('valid')
//     form.classList.remove('invalid')
//     text1.style.display='block';
//     text1.innerHTML = "Your Email Address in valid"


//   }
// }


