import './style.css'
import { rollingWordsAnimation } from './sections/animations/rollingProjectsAnimation.js';
import { fadingHeroAnimation } from './sections/animations/fadingHeroAnimation.js';
import { renderProjects } from './sections/projects.js';
import { projectsList } from './sections/projectsCollection.js';



const appWindow = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
    const rollingWordsElement = document.querySelector('.rolling-words-container')
    const heroElement = document.querySelector('.heading__container--hero')
    const projectsContainer = document.querySelector('.projects__list')

    if (projectsContainer) {
        renderProjects(projectsContainer, projectsList);
    }
    
    appWindow.addEventListener('scroll', () => {
        let topValue = rollingWordsElement.getBoundingClientRect().top;
        if (rollingWordsElement && topValue < 850) {
            rollingWordsAnimation(rollingWordsElement, topValue);
        }
    })

    appWindow.addEventListener('scroll', () => {
        let scrollValue = appWindow.scrollTop;
    
        if (heroElement) {
            fadingHeroAnimation(heroElement, scrollValue);
        }
    });
})
