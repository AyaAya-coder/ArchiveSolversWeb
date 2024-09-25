
const firstSlide = document.getElementById('first_slide');
const sliderDec = document.getElementById('slider_dec');

windowHeight = window.innerHeight

window.addEventListener('scroll', function(e){
    sY = window.scrollY
    
    scrollRatio = sY/windowHeight
    scrollRatioPercentage = scrollRatio*100

    firstSlide.style.cssText = `transform: translateX(-${scrollRatio*100}vw)`;
})

// const slideDecTitle = document.getElementById('slide_dec_title');

// slideDecTitleTEXT = slideDecTitle.innerHTML
// // slideDecTitleTEXT.forEach(symbol => {
// //     console.log(symbol)
// // });
// slideDecTitle.innerHTML = ""
// console.log(slideDecTitleTEXT.length)
// for (let index = 0; index < slideDecTitleTEXT.length; index++) {
//     // symbol = slideDecTitleTEXT[index]
//     // slideDecTitle.innerHTML += `<span>${symbol}</span>`;
//     console.log(slideDecTitleTEXT.length)
// }