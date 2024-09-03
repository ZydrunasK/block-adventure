const blockManDOM = document.querySelector('.blockMan');


let blockManAxisPos = {
    x: 3,
    y: 3,
}
window.addEventListener('keyup', event => {
    if(event.key === 'w') {
        blockManAxisPos.y--;
    }
    if(event.key === 's') {
        blockManAxisPos.y++;
    }
    if(event.key === 'd') {
        blockManAxisPos.x++;
    }
    if(event.key === 'a') {
        blockManAxisPos.x--;
    }
    blockManDOM.style.top = (40 * blockManAxisPos.y) + 'px';
    blockManDOM.style.left = (40 * blockManAxisPos.x) + 'px';
});

