const spinnerWrapperEL = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEL.style.opacity = '0';
    setInterval(() => {
        spinnerWrapperEL.style.display = 'none';
    }, 100);
});
