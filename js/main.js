/*File js counter page with DOM manipulation*/
/*Create the elements of the page only with dom manipulation*/


/*structure of the page*/
const container = document.createElement('div');
/*Title creation*/
const title = document.createElement('h1');
const textNode = document.createTextNode("JAVASCRIPT COUNTER");
title.appendChild(textNode);

const counter = document.createElement('span');
const buttonContainer = document.createElement('div')
const incrementButton = document.createElement('button');
const decrementButton = document.createElement('button');
const resetButton = document.createElement('button');

//Set the initial content of the elements
counter.textContent = '0';
incrementButton.textContent = '+';
decrementButton.textContent = '-';
resetButton.textContent = 'Reset';

//Add all the elements to the container
container.appendChild(title);
container.appendChild(counter);
buttonContainer.appendChild(incrementButton);
buttonContainer.appendChild(decrementButton);
buttonContainer.appendChild(resetButton);
container.appendChild(buttonContainer);

document.body.appendChild(container);

//Add the style
//Container style
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.height = '100vh';
container.style.gap = '10px';


//Title style
title.style.paddingBottom = '10vh';


//counter style
counter.style.fontSize = '2em';
counter.style.margin = '10vh 20px';

//button container style
buttonContainer.style.display = 'flex';
buttonContainer.style.gap = '10px';

//increment button style
incrementButton.style.fontSize = '2em';
incrementButton.style.width = '70px';
incrementButton.style.height = '50px';

