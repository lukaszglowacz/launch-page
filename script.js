const logo = document.querySelector('.logo');
const h4 = document.querySelector('h4');
const h1 = document.querySelector('.coming-soon');
const toggleButton = document.getElementById('toggleAnimation');
const icon = toggleButton.querySelector('i');

let isAnimationRunning = true;

toggleButton.addEventListener('click', () => {
  if (isAnimationRunning) {
    // Pause animations
    logo.style.animationPlayState = 'paused';
    h4.style.animationPlayState = 'paused';
    h1.style.animationPlayState = 'paused';
    icon.classList.replace('fa-pause', 'fa-play');
  } else {
    // Resume animations
    logo.style.animationPlayState = 'running';
    h4.style.animationPlayState = 'running';
    h1.style.animationPlayState = 'running';
    icon.classList.replace('fa-play', 'fa-pause');
  }
  isAnimationRunning = !isAnimationRunning;
});
