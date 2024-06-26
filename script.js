const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 120 && pipePosition > 0 && marioposition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;
        mario.src = 'game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
    }
}, 10);

document.addEventListener('keydown', jump);
