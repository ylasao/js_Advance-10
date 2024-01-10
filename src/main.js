// import javascriptLogo from '../javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from '../counter.js'
// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1 class="text-red-800 font-black">Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
// Innit Object

import Navigo from "navigo";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/aboutPage";
import HeaderPage from "./components/header";
import Footer from "./components/footer";
const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
  document.getElementById('header').innerHTML = HeaderPage.header()
  document.getElementById("app").innerHTML = content;
  document.getElementById('footer').innerHTML = Footer.footer()
};

 
 
router.on({
  "/": () => {
    render(HomePage.home());
  },
  "/about": () => {
    render(AboutPage.about());
  },
});

router.resolve();
// class Student {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }

//   showInfo() {
//     console.log(`
//       Name : ${this.name}
//       Age : ${this.age}
//     `);
//   }
// }

// const studentOne = new Student("ylasao", 20);
// console.log(studentOne.name);
// console.log(studentOne.showInfo());
