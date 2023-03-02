const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

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