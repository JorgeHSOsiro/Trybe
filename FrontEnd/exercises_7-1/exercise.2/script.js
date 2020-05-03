let chapters = document.querySelector('#chapters');
let liChapters = document.querySelector('#li-chapters') 
let infos = document.querySelector('#info');
let liInfos = document.querySelector('#li-info'); 

chapters.addEventListener('click', () => liChapters.classList.toggle('show'));

infos.addEventListener('click', () => liInfos.classList.toggle('show'));
