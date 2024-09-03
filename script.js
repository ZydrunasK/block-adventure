const gameDOM = document.querySelector('.game');

gameDOM.innerHTML = `<div class="line">${'<div class="sqr"></div>'.repeat(15)}
</div>`.repeat(15) + '<div class="blockMan"></div>';

const lineDOM = document.querySelector('.line');
const sqrDOM = document.querySelector('.sqr');
const blockManDOM = document.querySelector('.blockMan');

const sqrSize = 32;

const blockManPos = {
    x: 0,
    y: 0,
};

window.addEventListener('keydown', event => {
    if (event.key === 'w') {
            blockManPos.y--
    }
    if (event.key === 's') {
            blockManPos.y++
    }
    if (event.key === 'a') {
            blockManPos.x--
    }
    if (event.key === 'd') {
            blockManPos.x++
    }

    blockManDOM.style.top = (sqrSize * blockManPos.y) + 'px';
    blockManDOM.style.left = (sqrSize * blockManPos.x) + 17 + 'px';
    console.log(blockManPos.x, blockManPos.y);
    
    
})

