// import { Typewriter } from "https://unpkg.com/typewriter-effect@latest/dist/core.js";

// new Typewriter(".type", {
//   strings: ["Hello", "World"],
//   autoStart: true,
// });
/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });

const projects = [
  {
    id: 1,
    title: "E-POLICE",
    url: "https://github.com/ayush-work/E-POLICE",
    description: "A Smart E-policing app built using flutter",
    tech: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: 2,
    title: "Missing Person",
    url: "https://github.com/ayush-work/Missing-People",
    description: "A community connect for finding missing person",
    tech: ["Flutter", "Firebase", "Dart"],
  },
  {
    id: 3,
    title: "traCovid",
    url: "https://github.com/ayush-work/traCovid",
    description: "A simple covid-19 tracking app built using React",
    tech: ["React"],
  },
  {
    id: 4,
    title: "OCR-NLP",
    url: "https://github.com/ayush-work/ocr-nlp",
    description:
      "An online text recognizer and converter built using React and Tesseract.js ",
    tech: ["React", "Tesseract", "Tensorflow"],
  },
  {
    id: 4,
    title: "Online Blood Bank Donation portal",
    url: "https://github.com/ayush-work/Blood_Bank",
    description: "An online Blood bank donation portal ",
    tech: ["HTML", "CSS"],
  },
];
const workImg = document
  .querySelector(".work__container")
  .querySelectorAll(".work__img");
let imgLink = document.createElement("a");
workImg.forEach((img, idx) => {
  img.innerHTML = `
  <a href=${projects[idx].url} target="_blank">
  <img src="/assets/img/work${idx + 1}.png" alt="" class='demo-img'/>
  <div class='overlay'></div>
  <div class='project_title'>${projects[idx].title}</div>
  <div class="content">${
    projects[idx].description
  }   <div class="project_stack"><h2>Built Using: </h2>${projects[
    idx
  ].tech.join(", ")}</div></div>

  
  `;
});
var type = document.querySelector(".type");
