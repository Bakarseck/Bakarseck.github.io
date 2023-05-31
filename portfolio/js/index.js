// toggle icon navbar
let menuIconElement = document.querySelector('#menu-icon');
let navbarElement = document.querySelector('.navbar');

menuIconElement.onclick = () => {
    menuIconElement.classList.toggle('bx-x');
    navbarElement.classList.toggle('active');
}

// scroll section 
let sectionsElements = document.querySelectorAll('section');
let navLinksElements = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sectionsElements.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links

            navLinksElements.forEach(
                links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                }
            )
        }
    });

    let headerElement = document.querySelector('header');

    headerElement.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon navbar when click navbar links (scroll)
    menuIconElement.classList.remove('bx-x');
    navbarElement.classList.remove('active');
}