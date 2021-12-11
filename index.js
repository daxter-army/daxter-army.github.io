let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter("#main", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 1.2, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set("#main", {transformOrigin: "center", force3D: true});

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