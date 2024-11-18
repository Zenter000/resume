
const textElement = document.getElementById('randomBox');

setInterval(() => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
    textElement.style.color = randomColor;
}, 1000);
