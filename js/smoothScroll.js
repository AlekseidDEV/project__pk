const navbar = document.querySelector('.header__nav ')
const navLink = navbar.querySelectorAll('a')



navLink.forEach((link) =>{
    link.addEventListener('click' , (event) =>{
        event.preventDefault(link.getAttribute('href'))

        const section = document.querySelector(link.getAttribute('href')) 

        if (section) {
            // section.scrollIntoView({
            //     block: 'start',
            //     behavior: 'smooth'
            // })
            seamless.scrollIntoView(section,{
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        }
    })
})