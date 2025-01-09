//alert('esto funciona');

const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');

yesBtn.addEventListener('click',()=>alert('Ya sabía Bebé'));
noBtn.addEventListener('mouseover', function (){
    const randomX = random();
    const randomY = random();
    noBtn.style.setProperty('position', 'absolute');
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%,-${randomY}%)`);
});

function random () {
    return parseInt(Math.random()*100);
};
