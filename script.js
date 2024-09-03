const blockManDOM = document.querySelector('.blockMan');

window.addEventListener('keyup', event => {
    if(event.key === 'w') {
        blockManDOM.style.top = 25 + 'px';
    }
    if(event.key === 's') {
        blockManDOM.style.top = 50 + 'px';
    }
});