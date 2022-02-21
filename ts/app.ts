export {};
const search = document.querySelector('.search') as HTMLInputElement;
const btn = document.querySelector('.btn') as HTMLInputElement;
const input = document.querySelector('.input') as HTMLInputElement;


btn.addEventListener('click', () : void => {
    search.classList.toggle('active');
    input.focus();
});