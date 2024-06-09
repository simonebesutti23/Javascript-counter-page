/*File js counter page with DOM manipulation*/
/*Create the elements of the page only with dom manipulation*/
/*structure of the page*/
const container = document.createElement('div');
/*Title creation*/
const title = document.createElement('h1');
const textNode = document.createTextNode("JAVASCRIPT COUNTER");
title.appendChild(textNode);

container.appendChild(title);

document.body.appendChild(container);