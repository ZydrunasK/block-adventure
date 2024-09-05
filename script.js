const gameDOM = document.querySelector('.game');
const playBtnDOM = document.querySelector('.playBtn');
const loseScreenDOM = document.querySelector('.loseScreen');
const restartDOM = document.querySelector('.restartBtn');

const sqrSize = 48;
    


function play() {

    if (loseScreenDOM.dataset.visible === 'true') {
        loseScreenDOM.dataset.visible = 'false';
    }

    gameDOM.innerHTML = `<div class="line">${'<div class="sqr"></div>'.repeat(15)}
    </div>`.repeat(15) + '<div><div class="blockMan"></div><div class="enemy"></div></div>';
    gameDOM.innerHTML += '<div class="sword">></div>';
  
    const blockManDOM = document.querySelector('.blockMan');
    const enemyDOM = document.querySelector('.enemy');
    const swordDOM = document.querySelector('.sword');

    const blockManPos = {
        x: 2,
        y: 2,
    };
    const enemyPos = {
        x: 5,
        y: 4,
    };
    enemyDOM.style.top = (sqrSize * enemyPos.y) + 'px';
    enemyDOM.style.left = (sqrSize * enemyPos.x) + 'px';

    let lastMove = 'd';
// block walking
    window.addEventListener('keydown', e => {
        if (e.key === 'a') {
            lastMove = 'a';
        }
        if (e.key === 'd') {
            lastMove = 'd';
        }

        if (e.key === 'w') {
            if (blockManPos.y > 0) {
                blockManPos.y--
            }
        }
        if (e.key === 's') {
            if (blockManPos.y < 14) {
                blockManPos.y++
            }
        }
        if (e.key === 'a') {
            if (blockManPos.x > 0) {
                blockManPos.x--
            }
        }
        if (e.key === 'd') {
            if (blockManPos.x < 14) {
                blockManPos.x++
            }
        }

        blockManDOM.style.top = (sqrSize * blockManPos.y) + 'px';
        blockManDOM.style.left = (sqrSize * blockManPos.x) + 'px';

        if (blockManPos.y === enemyPos.y && blockManPos.x === enemyPos.x) {
            loseScreenDOM.dataset.visible = 'true';
        }

    }) 

    // sword usage
    window.addEventListener('keydown', (e) => {
        swordDOM.style.direction = 'ltr';
        swordDOM.style.top = (sqrSize * blockManPos.y) + 'px';
        swordDOM.style.left = (sqrSize * blockManPos.x) + 48 + 'px';

        if (lastMove === 'a') {
            swordDOM.style.left = (sqrSize * blockManPos.x) - 48 + 'px';
            swordDOM.style.direction = 'rtl';
        }

        if (e.key === ' ') {
            swordDOM.style.display = 'block'
        }
    })    
    window.addEventListener('keyup', (e) => {
        if (e.key === ' ') {
            swordDOM.style.display = 'none'
        }
    })    

    restartDOM.addEventListener('click', () => {
        blockManPos.y = 2;
        blockManPos.x = 2;
        enemyPos.y = 4;
        enemyPos.x = 5;
        loseScreenDOM.dataset.visible = 'false';
        blockManDOM.style.top = (sqrSize * blockManPos.y) + 'px';
        blockManDOM.style.left = (sqrSize * blockManPos.x) + 'px';
    })      
}
playBtnDOM.addEventListener('click', play)


    




// const lineDOM = document.querySelector('.line');
// const sqrDOM = document.querySelector('.sqr');

