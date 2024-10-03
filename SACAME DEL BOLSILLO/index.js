const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('La 3era es la vencida AJSDKAJSKDA');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const windowWidth = window.innerWidth - noBtn.offsetWidth;
    const windowHeight = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * windowWidth;
    const randomY = Math.random() * windowHeight;

    noBtn.style.setProperty('top', randomY + 'px');
    noBtn.style.setProperty('left', randomX + 'px');
});
