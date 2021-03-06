// SHOW MENU
const showMenu = (toggleId, navbarId,bodyId) =>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId),
  navbg = document.getElementById('navbg');

  if(toggle && navbar){
    toggle.addEventListener('click', ()=>{
      navbar.classList.toggle('show');
      toggle.classList.toggle('rotate');
      navbg.classList.toggle('expander');
    });

    navbg.addEventListener('click', () => {
      navbar.classList.toggle('show');
      toggle.classList.toggle('rotate');
      navbg.classList.toggle('expander');
    });
  }
}
showMenu('nav-toggle','navbar','body');

// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll('.nav__link');   
function colorLink(){
  linkColor.forEach(l => l.classList.remove('active'));
  this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));