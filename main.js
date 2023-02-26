const image = document.querySelector('#profile-picture');

// Show an image prompting the viewer to try and play with the profile picture when hovered
const hoverMessage = document.createElement('div');
hoverMessage.classList.add('hover-message');
hoverMessage.textContent = 'This is a message!';

image.appendChild(hoverMessage);

image.addEventListener('mouseover', () => {
  hoverMessage.style.display = 'block';
});

image.addEventListener('mouseout', () => {
  hoverMessage.style.display = 'none';
});

// Move the profile picture randomly after being clicked and hovered
// Move the picture back to original position when clicked
const main = document.querySelector('#profile');

const originalPosition = image.getBoundingClientRect();

image.addEventListener('click', () => {
    changePicturePosition();
    image.addEventListener('mouseenter', () => {
        changePicturePosition();
    });
})

image.addEventListener('click', () => {
    const currentPosition = image.getBoundingClientRect();
    const xMove = originalPosition.width - currentPosition.width;
    const yMove = originalPosition.height - currentPosition.height;

    image.style.transform = `translate(${xMove}px, ${yMove}px)`;
})

function changePicturePosition() {
    const mainRect = main.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();
    const maxX = mainRect.width - imageRect.width;
    const maxY = mainRect.height - imageRect.height;
    let randomX = Math.floor(Math.random() * 2 * maxX - maxX);
    let randomY = Math.floor(Math.random() * 2 * maxY - maxY);
  
    image.style.transform = `translate(${randomX}px, ${randomY}px)`;
}