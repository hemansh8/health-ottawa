document.addEventListener('DOMContentLoaded', () => {
    new Mmenu('#menu', {
        extensions: ['position-right', 'theme-dark'],
    });
});
document.addEventListener('click', (e) => {
    if (e.target.closest('.mm-navbar')) {
        document.querySelector('#mm-0').click();
    }
});