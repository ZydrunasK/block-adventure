const gameDOM = document.querySelector('.game');
const playBtnDOM = document.querySelector('.playBtn');
const endScreenDOM = document.querySelector('.endScreen');
const restartDOM = document.querySelector('.restartBtn');

const sqrSize = 48;

function isAlive(arr) {
    let resArr = true;
    for (const val of arr) {
       if (val.dataset.alive === 'false') {
        resArr = false;
       } else {
           resArr = true;
           break;
       }
    }
    return resArr;
};

function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {
    
    if (endScreenDOM.dataset.visible === 'true') {
        endScreenDOM.dataset.visible = 'false';
    }
    
    gameDOM.innerHTML = `<div class="line">${'<div class="sqr"></div>'.repeat(15)}
    </div>`.repeat(15) + '<div><div class="blockMan"></div></div>';
    gameDOM.innerHTML += '<div class="sword">></div>';
    gameDOM.innerHTML += '<div class="enemy" data-alive="true"></div>'.repeat(randomInterval(2, 2));
    
    const blockManDOM = document.querySelector('.blockMan');
    const enemyDOM = document.querySelectorAll('.enemy');
    const swordDOM = document.querySelector('.sword');
    
    const blockManPos = {
        x: 2,
        y: 2,
    };
    
    for (const enemy of enemyDOM) {
        enemy.style.top = (sqrSize * randomInterval(3, 13)) + 'px';
        enemy.style.left = (sqrSize * randomInterval(3, 13)) + 'px';
    }
    
    let lastMove = 'd';

    // block walking
    window.addEventListener('keydown', e => {
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
            lastMove = 'a';
            if (blockManPos.x > 0) {
                blockManPos.x--
            }
        }
        if (e.key === 'd') {
            lastMove = 'd';
            if (blockManPos.x < 14) {
                blockManPos.x++
            }
        }

        blockManDOM.style.top = (sqrSize * blockManPos.y) + 'px';
        blockManDOM.style.left = (sqrSize * blockManPos.x) + 'px';

        // sword stuff
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
        setTimeout(() => {
            swordDOM.style.display = 'none'
        }, 300);  

        // kill / lose
        for (const enemy of enemyDOM) {
            if (swordDOM.style.display === 'block') {
                if (swordDOM.style.left === enemy.style.left
                    && swordDOM.style.top === enemy.style.top
                    && enemy.dataset.alive === 'true') {
                        enemy.dataset.alive = 'false';
                    }
                }
            if (blockManDOM.style.top === enemy.style.top
                && blockManDOM.style.left === enemy.style.left
                && enemy.dataset.alive === 'true') {
                endScreenDOM.dataset.visible = 'true';
            }
        }
        // win screen
        if (!isAlive(enemyDOM)) {
            endScreenDOM.querySelector('h2').textContent = 'YOU  WON';
            endScreenDOM.dataset.visible = 'true'; 
        }
    }) 
}
playBtnDOM.addEventListener('click', play)
restartDOM.addEventListener('click', play) 
    




