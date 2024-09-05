const gameDOM = document.querySelector('.game');
const playBtnDOM = document.querySelector('.playBtn');
const loseScreenDOM = document.querySelector('.loseScreen');
const restartDOM = document.querySelector('.restartBtn');

const sqrSize = 48;
    
const blockManPos = {
    x: 2,
    y: 2,
};
const enemyPos = {
    x: 5,
    y: 4,
};

playBtnDOM.addEventListener('click', () => {
    gameDOM.innerHTML = `<div class="line">${'<div class="sqr"></div>'.repeat(15)}
    </div>`.repeat(15) + '<div><div class="blockMan"></div><div class="enemy"></div></div>';
  


    const blockManDOM = document.querySelector('.blockMan');
    const enemyDOM = document.querySelector('.enemy');
    

    window.addEventListener('keydown', event => {
        if (event.key === 'w') {
            // if (blockManPos.y > -7) {
                blockManPos.y--
            // }
        }
        if (event.key === 's') {
            // if (blockManPos.y < 7) {
                blockManPos.y++
            // }
        }
        if (event.key === 'a') {
            // if (blockManPos.x > -15) {
                blockManPos.x--
            // }
        }
        if (event.key === 'd') {
            // if (blockManPos.x < -1) {
                blockManPos.x++
            // }
        }
        
        blockManDOM.style.top = (sqrSize * blockManPos.y) + 'px';
        blockManDOM.style.left = (sqrSize * blockManPos.x) + 'px';
        enemyDOM.style.top = (sqrSize * enemyPos.y) + 'px';
        enemyDOM.style.left = (sqrSize * enemyPos.x) + 'px';
        console.log(blockManDOM.style.top, blockManDOM.style.left);
        console.log(enemyDOM.style.top, enemyDOM.style.left);

        if (blockManDOM.style.top === enemyDOM.style.top &&
            blockManDOM.style.left === enemyDOM.style.left) {
            loseScreenDOM.dataset.visible = 'true';
        }
        

    })   

})


    





// const lineDOM = document.querySelector('.line');
// const sqrDOM = document.querySelector('.sqr');

