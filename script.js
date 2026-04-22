// Typing Effect
const words = ["Web Developer", "AI Enthusiast", "Full Stack Learner"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = words[i];

  if (!isDeleting) {
    document.getElementById("typing").innerHTML = current.substring(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typing").innerHTML = current.substring(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

if (document.getElementById("typing")) type();

// Contact Form
const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("msg").innerText = "Message sent!";
    form.reset();
  });
}