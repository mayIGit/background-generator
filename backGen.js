// Developed as a learning project by Meghana Rawate.

//declaring variables and creating DOM handles to HTML elements
const cssDisp = document.getElementById('cssDisp');
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const gradeBody = document.getElementById('gradeBody');

gradeBody.style.background = 
    `Linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssDisp.textContent = `${gradeBody.style.background};`

function setGradient(){
    gradeBody.style.background = 
    `Linear-gradient(to right, ${color1.value}, ${color2.value})`;
    cssDisp.textContent = `${gradeBody.style.background};`
}

//Create a listener for an input from the user

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);