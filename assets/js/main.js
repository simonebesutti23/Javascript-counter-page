/*File js counter page with DOM manipulation*/
/*Create the elements of the page only with dom manipulation*/
// Function to create elements with optional text, classes, and styles
function createElement(type, textContent = '', styles = {}){
    const element = document.createElement(type);
    element.textContent = textContent;
    Object.assign(element.style, styles);
    return element;
}

//function to handle button clicks
function handleButtonClick(event, counter) {
    const button = event.target;
    if (button.tagName !== 'BUTTON') return;


    switch (button.textContent) {
        case '+':
            counter.textContent = parseInt(counter.textContent) + 1;
            break;
        case '-':
            counter.textContent = parseInt(counter.textContent) - 1;
            break;
        case 'Reset':
            counter.textContent = '0';
            break;
    }
}


//Media queries with matchMedia method
function applyResponsiveStyles(title){
    if(window.matchMedia('(max-width: 400px)').matches){
        Object.assign(title.style, {
            fontSize: '30px'
        });
    }else {
        Object.assign(title.style, {
            fontSize: '2em',
            fontWeight: 'bold'
        })
    }
}

//Main function to build counter app 
function buildCounterApp(){
    const container = createElement('div' , '', {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        height: '100vh',
        gap: '10px',
        margin: '0',
        padding: '0'
    })


    //Create the title
    const title = createElement('h1', 'JAVASCRIPT COUNTER', {marginBottom: '20vh', marginTop:'10vh', fontSize: '2em', color:'#333', fontWeight:'bold'});
    //Create the counter
    const counter = createElement('span', '0', {fontSize: '5em', marginBottom: '20vh'});
    //Button container
    const buttonContainer = createElement('div', '', {display: 'flex', gap:'10px'});

    //create buttons
    const buttonStyle = {fontSize: '2em', width:'70px', height:'50px', cursor:'pointer', borderRadius:'5px', border:'none', backgroundColor: '#4CAF50', color:'white'};
    const incrementButton = createElement('button', '+', buttonStyle);
    const decrementButton = createElement('button', '-', buttonStyle);
    const resetButton = createElement('button', 'Reset', {...buttonStyle, width:'100px', fontSize:'18px'});

    //Add the buttons to the button container
    buttonContainer.appendChild(incrementButton);
    buttonContainer.appendChild(decrementButton);
    buttonContainer.appendChild(resetButton);

    //Add the title, counter, and button container to the main container 
    container.appendChild(title);
    container.appendChild(counter);
    container.appendChild(buttonContainer);

    //Add the container to the body page
    document.body.appendChild(container);

    //add event listener to the button container
    buttonContainer.addEventListener('click', (event) => handleButtonClick(event, counter));
    
    //responsive 
    applyResponsiveStyles(title);
    window.addEventListener('resize', applyResponsiveStyles(title));
}

buildCounterApp();