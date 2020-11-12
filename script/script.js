'use strict'
// REPASO INTERMEDIO JAVASCRIPT PARECE MENTIRA... LO VAMOS A LOGRAR//

const main = document.querySelector('.main');
const buttonUpdate = document.querySelector('.update');
const face = document.querySelector('.face__inside');

function collector() {
    const selector = document.querySelector('.selector').value;
        if (selector === 'how') {
        face.innerHTML = '<div class="face__inside">: ?</div>';
        } else if (selector === 'feliz') {
        face.innerHTML = '<div class="face__inside">: )</div>';    
        } else if (selector === 'triste') {
        face.innerHTML = '<div class="face__inside">: (</div>';    
        }     
    }
function random() {
    let random = Math.random() * 101;
    let parse = parseInt(random);
    let pareNone = parse % 2;
    if (pareNone > 0) {
        return main.classList.toggle('switch');
    } 
}
function both() {
    return random() + collector();
}

buttonUpdate.addEventListener('click', both);