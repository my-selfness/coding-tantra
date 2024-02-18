const menuBtnI = document.querySelector(".fa-solid")
const whatsappBtn = document.querySelector(".whatsapp-mob-btn")
const bodyAllElement = document.getElementById("all-content")
let isMenuOpened=false


function mobileNav(){
    const mobileNav = document.querySelector(".mobile-nav")
    const isMobileNavHidden = window.getComputedStyle(mobileNav).display === "none";
    if(isMobileNavHidden){
        isMenuOpened=true
        bodyAllElement.classList.add("blur-bg")
        whatsappBtn.style.display="none"
        mobileNav.classList.remove("closeSlide")
        mobileNav.classList.add("slide")
        mobileNav.style.display="flex"
        mobileNav.style.opacity="1"
        menuBtnI.classList.replace("fa-bars", "fa-xmark")
        menuBtnI.style.color="rgba(0,0,0,0.9)"
        
    }
    else{
        isMenuOpened=false
        mobileNav.classList.remove("slide")
        mobileNav.classList.add("closeSlide")
        bodyAllElement.classList.remove("blur-bg")
        mobileNav.style.display="none"
        mobileNav.style.opacity="0"
        menuBtnI.classList.replace("fa-xmark", "fa-bars")
        menuBtnI.style.color="rgba(82, 92, 235, 0.8)"
        whatsappBtn.style.display="flex"
        }
}
const menuBtn=document.querySelector(".menu-btn")
menuBtn.addEventListener("click",mobileNav)

window.addEventListener("scroll", function () {
    if (isMenuOpened) {
        mobileNav();
    }
});



// allCards.addEventListener("wheel",(evt)=>{
//     evt.preventDefault()
//     allCards.scrollLeft+=evt.deltaY
// })


// swapper for the testimonial section 
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

function autoSlide() {
    swiper.slideNext(); 
}

setInterval(autoSlide, 3000);



// for preloading screen
const loadeContainer = document.querySelector(".loader-container")
		const pageContent = document.querySelector("#all-content")

		window.addEventListener('load',()=>{
            loadeContainer.classList.add("hidden")
			pageContent.classList.add("visible")
            menuBtn.classList.add("visible")
            whatsappBtn.classList.add("visible")
		})