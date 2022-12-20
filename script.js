

// slider 3 images

const slide = ["beer3.png", "beer4.png", "beer2.png"]
let numero = 0


function ChangeSlide(sens){
    numero = numero + sens;
    if (numero < 0 ){
        numero = slide.length - 1;
        
    }
    if (numero > slide.length -1){

        numero = 0
    }
    
    document.getElementById("sliding").src = slide[numero]
}


// buton color changed
var button = document.getElementById("btnclick");
var div = document.getElementById("formcontainer");

// Set up an event listener for the button click
button.addEventListener("click", function() {
  // Replace the content of the div with the message
  div.innerHTML = "Votre message à bien été envoyé!";
  div.style.color = "orange";
  div.style.fontFamily = "outfit, medium";
  div.style.paddingTop = "10%"
  div.style.fontSize = "50px"
  div.style.textAlign = "center";
});

// le bouton disparait apres click 
  var button = document.getElementById("btnclick");

  // Set up an event listener for the button click
  button.addEventListener("click", function() {
    // Hide the button
    button.style.display = "none";
  });



  // Get a reference to the form and submit button
  var form = document.getElementById("formcontainer");
  var submitButton = document.getElementById("btnclick");
  var errorMessage = document.getElementById("error-message");

  // Set up an event listener for the submit button click
  submitButton.addEventListener("click", function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Select all of the input elements in the form
    var inputs = form.querySelectorAll("input");

    // Flag to track whether all of the inputs are filled out
    var isValid = true;

    // Loop through the inputs
    inputs.forEach(function(input) { if (input.value === "") {
      // Set the flag to false
      isValid = false;
    }
  });

  // Check the flag
  if (isValid) {
    // All of the inputs are filled out, so you can submit the form
    form.submit();
  } else {
    // One or more of the inputs are empty, so show the error message
    errorMessage.style.display = "block";
  }
});



