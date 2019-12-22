// const buttonScrollUp = document.querySelector(".button--scroll-up")
// buttonScrollUp.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// })


const navbar = document.querySelector(".navbar")
const navbarMobile = document.querySelector(".navbar-mobile")
const hamburger = document.querySelector("#hamburger")
const mobileLinks = document.querySelector("#navbar-mobile__links")

hamburger.addEventListener("click", (e) => {
    if (!mobileLinks.classList.contains("is-showing")) {
        mobileLinks.classList += " is-showing"
        hamburger.classList += " is-showing"
    }
    else {
        mobileLinks.classList.remove("is-showing")
        hamburger.classList.remove("is-showing")
    }
}
)

let oldScrollPosY = 0;
window.addEventListener("scroll", () => {
    setTimeout(() => {
        oldScrollPosY = window.scrollY;
    }, 50);

    if (window.scrollY > oldScrollPosY) { //scrolled down, show/hide navbar, show scroll up btn
        navbar.classList.remove("is-scrolling-up")
        if (!navbar.classList.contains("is-scrolling-down")) {
            navbar.classList += " is-scrolling-down";
        }

        if (!navbarMobile.classList.contains("is-scrolling")) {
            navbarMobile.classList += " is-scrolling";
        }

    }
    if (window.scrollY < oldScrollPosY) { //scrolled up, show navbar
        navbar.classList.remove("is-scrolling-down")
        if (!navbar.classList.contains("is-scrolling-up"))
            navbar.classList += " is-scrolling-up";

    }
    if (window.scrollY <= 16) { //reset navbar if at top
        navbar.classList.remove("is-scrolling-up")
        navbar.classList.remove("is-scrolling-down")
        navbarMobile.classList.remove("is-scrolling")
    }
})

function scrollToElement(yPos) {
    window.scrollTo({
        top: yPos,
        behavior: 'smooth'
    })
}
const sectionHowItWorks = document.querySelector(".howItWorks")
const sectionAbout = document.querySelector(".about")
const sectionContact = document.querySelector(".footer")

const linksHowItWorks = document.querySelectorAll("[data-js='howItWorks-link']")
const linksAbout = document.querySelectorAll("[data-js='about-link']")
const linksContact = document.querySelectorAll("[data-js='contact-link']")

linksHowItWorks.forEach(linkHowItWorks => {
    linkHowItWorks.addEventListener("click", () => {
        scrollToElement(sectionHowItWorks.offsetTop)
    })
})
linksAbout.forEach(linkAbout => {
    linkAbout.addEventListener("click", () => {
        scrollToElement(sectionAbout.offsetTop)
    })
})

linksContact.forEach(linkContact => {
    linkContact.addEventListener("click", () => {
        scrollToElement(sectionContact.offsetTop)
    })
})