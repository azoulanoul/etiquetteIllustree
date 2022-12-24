

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


// On sélectionne les éléments HTML
const form = document.getElementById("my-form");
const containerForm = document.getElementById("formcontainer");
const buttonSubmit = document.getElementById("btnclick");

// Le formulaire sera exécuté quand on clique sur le btn submit (car il est de type "submit")
// ET si la validation HTML est ok
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // On remplace le formulaire par un msg de remerciement
  containerForm.innerHTML = "Votre message à bien été envoyé!";
  containerForm.style.color = "orange";
  containerForm.style.fontFamily = "outfit, medium";
  containerForm.style.paddingTop = "10%";
  containerForm.style.fontSize = "50px";
  containerForm.style.textAlign = "center";
  buttonSubmit.style.display = "none";
});


