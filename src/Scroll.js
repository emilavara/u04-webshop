let lastScrollY = window.scrollY; 
const header = document.querySelector("header"); 

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        
        header.style.transform = "translateY(-100%)";
    } else {

        header.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
});