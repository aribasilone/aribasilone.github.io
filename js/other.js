var slideIndex, slides, slideImgs, dots, slideA, slideB, slideC;
var altA, altB, altC;

window.onload = function(){
    slideIndex = 1;
    slideImgs = document.getElementsByClassName("slide-img-3x");
    slides = document.getElementsByClassName("slide-3x");
    
    for (let x = slides.length-1; x >= 0; x--) {
        var dotCont = document.getElementById("dot-container");
        var spanElm = document.createElement("span");
        spanElm.className="dot";
        spanElm.addEventListener("click", selectSlide);
        spanElm.myParam = x;
        dotCont.appendChild(spanElm);
    }
    dots = document.getElementsByClassName("dot");
    dots[slideIndex].className += " active";
}
    
function arrowFunct(i){
    //determine moving left or right
    //default right
    let rl=0;
    if(i<slideIndex){
        rl=1;
        //moving left
    }

    //circular slideshow overindex/underindex
    if (i >= slides.length) {i = 0}
    if (i < 0) {i = slides.length-1}

    //for now hard code since only 3 images
    //for future use, implement a structure like a double linkedlist
        
    //ensure array index is accessible, i.e. if left index not accessible loop to last index 
    if(slideIndex-1 < 0){
        slideA=slides[slides.length-1].src;
    }
    else{
        slideA = slides[slideIndex-1].src; 
    }
    
    //slide currenlty selected, i.e. where the dot is
    slideB = slides[slideIndex].src;

    //ensure array index is accessible, i.e. if right index not accessible loopback to first index 
    if(slideIndex+1 >=slides.length){
        slideC=slides[0].src
    }
    else{
        slideC = slides[slideIndex+1].src; 
    }
    
    
    //change the images
    //move the center slide in the intended direction (left/right)
    slides[i].src=slideB;
    
    //move the left slide in the intended direction, but ensure array index is accessible
    if(i-1 < 0){
        
        slides[slides.length-1].src=slideA;
        
    }
    else{
        slides[i-1].src=slideA; 
    }

    //move the right slide in the intended direction, but ensure array index is accessible
    if(i+1 >=slides.length){
        slides[0].src=slideC;
    }
    else{
        slides[i+1].src=slideC;  
    }
     
    //set slide index and dots 
    if(rl==0){
        if(slideIndex-1<0){
            slideIndex=slides.length-1;
        }else{
            slideIndex -=1;
        }
        
    }
    else if(rl==1){
        if(slideIndex+1>=slides.length){
            slideIndex=0;
        }
        else{
            slideIndex+=1;
        }
    }
    
    setDots();

}

function slideFunct(i){
    //check that same one not reselected
    if(i != slideIndex){

        //for now hard code since only 3 images
        //for future use, implement a structure like a double linkedlist

        switch (i){
            case 0: 
                slideA="resources/profilepics/concert_photography_3_1000px.JPG";
                altA="Arianna Basilone photography for concert - stage gear";
                slideB="resources/profilepics/concert_photography_2_1000px.JPG";
                altB="Arianna Basilone photography for concert - stage lighting";
                slideC="resources/profilepics/concert_photography_1000px.JPG";
                altC="Arianna Basilone as photographer on concert stage";
                break;
            case 1: 
                slideA="resources/profilepics/concert_photography_2_1000px.JPG";
                altA="Arianna Basilone photography for concert - stage lighting";
                slideB="resources/profilepics/concert_photography_1000px.JPG";
                altB="Arianna Basilone as photographer on concert stage";
                slideC="resources/profilepics/concert_photography_3_1000px.JPG";
                altC="Arianna Basilone photography for concert - stage gear";
                break;
            case 2: 
                slideA="resources/profilepics/concert_photography_1000px.JPG";
                altA="Arianna Basilone as photographer on concert stage";
                slideB="resources/profilepics/concert_photography_3_1000px.JPG";
                altB="Arianna Basilone photography for concert - stage gear";
                slideC="resources/profilepics/concert_photography_2_1000px.JPG";
                altC="Arianna Basilone photography for concert - stage lighting";
                break;
            default:  
                slideA="resources/profilepics/concert_photography_2_1000px.JPG";
                altA="Arianna Basilone photography for concert - stage lighting";
                slideB="resources/profilepics/concert_photography_1000px.JPG";
                altB="Arianna Basilone as photographer on concert stage";
                slideC="resources/profilepics/concert_photography_3_1000px.JPG";
                altC="Arianna Basilone photography for concert - stage gear";
                break;
        }

        slideImgs[0].src=slideA;
        slideImgs[0].alt=altA;

        slideImgs[1].src=slideB;
        slideImgs[1].alt=altB;

        slideImgs[2].src=slideC;
        slideImgs[2].alt=altC;
        
        //set slide index
        slideIndex=i;
        setDots();       
            
    }

}
    
function setDots(){
    //show positioning via dots
    Array.prototype.forEach.call(dots, elm => {
        if (elm.myParam == slideIndex){
            elm.className += " active";
        }
        else{
            elm.className=elm.className.replace(" active", "");
        }           
    });    
}
function plusSlides(n) {arrowFunct2(slideIndex + n);}

function selectSlide(e) {slideFunct(e.currentTarget.myParam);}

function arrowFunct2(i){
    //this version of the function copies the whole node including alt as well as src attributes

    //determine moving left or right
    //default right
    let rl=0;
    if(i<slideIndex){
        rl=1;
        //moving left
    }

    //circular slideshow overindex/underindex
    if (i >= slides.length) {i = 0}
    if (i < 0) {i = slides.length-1}
        
    //ensure array index is accessible, i.e. if left index not accessible loop to last index 
    if(slideIndex-1 < 0){
        slideA=slides[slides.length-1].cloneNode(true);
    }
    else{
        slideA = slides[slideIndex-1].cloneNode(true);
    }
    
    //slide currenlty selected, i.e. where the dot is
    slideB = slides[slideIndex].cloneNode(true);

    //ensure array index is accessible, i.e. if right index not accessible loopback to first index 
    if(slideIndex+1 >=slides.length){
        slideC=slides[0].cloneNode(true);
    }
    else{
        slideC = slides[slideIndex+1].cloneNode(true); 
    }
    
    //change the images
    //move the center slide in the intended direction (left/right)
    
    slides[i].replaceWith(slideB);
    
    
    //move the left slide in the intended direction, but ensure array index is accessible
    if(i-1 < 0){
        
        slides[slides.length-1].replaceWith(slideA);
        
    }
    else{
        slides[i-1].replaceWith(slideA); 
    }

    //move the right slide in the intended direction, but ensure array index is accessible
    if(i+1 >=slides.length){
        slides[0].replaceWith(slideC);
    }
    else{
        slides[i+1].replaceWith(slideC);  
    }
     
    //set slide index and dots 
    if(rl==0){
        if(slideIndex-1<0){
            slideIndex=slides.length-1;
        }else{
            slideIndex -=1;
        }
        
    }
    else if(rl==1){
        if(slideIndex+1>=slides.length){
            slideIndex=0;
        }
        else{
            slideIndex+=1;
        }
    }
    
    setDots();
}