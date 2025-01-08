import './style.css'
/* import { movingWords } from './sections/projects'
 */

/* document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        console.log('Scroll event detected!');
        movingWords()
    })
}) */

const appWindow = document.getElementById('app');
appWindow.addEventListener('scroll', () => {
    console.log('scrolling')
})
