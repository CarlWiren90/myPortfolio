
let startFade = 0;
let endFade = 800;

export const fadingHeroAnimation = (element, value) => {
    let scrollValue = value;
    let opacity = 1 - (scrollValue - startFade) / (endFade - startFade);
    opacity = Math.max(0, Math.min(1, opacity));
    element.style.opacity = opacity;
}