const navbar = document.querySelector('.mifondo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-solid');
  } else {
    navbar.classList.remove('navbar-solid');
  }
});
