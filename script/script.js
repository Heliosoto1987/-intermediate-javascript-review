'use strict'
// REPASO INTERMEDIO JAVASCRIPT PARECE MENTIRA... LO VAMOS A LOGRAR//

const main = document.querySelector('.main');
const buttonUpdate = document.querySelector('.update');
const face = document.querySelector('.face__inside');

function collector() {
    const selector = document.querySelector('.selector').value;
        if (selector === 'how') {
        face.innerHTML =' : ?';
        } else if (selector === 'feliz') {
        face.innerHTML = ': )';    
        } else if (selector === 'triste') {
        face.innerHTML = ': (';    
        }     
    }
function random() {
    const random = Math.random() * 101;
    const parse = parseInt(random);
    const pareNone = parse % 2;
    if (pareNone > 0) {
        return main.classList.toggle('switch');
    } 
}
function both() {
    random() 
    collector();
}

buttonUpdate.addEventListener('click', both);