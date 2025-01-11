
let opacityValue = 0;

export const rollingWordsAnimation = (element) => {
    element.style.opacity = `${opacityValue.toString()}`
    if (opacityValue < 1) {
        opacityValue += 0.1;
    }
}