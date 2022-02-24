let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.nav');
let vaccines = document.getElementById('vaccines').innerHTML = "Get Vaccines";
let styleVaccine = document.getElementById('vaccines').style.color = "#2ecc71";

let btn1 = document.querySelector('.button1');
//let btn2 = document.querySelector('.button2');
let btn2 = $('.button2').click(function(){
  $(location).attr('href', 'final.html');
});
function transitionFirstPage(){
  document.location.href = "dias.html";
}

btn1.addEventListener('click', transitionFirstPage);

/*$(document).mousemove(function(e){
  $('.covis').css({'letter-spacing' : ''+ (e.pageY)/10+ 'px'})
})*/

let scroll = document.getElementById("top");
window.addEventListener("scroll", function(){
  scroll.style.transform = "rotate("+window.pageYOffset/5+"deg)";
});



menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav a');
window.onscroll = () =>{

    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .nav a[href*='+id+']').classList.add('active');
            });
        };
    });

}
