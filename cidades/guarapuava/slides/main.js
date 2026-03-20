let currentSlide = 1;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(n) {
  document.querySelectorAll('.slide').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById('slide-' + n).classList.add('active');
  document.getElementById('slide-counter').textContent = n + ' / ' + totalSlides;
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 1) currentSlide = totalSlides;
  if (currentSlide > totalSlides) currentSlide = 1;
  showSlide(currentSlide);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
    e.preventDefault();
    changeSlide(1);
  }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault();
    changeSlide(-1);
  }
  if (e.key === 'Home') {
    e.preventDefault();
    currentSlide = 1;
    showSlide(currentSlide);
  }
  if (e.key === 'End') {
    e.preventDefault();
    currentSlide = totalSlides;
    showSlide(currentSlide);
  }
});

// QR Code
QRCode.toCanvas(
  document.createElement('canvas'),
  'https://github.com/DeveloperParana/manual-devpr',
  {
    width: 250,
    margin: 1,
    color: { dark: '#15A04B', light: '#FFFFFF' }
  },
  function(error, canvas) {
    if (!error) {
      document.getElementById('qrcode').appendChild(canvas);
    }
  }
);

showSlide(1);
