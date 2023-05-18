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
const interface = document.querySelector('.interface');
for (let i = 0; i < 10; i++) {
    const btn = document.createElement('button');
    btn.textContent = i; 
    interface.appendChild(btn);
}
const buttons = document.querySelectorAll('button');
