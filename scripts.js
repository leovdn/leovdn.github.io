function startSmoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollSection);
    })
}
startSmoothScroll();


// substituição por icones

function ativarLink() {
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link) => {
       
        function checkWidth(width) {
            if (width.matches) { // If media query matches
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
        let width = window.matchMedia("(max-width: 739px)")
        checkWidth(width) 
        width.addListener(checkWidth)
    })
}
ativarLink();

// fas fa-graduation-cap
