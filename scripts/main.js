

const $randomColor1 = document.querySelector('.nav-front');
const $randomColor2 = document.querySelector('.main-para');
const $randomColor3 = document.querySelector('.second-para');
const $randomColor4 = document.querySelector('.third-para');
const $randomColor5 = document.querySelector('.alignment-chart');
const $randomButton = document.querySelector('.rando');

$randomButton.addEventListener('click', () => {
    $randomColor1.style.background = '#' + randomColor();
    $randomColor2.style.background = '#' + randomColor();
    $randomColor3.style.background = '#' + randomColor();
    $randomColor4.style.background = '#' + randomColor();
    $randomColor5.style.background = '#' + randomColor();
})

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}