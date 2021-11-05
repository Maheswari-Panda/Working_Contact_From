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
$(document).ready(function () {
    $('.submit').click(function(event){
       event.preventDefault();
       console.log('clicked now');
       
       var name = $('.name').val();
       var number = $('.number').val();
       var email = $('.email').val();
       var message = $('.message').val();
       var status = $('.status');
       status.empty();
       
      
       
    })
 })
