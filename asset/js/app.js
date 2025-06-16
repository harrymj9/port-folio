

  const menuBurger = document.getElementById("menu-burger");
  const navLinks = document.querySelector(".navbar .links");

  menuBurger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });






/* ========== ANIMATED TEXT  ==========
*/
  const words = ["WEB DESIGNER", "FRONT-END", "BACK-END", "MACHINE LEARNING"];
  let i = 0;
  let j = 0;
  let currentWord = '';
  let isDeleting = false;
  const speed = 100;
  const typingElement = document.getElementById('typing');

  function type() {
    currentWord = words[i];
    typingElement.innerHTML = currentWord.substring(0, j);

    if (!isDeleting && j < currentWord.length) {
      j++;
      setTimeout(type, speed);
    } else if (isDeleting && j > 0) {
      j--;
      setTimeout(type, speed / 2);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        i = (i + 1) % words.length;
      }
      setTimeout(type, 1000);
    }
  }

  type();

/* ========== BACK TO TOP BUTTON ==========*/
  const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});


