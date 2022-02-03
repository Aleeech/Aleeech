function holdFlow() {
  document.querySelector('.text').classList.toggle('holding')
}

// HEADER
let btn = document.querySelector('.menu-btn')
let navMenu = document.querySelector('.nav-menu')
let navLinks = document.querySelectorAll('#dLI')

// Toggle  Dark and Light themes
let themeBtn = document.getElementById('theme-btn')
let checked = 0

themeBtn.addEventListener("click", changeTheme, false)

function changeTheme(e){
  if(e.target.checked){
    document.documentElement.setAttribute("data-newTheme", "dark")
    localStorage.setItem("theme", "dark")
    document.querySelector('.fa-moon').classList.add('fa-sun')
    checked += 1
    console.log(checked)
  }else{
    document.documentElement.setAttribute("data-newTheme", "light")
    localStorage.setItem("theme", "light")
    document.querySelector('.fa-moon').classList.remove('fa-sun')
    console.log("checking")
  }
}

const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null
if(currentTheme){
  document.documentElement.setAttribute("data-newTheme", currentTheme)
  if(currentTheme === "dark"){
    themeBtn.clicked = true
    document.querySelector('.fa-moon').classList.add('fa-sun')
  }
}
























// open and close nav menu
btn.addEventListener("click", openNav)
btn.addEventListener("mouseenter", deviceCan)

function openNav(){
  navMenu.classList.toggle('open')
  btn.classList.toggle('fa-times')
}
function deviceCan() {
  let maxOver = document.querySelector('header')
  if(maxOver.offsetWidth > 920){
    openNav
  }else{
    return
  }
}
// open and close nav menu
// btn.addEventListener("click", openNav)
// btn.addEventListener("mouseenter", openNav)

// function openNav(){
//   navMenu.classList.toggle('open')
//   btn.classList.toggle('fa-times')
// }

// open and close dropdown nav menu links
document.querySelector(".cDT").addEventListener("click", _ =>{
  document.querySelector('.nav-career').classList.toggle('nCM')
  document.querySelector('.fa-angle-double-down').classList.toggle('fa-angle-double-up')
  document.querySelector('.drop').classList.toggle('career-menu')
})
document.querySelector(".cDT2").addEventListener("click", _ =>{
  document.querySelector('.nC2').classList.toggle('nCM')
  document.querySelector('.a2').classList.toggle('fa-angle-double-up')
  document.querySelector('.drop2').classList.toggle('career-menu')
})

// close nav-menu on link acces
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove('open')
    btn.classList.toggle('fa-times')
    document.querySelector('.nC2').classList.remove('nCM')
    document.querySelector('.nav-career').classList.remove('nCM')
    document.querySelector('.fa-angle-double-down').classList.remove('fa-angle-double-up')
    document.querySelector('.a2').classList.remove('fa-angle-double-up')
    document.querySelector('.drop').classList.remove('career-menu')
    document.querySelector('.drop2').classList.remove('career-menu')
  })
})

// toggle night and light modes
// document.querySelector('.fa-sun').addEventListener("click", _ => {
//   document.querySelector("body").classList.toggle('allBg')
//   document.querySelector('.fa-sun').setAttribute("style", "color: #ccc")
// })

// offset the header onskroll
let headerEl = document.querySelector('header')
let position = 0
window.addEventListener('scroll', function() {
  if(position < window.pageYOffset){
    headerEl.classList.add('headerUp')
    position = window.pageYOffset
  } else{
    headerEl.classList.remove('headerUp')
    position = window.pageYOffset
  }
})
