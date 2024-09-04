const gameDOM = document.querySelector('.game');
const playBtnDOM = document.querySelector('.playBtn')

const sqrSize = 48;
    
const blockManPos = {
    x: -14,
    y: -6,
};

playBtnDOM.addEventListener('click', () => {
    gameDOM.innerHTML = `<div class="line">${'<div class="sqr"></div>'.repeat(15)}
    </div>`.repeat(15) + '<div class="blockMan"></div>';
    gameDOM.style.left = '24px';   

    const lineDOM = document.querySelector('.line');
    const sqrDOM = document.querySelector('.sqr');
    const blockManDOM = document.querySelector('.blockMan');
    

    window.addEventListener('keydown', event => {
        if (event.key === 'w') {
            if (blockManPos.y > -7) {
                blockManPos.y--
            }
        }
        if (event.key === 's') {
            if (blockManPos.y < 7) {
                blockManPos.y++
            }
        }
        if (event.key === 'a') {
            if (blockManPos.x > -15) {
                blockManPos.x--
            }
        }
        if (event.key === 'd') {
            if (blockManPos.x < -1) {
                blockManPos.x++
            }
        }
        
        blockManDOM.style.top = (sqrSize * blockManPos.y) + 'px';
        blockManDOM.style.left = (sqrSize * blockManPos.x) + 'px';
        console.log(blockManPos.x, blockManPos.y);
    })
})



