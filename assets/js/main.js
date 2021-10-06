// variables declaration on the top 
const navMenu = document.getElementById('nav-menu'),
      navToogle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
	  navLink = document.querySelectorAll('.nav__link'),
	  skillsContent = document.getElementsByClassName('skills__content'),
	  skillsHeader = document.querySelectorAll('.skills__header'),
	  tabs = document.querySelectorAll('[data-target]'),
	  tabContents = document.querySelectorAll('[data-content]'),
	  sections = document.querySelectorAll('section[id]'),
	  themeButton = document.getElementById('theme-button'),
	  darkTheme = 'dark-theme',
      iconTheme = 'uil-sun',
	  selectedTheme = localStorage.getItem('selected-theme'),
	  selectedIcon = localStorage.getItem('selected-icon'),

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

	  
// Function Declaration
function scrollActive(){
	const scrollY = window.pageYOffset
	
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')
	
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

function toggleSkills() {
	let itemClass = this.parentNode.className;

	for(i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills__content skills__close";
	}
	if(itemClass === 'skills__content skills__close') {
		this.parentNode.classList = 'skills__content skills__open';
	}
}

function scrollHeader(){
	const nav = document.getElementById('header')
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if(this.scrollY >= 100) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}


if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
  }

// all EventListners

if(navToogle) {
	navToogle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

if(navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

skillsHeader.forEach((el) => {
	el.addEventListener('click', toggleSkills);
})

navLink.forEach(n => n.addEventListener('click', linkAction));

window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', scrollHeader);

window.addEventListener('scroll', scrollUp);

themeButton.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
})

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent => {
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tabs.forEach(tab => {
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})

let swiperPortfolio = new Swiper(".portfolio__container", {
	cssMode: true,
	loop: true,
	navigation: {
	  	nextEl: ".swiper-button-next",
	  	prevEl: ".swiper-button-prev",
	},
	pagination: {
	  	el: ".swiper-pagination",
		clickable: true,
	},
});

// let swiperTestimonial = new Swiper(".testimonial__container", {
// 	loop: true,
// 	grabCursor: true,
// 	spaceBetween: 48,
	
// 	pagination: {
// 	  el: ".swiper-pagination",
// 		clickable: true,
// 		dynamicBullets: true,
// 	},
// 	breakpoints: {
// 		568: {
// 			slidesPerView: 2,
// 		}
// 	},
// });











