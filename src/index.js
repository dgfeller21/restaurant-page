import './style.css'
import homePage from "./home.js"
import menuPage from "./menu.js"
import aboutPage from "./about.js"

const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")
let content = document.querySelector("#content")

home.addEventListener("click", e => {
    content.textContent = ''
    content.classList.remove("menu-content")
    homePage()
})
menu.addEventListener("click", e => {
    content.textContent = ''
    content.append(menuPage())
    content.classList.add("menu-content")
})
about.addEventListener("click", e => {
    content.textContent = ''
    content.classList.remove("menu-content")
    content.append(aboutPage())
})