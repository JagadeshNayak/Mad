const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    alert('Sorry to hear that!');
});

noButton.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * 100);
    const randomY = Math.floor(Math.random() * 500); 

    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
//#codewithJagguNayak
