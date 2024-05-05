// JS carousil

// Getting Images src
var allSlides = document.getElementById("allSlides")
var displaySlide = document.getElementById("displaySlide")
// console.log(displaySlide)    // Testing purpose

var allImages = allSlides.getElementsByTagName("IMG")
var allSrc = []

for (var i = 0; i < allImages.length; i++) {
    var src = allImages[i].src
    // console.log(src)     // Testing purpose
    allSrc.push(src)
}


// Render Image Function 
var slideCount = 0;
function renderSlide() {
    displaySlide.src = allSrc[slideCount]
}
renderSlide()

// Next Slide Function
function nextSlide(){
    if(slideCount == allSrc.length - 1){
        slideCount = 0
    } else {
        slideCount ++;
    }
    renderSlide()
}

// Previous Slide Function
function prevSlide(){
    if(slideCount == 0){
        slideCount = allSrc.length - 1
    } else {
        slideCount --;
    }
    renderSlide()
}

