var slideIndex, slides, dots;

window.onload = function(){
    slideIndex = 1;
    slides = document.getElementsByClassName("slide-img");
    
    for (let x = 1; x <= slides.length; x++) {
        var dotCont = document.getElementById("dot-container");
        var spanElm = document.createElement("span");
        spanElm.className="dot";
        spanElm.addEventListener("click", selectSlide);
        spanElm.myParam = x;
        dotCont.appendChild(spanElm);
    }
    dots = document.getElementsByClassName("dot");
    dots[slideIndex-1].className += " active";
}
    
function slideFunct(i){
    //circular slideshow overindex/underindex
    if (i > slides.length) {i = 1}
    if (i < 1) {i = slides.length}

    //check that same one not reselected
    if(i != slideIndex){
        //hide prev shown slide
        slides[slideIndex-1].style.display = "none";
        dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");

        //set slide index
        slideIndex=i;

        //show selected slide
        slides[i-1].style.display = "block";
        dots[i-1].className += " active";
    }

}
    
function plusSlides(n) {slideFunct(slideIndex + n);}

function selectSlide(e) {slideFunct(e.currentTarget.myParam);}