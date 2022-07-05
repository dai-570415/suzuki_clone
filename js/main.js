const showElementAnimation = () => {
    const element = document.getElementsByClassName('smoothScroll');
    if (!element) return;

    const showTiming = window.innerHeight > 768 ? 200 : 40;
    const scrollY = window.pageYOffset;
    const windowH = window.innerHeight;

    for (let i=0; i<element.length; i++) { 
        const elemClientRect = element[i].getBoundingClientRect(); 
        const elemY = scrollY + elemClientRect.top; 
        
        if(scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if (scrollY + windowH < elemY) {
            element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');

const setActive = i => {
    for (slide of slides) {
        slide.classList.remove('active');
        slides[i].classList.add('active');
    }
    for (dot of dots) {
        dot.classList.remove('active');
        dots[i].classList.add('active');
    }
}
for (let j=0; j<dots.length; j++) {
    dots[j].addEventListener('click', function() {
        setActive(j);
    });
}