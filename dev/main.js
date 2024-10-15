const textoSlidebar = document.querySelector('.slidebar')

textoSlidebar.addEventListener('mouseover', () => {
    textoSlidebar.textContent = 'Slidebar'
});

textoSlidebar.addEventListener('mouseout', () => {
    textoSlidebar.textContent = '✎'
});