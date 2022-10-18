/* MENU BURGER*/

const hamburger = document.querySelector(".hamburger"); // déclaration variable qui ne peut pas être modifiés par des réaffectations ulterieurs so cant be declaré à nouveau
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click",() => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.addEventListener('scroll', () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
})



/*ANIMATION TEXT */ 
const navLinks = document.querySelectorAll("nav a");
const navTextCopy = document.getElementById("nav_big_text");

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("mouseover", function () {
    let navLinkText = this.textContent;
    navTextCopy.textContent = navLinkText;
    navTextCopy.classList.add("big_text_active");
});

navLinks[i].addEventListener("mouseout", function () {
    let navLinkText = this.textContent;
    navTextCopy.textContent = navLinkText;
    navTextCopy.classList.remove("big_text_active");
});
}


/*FOOTER*/ 
function copyrightYear() {
    const yearEl = document.querySelector(".year");
    const date = new Date();
    yearEl.textContent = date.getFullYear();
}

copyrightYear();


