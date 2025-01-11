import './style.css'
import { rollingWordsAnimation } from './sections/animations/rollingProjectsAnimation.js';


const appWindow = document.getElementById('app');


appWindow.addEventListener('scroll', () => {
/*     console.log('scrolling')
 */})

document.addEventListener('DOMContentLoaded', () => {
    const rollingWordsElement = document.querySelector('.rolling-words-container')
    appWindow.addEventListener('scroll', () => {
        let topValue = rollingWordsElement.getBoundingClientRect().top;
        if (rollingWordsElement && topValue < 750) {
            rollingWordsAnimation(rollingWordsElement);
        }
    })
})

