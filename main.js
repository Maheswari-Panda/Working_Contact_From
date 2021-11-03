console.log('Hello World!');

let navbar = document.getElementById('navbar');
let menubar = document.getElementById('menubar');

menubar.onclick = () =>{
   navbar.classList.toggle('active');
   menubar.classList.toggle('fa-times');
}

let themtoggler = document.getElementById('themtoggler');
let body = document.querySelector('body');

themtoggler.onclick = () => {
   themtoggler.classList.toggle('fa-sun');
   body.classList.toggle('active');
}

// contact section
/* let form = document.getElementById('form');

let name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

form.addEventListener('submit', function(){
   console.log('form section');
   
   let info = localStorage.setItem('name');
})
*/