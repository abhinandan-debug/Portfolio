// Function expression to select elements

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
    })
});

// Loading Screen
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
      document.body.classList.add('fade-in');
    }, 500);
  }, 1500);
});

// Intersection Observer for section animations
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Enhanced typing effect
function enhancedType() {
  // ... (keep existing typing code) ...
  
  // Add cursor blink effect
  typingTextElement.style.borderRight = '0.15em solid';
  document.documentElement.style.setProperty('--cursor-visibility', 'visible');
}

// Enhance smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                console.log(index/7 + 0.5)
            }
        })
    })
})

const phrases = ["Web Developer","Software Engineer"];
const typingTextElement = document.querySelector(".typing-text");
let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let isErasing = false;

function type() {
  const currentPhrase = phrases[currentPhraseIndex];
  if (isErasing) {
    if (currentCharacterIndex > 0) {
      typingTextElement.textContent = currentPhrase.substring(0, currentCharacterIndex - 1);
      currentCharacterIndex--;
      setTimeout(type, 100);
    } else {
      isErasing = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  } else {
    if (currentCharacterIndex < currentPhrase.length) {
      typingTextElement.textContent = currentPhrase.substring(0, currentCharacterIndex + 1);
      currentCharacterIndex++;
      setTimeout(type, 100);
    } else {
      isErasing = true;
      const pauseDuration = currentPhraseIndex === phrases.length - 1 ? 10000 : 6000;
      setTimeout(type, pauseDuration);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typingTextElement.textContent = "";
  setTimeout(type, 500);
});