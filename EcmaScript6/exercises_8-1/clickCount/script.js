const clickCount = document.querySelector('#add');
const show = document.querySelector('#show');
let num = 0;
clickCount.addEventListener('click', () => {
        num++
        show.innerHTML = num;
});