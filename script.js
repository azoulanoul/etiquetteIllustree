

// slider 3 images

const slide = ["beer3.png", "beer4.png", "beer2.png"]
let numero = 0


function ChangeSlide(sens){
    numero = numero + sens;
    if (numero < 0 )
    numero = slide.length - 1;
    if (numero > slide.length -1)
    numero = 0
    
    document.getElementById("sliding").src = slide[numero]
}
