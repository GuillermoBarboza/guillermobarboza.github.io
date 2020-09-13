// NAVBAR TRANSPARENTE ON TOP=0
window.onscroll = function(){

    let navbar = document.getElementById('navbar')

    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        navbar.classList.add('bg-dark');
        ;
      } else {
        navbar.classList.remove('bg-dark');
      }
}

// ROTATE CHEVRON
