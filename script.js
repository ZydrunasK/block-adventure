const gameDOM = document.querySelector('.game');
const playBtnDOM = document.querySelector('.playBtn');
const loseScreenDOM = document.querySelector('.loseScreen');
const restartDOM = document.querySelector('.restartBtn');

const sqrSize = 48;
    


function play() {
    gameDOM.innerHTML = `<div class="line">${'<div class="sqr"></div>'.repeat(15)}
    </div>`.repeat(15) + '<div><div class="blockMan"></div><div class="enemy"></div></div>';
  
    const blockManPos = {
        x: 2,
        y: 2,
    };
    const enemyPos = {
        x: 5,
        y: 4,
    };

    const blockManDOM = document.querySelector('.blockMan');
    const enemyDOM = document.querySelector('.enemy');
    

    window.addEventListener('keydown', event => {
        if (event.key === 'w') {
            if (blockManPos.y > 0) {
                blockManPos.y--
            }
        }
        if (event.key === 's') {
            if (blockManPos.y < 14) {
                blockManPos.y++
            }
        }
        if (event.key === 'a') {
            if (blockManPos.x > 0) {
                blockManPos.x--
            }
        }
        if (event.key === 'd') {
            if (blockManPos.x < 14) {
                blockManPos.x++
            }
        }
        
        blockManDOM.style.top = (sqrSize * blockManPos.y) + 'px';
        blockManDOM.style.left = (sqrSize * blockManPos.x) + 'px';
        enemyDOM.style.top = (sqrSize * enemyPos.y) + 'px';
        enemyDOM.style.left = (sqrSize * enemyPos.x) + 'px';

        console.log('block', blockManPos.y, blockManPos.x);
        console.log('enemy', enemyPos.y, enemyPos.x);
        

        if (blockManPos.y === enemyPos.y && blockManPos.x === enemyPos.x) {
            loseScreenDOM.dataset.visible = 'true';
            return '';
        }
    })   
}
playBtnDOM.addEventListener('click', play)
restartDOM.addEventListener('click', play)

    





// const lineDOM = document.querySelector('.line');
// const sqrDOM = document.querySelector('.sqr');

