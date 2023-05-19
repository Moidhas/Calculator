function sub(a, b) {
    return (+a) - (+b);
}

function add(a, b) {
    return (+a) + (+b);
}

function prod(a, b) {
    return (+a) * (+b); 
}

function divide(a, b) {
    return (+a) / (+b);
}

function operate(a, operator, b) {
    if (operator === "+") {
       return add(a, b); 
    } else if (operator === "-") {
        return sub(a, b);
    } else if (operator === "*") {
        return prod(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

function clearing() {
    display.textContent = "0"
    for(let key in expression) {
        delete expression[key];
    }
}

function displayNum(num, insert) {
    if (display.textContent === "0" || insert) {
        display.textContent = num; 
    }  else {
        display.textContent += num;  
    }
    expression.clicked = false;
}


let expression = {clicked: false};
const display = document.querySelector('.display');
const interface = document.querySelector('.interface');

const clear = document.createElement('button');
clear.textContent = "CLEAR";
clear.addEventListener("click", () => clearing());
interface.appendChild(clear);

// number buttons creation
for(let i = 0; i < 10; i++) {
    const btn = document.createElement('button');
    btn.textContent = i; 
    btn.addEventListener('click', () => displayNum(+btn.textContent, expression.clicked));
    interface.appendChild(btn);
}

// operator buttons creation besides = sign
names = ["+", "-", "*", "/"];
for (let i = 0; i < 4; i++) {
    const btn = document.createElement('button');
    btn.textContent = names[i];
    btn.addEventListener('click', () => {
        expression.clicked = true; 
        if (!("a" in expression)) {
            expression.a = display.textContent; 
        } else {
            expression.b = display.textContent; 
            const num = operate(expression.a, expression.operator, expression.b);
            display.textContent = num;
            delete expression.a; 
            delete expression.b; 
        }
        expression.operator = btn.textContent; 
    });
    interface.appendChild(btn); 
}

const equal = document.createElement('button');
equal.textContent = "=";
equal.addEventListener('click', () => {
    expression.clicked = true; 
    if (("a" in expression) && ("b" in expression)) {
        const num = operate(expression.a, expression.operator, expression.b);
        display.textContent = num;
        delete expression.a; 
        delete expression.b; 
        delete expression.operator; 
    }
})
interface.appendChild(equal);




