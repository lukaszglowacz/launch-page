const logo = document.querySelector('.logo');
const h4 = document.querySelector('h4');
const toggleButton = document.getElementById('toggleAnimation');
const icon = toggleButton.querySelector('i');
const h1 = document.querySelector('h1');

let isAnimationRunning = true;

toggleButton.addEventListener('click', () => {
    if (isAnimationRunning) {
        // Pause all animations
        logo.style.animationPlayState = 'paused';
        h4.style.animationPlayState = 'paused';
        h1.style.animationPlayState = 'paused';
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        // Resume all animations
        logo.style.animationPlayState = 'running';
        h4.style.animationPlayState = 'running';
        h1.style.animationPlayState = 'running';
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
    isAnimationRunning = !isAnimationRunning;
});
