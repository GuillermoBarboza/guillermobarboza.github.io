// NAVBAR TRANSPARENTE ON TOP=0
window.onscroll = function(){

    let navbar = document.getElementById('navbar')

    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-dark');
        ;
      } else {
        navbar.classList.remove('bg-dark');          
        navbar.classList.add('bg-transparent');
      }
}

// ROTATE CHEVRON
