
const cards = document.querySelectorAll(".fade-card");

function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showCardsOnScroll);
window.addEventListener("load", showCardsOnScroll);

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


    //   CONTACT

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  if (name) {
    alert(`Thanks ${name}, your message was sent 🎉😊`);
    e.target.reset();
  } else {
    alert("⚠ Please fill all fields.");
  }
});

   //  CLIENT

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 300); 
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  slides.forEach(slide => observer.observe(slide));
});


  // PRTFOLIO

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("section div");

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});



// menna

document.addEventListener("DOMContentLoaded", () => {
  // Navbar Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const links = document.querySelectorAll('.navbar a');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuToggle.textContent = navbar.classList.contains('active') ? "✖" : "☰";
    });

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
        navbar.classList.remove('active');
        menuToggle.textContent = "☰";
      });
    });
  }

  // About Counters
  const aboutSection = document.querySelector('#about_page');
  const counters = document.querySelectorAll('#about_page .num_p');

  function runCounters() {
    counters.forEach(el => {
      let target = parseInt(el.textContent, 10);
      let count = 0;
      const speed = Math.ceil(target / 100);
      const update = () => {
        count += speed;
        if (count < target) {
          el.textContent = count + "+";
          requestAnimationFrame(update);
        } else {
          el.textContent = target + "+";
        }
      };
      update();
    });
  }

  if (aboutSection && counters.length) {
    const observer1 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        runCounters();
        observer1.disconnect();
      }
    }, { threshold: 0.3 });
    observer1.observe(aboutSection);
  }

  // Resume Ranges
  const resumeSection = document.querySelector('#resume_page');
  const ranges = document.querySelectorAll('#resume_page input[type="range"]');

  function animateRanges() {
    ranges.forEach(range => {
      let target = parseInt(range.value, 10);
      let val = 0;
      range.value = 0;
      const fill = () => {
        val++;
        if (val <= target) {
          range.value = val;
          requestAnimationFrame(fill);
        }
      };
      fill();
    });
  }

  if (resumeSection && ranges.length) {
    const observer2 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateRanges();
        observer2.disconnect();
      }
    }, { threshold: 0.3 });
    observer2.observe(resumeSection);
  }
});

// Typing Effect
const words = ["Menna Yousri.", "a Freelancer.", "a Programmer.", "a Web Developer."];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  const textSpan = document.getElementById("changing-text");

  if (!textSpan) return;

  if (isDeleting) {
    currentWord = words[wordIndex].substring(0, charIndex--);
  } else {
    currentWord = words[wordIndex].substring(0, charIndex++);
  }

  textSpan.textContent = currentWord;

  let typingSpeed = isDeleting ? 100 : 200;

  if (!isDeleting && charIndex === words[wordIndex].length) {
    typingSpeed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, typingSpeed);
}

typeEffect();


