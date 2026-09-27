const HamburgerBtn = document.getElementById('header-menu-btn')
const HeaderProjectLinksDiv = document.getElementById('header-projects-links')
let isHeaderOpen = window.innerWidth < 800 ? false : true

window.addEventListener('resize', () => {
    if(window.innerWidth > 800) {
        HeaderProjectLinksDiv.style.display = "block"
        isHeaderOpen = true
    }
    else {
        HeaderProjectLinksDiv.style.display = "none"
        isHeaderOpen = false
    }
})

HamburgerBtn.addEventListener('click', () => {
    console.log('hello')
    if (isHeaderOpen) {
        HeaderProjectLinksDiv.style.display = "none"
        isHeaderOpen = false
    }
    else {
        HeaderProjectLinksDiv.style.display = "block"
        isHeaderOpen = true
    }
})