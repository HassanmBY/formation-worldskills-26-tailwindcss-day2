import './style.css'


const toggleMode = document.querySelector('#toggle-mode');
const htmlElement = document.querySelector('html');

toggleMode.addEventListener('click', e =>{
    e.preventDefault();

    htmlElement.classList.toggle("dark")
})