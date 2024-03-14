const text = document.querySelector(".second");
const image = document.querySelectorAll(".picture");

function update_text() {
    setTimeout(() => {
        text.textContent = `Software Engineer`;
    }, 0);
    setTimeout(() => {
        text.textContent = `Programmer`;
    }, 4000);
    setTimeout(() => {
        text.textContent = `Creator`;
    }, 8000);
}

function update_image() {
    image.forEach((el) => {
        el.classList.add("picture_mov");
    });
}

update_image();
update_text();
setInterval(update_text, 12000);

const observeHome = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { // Check if at least 50% of the section is visible
            entry.target.classList.add("show");
        } /* else {
            entry.target.classList.remove("show");
        } */
    });
}, { threshold: 0.5 }); // Set threshold to 50%

const homeElements = document.querySelectorAll('.home_page');
homeElements.forEach((el) => {
    observeHome.observe(el);
});

const observeAbout = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { // Check if at least 50% of the section is visible
            entry.target.classList.add("show");
        } /* else {
            entry.target.classList.remove("show");
        } */
    });
}, { threshold: 0.5 }); // Set threshold to 50%

const aboutElements = document.querySelectorAll('.about');
aboutElements.forEach((el) => {
    observeAbout.observe(el);
});

const viewportWidth = window.innerWidth;

document.addEventListener('DOMContentLoaded', function () {
    let target = this.querySelectorAll(".splide");
    target.forEach((el)=>{
        var splide = new Splide(el, {
            type   : 'loop',
            perPage: 2,
            perMove: 1,
            gap:20,
          } );
          
          splide.mount();
    });
    
});

const observecontact = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { // Check if at least 50% of the section is visible
            entry.target.classList.add("show");
        } 
    });
}, { threshold: 0.5 }); // Set threshold to 50%

const aboutElementscontact = document.querySelectorAll('.contact');
aboutElementscontact.forEach((el) => {
    observecontact.observe(el);
});

