let $ = document

/////////////////////////////

// variables ///////////////
const carouselSlide = $.querySelector(".carousel-slide")
const carouselImages = $.querySelectorAll(".carousel-slide img")
const nextBtn = $.querySelector(".nextBtn")
const prevBtn = $.querySelector(".prevBtn")

//counter
let counter = 1    
const size = carouselImages[0].clientWidth

carouselSlide.style.transform = "translateX(" + -size * counter  + "px)" 

// function /////////////////

// to go to the next image
function nextImage (){
    // to avoid leaving the loop when clicking on next btn very fast
    if (counter >= carouselImages.length -1) return

    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter++
    carouselSlide.style.transform = "translateX(" + -size * counter  + "px)" 
}

// to go to the previous image
function prevImage (){
    // to avoid leaving the loop when clicking on previous btn very fast
    if(counter <= 0) return

    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    counter--
    carouselSlide.style.transform = "translateX(" + -size * counter  + "px)" 
}

// to make an infinite loop for the carousel
function stayInCarouselLoop (){
    if(carouselImages[counter].id === "lastClone"){
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - 2
        carouselSlide.style.transform = "translateX(" + -size * counter  + "px)" 
    }else if(carouselImages[counter].id === "firstClone"){
        carouselSlide.style.transition = 'none'
        counter = carouselImages.length - counter
        carouselSlide.style.transform = "translateX(" + -size * counter  + "px)" 
    }
}

// event listeners ////////////////
nextBtn.addEventListener("click" , nextImage)
prevBtn.addEventListener("click" , prevImage)
carouselSlide.addEventListener("transitionend" , stayInCarouselLoop)
setInterval(nextImage , 4000)