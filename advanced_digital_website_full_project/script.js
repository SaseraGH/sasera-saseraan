// Slider for images in index.html
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function changeSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].style.display = 'block';
}

setInterval(changeSlide, 3000);

// Form validation and interactivity for other pages
document.getElementById('career-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Aplikasi Anda telah diterima! Terima kasih.");
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Pesan Anda telah terkirim!");
});
