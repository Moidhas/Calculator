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

console.log(operate("1", "/", "2"));
const names = ["+", "-", "*", "/", "="];
const interface = document.querySelector('.interface');
const clear = document.createElement('button');
clear.textContent = "CLEAR"
interface.appendChild(clear);
for (let i = 0; i < 15; i++) {
    const btn = document.createElement('button');
    if (i < 10) {
        btn.textContent = i; 
    } else {
        btn.textContent = names[i - 10];
    }
    interface.appendChild(btn);
}



const buttons = document.querySelectorAll('button');
