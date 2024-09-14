const logo = document.querySelector('.logo');
const toggleButton = document.getElementById('toggleAnimation');
const icon = toggleButton.querySelector('i');

let isAnimationRunning = true;

toggleButton.addEventListener('click', () => {
    if (isAnimationRunning) {
        logo.style.animationPlayState = 'paused';
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        logo.style.animationPlayState = 'running';
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }
    isAnimationRunning = !isAnimationRunning;
});
