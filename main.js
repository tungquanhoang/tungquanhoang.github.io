const image = document.querySelector('#profile-picture');
const main = document.querySelector('main');

const originalPosition = image.getBoundingClientRect();

image.addEventListener('mouseenter', () => {
    const mainRect = main.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();
    const maxX = mainRect.width - imageRect.width;
    const maxY = mainRect.height - imageRect.height;
    let randomX = Math.floor(Math.random() * 2 * maxX - maxX);
    let randomY = Math.floor(Math.random() * 2 * maxY - maxY);
  
    image.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

image.addEventListener('click', () => {
    const currentPosition = image.getBoundingClientRect();
    const xMove = originalPosition.width - currentPosition.width;
    const yMove = originalPosition.height - currentPosition.height;

    image.style.transform = `translate(${xMove}px, ${yMove}px)`;
})