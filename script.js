const gameDOM = document.querySelector('.game');
const playBtnDOM = document.querySelector('.playBtn');
const loseScreenDOM = document.querySelector('.loseScreen');
const restartDOM = document.querySelector('.restartBtn');

const sqrSize = 48;
    
function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {

    if (loseScreenDOM.dataset.visible === 'true') {
        loseScreenDOM.dataset.visible = 'false';
    }

    function restart() {
        blockManPos.y = 2;
        blockManPos.x = 2;
        loseScreenDOM.dataset.visible = 'false';
        blockManDOM.style.top = (sqrSize * blockManPos.y) + 'px';
        blockManDOM.style.left = (sqrSize * blockManPos.x) + 'px';
        loseScreenDOM.querySelector('h2').textContent = 'YOU  LOST';
    }

    gameDOM.innerHTML = `<div class="line">${'<div class="sqr"></div>'.repeat(15)}
    </div>`.repeat(15) + '<div><div class="blockMan"></div></div>';
    gameDOM.innerHTML += '<div class="sword">></div>';
    gameDOM.innerHTML += '<div class="enemy"></div>'.repeat(randomInterval(3, 6));
  
    const blockManDOM = document.querySelector('.blockMan');
    const enemyDOM = document.querySelectorAll('.enemy');
    const swordDOM = document.querySelector('.sword');

    const blockManPos = {
        x: 2,
        y: 2,
    };

    console.log(enemyDOM);
    
    for (const enemy of enemyDOM) {
        enemy.style.top = (sqrSize * randomInterval(3, 13)) + 'px';
        enemy.style.left = (sqrSize * randomInterval(3, 13)) + 'px';
    }

    

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

        for (const enemy of enemyDOM) {
            if (blockManDOM.style.top === enemy.style.top && blockManDOM.style.left === enemy.style.left) {
                loseScreenDOM.dataset.visible = 'true';
            }
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
        
        // win screen
        for (const enemy of enemyDOM) {
            if (swordDOM.style.display === 'block') {
                if (swordDOM.style.left === enemy.style.left && swordDOM.style.top === enemy.style.top) {
                    loseScreenDOM.querySelector('h2').textContent = 'YOU  WON';
                    loseScreenDOM.dataset.visible = 'true'; 
                }
            }
            setTimeout(() => {
                swordDOM.style.display = 'none'
            }, 300);  
        }
    }) 
    

    restartDOM.addEventListener('click', restart)      
}
playBtnDOM.addEventListener('click', play)


    




// const lineDOM = document.querySelector('.line');
// const sqrDOM = document.querySelector('.sqr');

