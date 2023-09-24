// home section 

var typed = new Typed(".text", {
  strings:["Software Engineer","Frontend Developer" , "Web Developer" ],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1500,
  loop:true
});


// Submit button

document.getElementById("submitButton").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var textarea = document.getElementById("textarea").value;

  if (name === "" || email === "" || subject === "" || textarea === "") {
    window.alert("Please fill in all fields before submitting.");
  } 
  else {
    window.alert("Thank you for submitting!");
  }
});


// toggle button 

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-background");
  const body = document.body;

  toggleButton.addEventListener("change", function () {
    if (toggleButton.checked) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  });
});






