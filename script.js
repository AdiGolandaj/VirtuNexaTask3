

const mysteryCard = document.querySelector('.card');
const startCard = document.querySelector('.startArea');
const resetBtn = document.querySelector('.rotate');

const btns = [
 btn1 = document.querySelector('.btn1'),
 btn2 = document.querySelector('.btn2'),
 btn3 = document.querySelector('.btn3'),
 btn4 = document.querySelector('.btn4')
]



mysteryCard.addEventListener('click', function () {
    if(!mysteryCard.style.scale || !mysteryCard.style.scale === '0.8') {
        mysteryCard.style.animation  = 'moveLeft 1s ease-in-out forwards';
        startCard.style.animation = 'moveRight 1s ease-in-out forwards';
        resetBtn.style.animation = 'moveDown 1s ease-in-out forwards';

        document.querySelector('.startGame').style.animation = 'removeOpacity 1s ease-in-out forwards';

        document.querySelector('.cardFront').style.animation = 'removeOverlay 1s ease-in-out forwards';

        startGame();
        
        setTimeout(() => {
        btns[0].style.animation = 'moveRight 1s ease-in-out forwards';
        btns[1].style.animation = 'moveLeft 1s ease-in-out forwards';
        btns[2].style.animation = 'moveDownbtn 1s ease-in-out forwards';
        btns[3].style.animation = 'moveUpbtn 1s ease-in-out forwards';
        }, 1500);
    }

    setTimeout(() => {
        mysteryCard.style.transform = 'translateX(-60%)';
        mysteryCard.style.animation = '';
        mysteryCard.style.scale = 0.8;
    }, 1000);
});


function rotateCARD(){
    if(mysteryCard.style.transform === 'translateX(-60%) rotateY(180deg)') {
        mysteryCard.style.transform = 'translateX(-60%) rotateY(0deg)';
        return;
    }else{
    mysteryCard.style.transform = 'translateX(-60%) rotateY(180deg)';
    }
}

function ResetGame(){
    
}



resetBtn.addEventListener('click', ResetGame);

const cardBack = document.querySelector('.cardBack');

const cards = ['./joker.png', './king.png', './queen.png', './ace.png'];

function SelectRandomCard(){
    let random = Math.floor(Math.random() * 4);
    return random;
}

function startGame(){
    let random = SelectRandomCard();
    console.log(random);
    cardBack.style.backgroundImage = `url(${cards[random]})`;
    resetBtn.textContent = 'GIVE UP';

    btns.forEach((btn, index) => {
        btn.addEventListener('click', function(){
            if(random === index){
                alert('You Win');
            }else{
                alert('You Lose');
            }
        });
    });
}