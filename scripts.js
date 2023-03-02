const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const clickSound = new Audio('sounds/Click Sound.mp3')
const breakSound = new Audio('sounds/Glass Broken.mp3')

function lampOn () {
    if ( !lampBroken ( ) ) {
    lamp.src = 'images/ligada.jpg';
    }
}

function lampOff () {
    if ( !lampBroken ( ) ) {
    lamp.src = 'images/desligada.jpg';
    }
}

function lampBreak () {
    lamp.src = 'images/quebrada.jpg';
}

function lampBroken () {
    return lamp.src.indexOf( 'quebrada' ) > -1;
}

turnOn.addEventListener('click', lampOn);

turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);

lamp.addEventListener('mouseout', lampOff);

lamp.addEventListener ('dblclick', lampBreak);

lamp.addEventListener ('dblclick', () => {
    breakSound.play()
});

turnOn.addEventListener('click' , () => {
    clickSound.play()
});

turnOff.addEventListener('click' , () => {
    clickSound.play()
});