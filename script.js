var arrowLeft=document.getElementById("prev")
var arrowRight=document.getElementById("next")
var position=1
var pxmt=650
arrowLeft.addEventListener("click", function(){
    position--
    if (position<1)
    {
        position=1
        return
    }
    cardcontainer.scrollLeft -=(pxmt)
})
arrowRight.addEventListener("click", function(){
    position++
    if (position>4)
    {
        position=4
        return
    }
    cardcontainer.scrollLeft +=(pxmt)
 
})
var cardcontainer=document.getElementById("cardcontainer")

