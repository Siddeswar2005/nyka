

const btnPreve = document.querySelector(".btn-container-prev")
const btnNext = document.querySelector(".btn-container-next")
const ImageContainerSlider = document.querySelector("#imageSlideContaienr")

btnNext.addEventListener("click",()=>{
    ImageContainerSlider.scrollLeft += 200;
})

btnPreve.addEventListener("click",()=>{
    ImageContainerSlider.scrollLeft -= 100
})








