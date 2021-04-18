const ham = document.querySelector("#ham-menu");
const close = document.querySelector("#close-menu");
const menu = document.querySelector(".navbar-menu");
const navLinks = document.querySelectorAll(".nav-link");
ham.addEventListener("click", () => {
	menu.classList.toggle("navbar-collapse");
	ham.classList.toggle("hide-it");
	close.classList.toggle("hide-it");
	console.log(menu.classList);
});
close.addEventListener("click", () => {
	menu.classList.toggle("navbar-collapse");
	ham.classList.toggle("hide-it");
	close.classList.toggle("hide-it");
	console.log(menu.classList);
});
navLinks.forEach((single) => {
	if (window.innerWidth <= 400) {
		single.addEventListener("click", () => {
			menu.classList.toggle("navbar-collapse");
			ham.classList.toggle("hide-it");
			close.classList.toggle("hide-it");
		});
	}
});
