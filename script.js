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

function display(btn, zeroValue) {
    if (zeroValue) {
        screen.textContent = btn.textContent;
    } else {
        screen.textContent += btn.textContent;
    }
}



// might not need id's
const ops = [ {op: "+", id: "add"}, {op: "-", id: "sub"}, {op: "*", id: "prod"}, 
                {op: "/", id: "divide"}, {op: "=", id: "equal"}];

const screen = document.querySelector('.display');
const interface = document.querySelector('.interface');

const clear = document.createElement('button');
clear.textContent = "CLEAR";
clear.addEventListener("click", () => console.log("yo"));
interface.appendChild(clear);

for (let i = 0; i < 15; i++) {
    const btn = document.createElement('button');
    if (i < 10) {
        btn.textContent = i;
        btn.setAttribute("id", `n${i}`);
        btn.addEventListener("click", () => {
            if (screen.textContent === "0") {
                display(btn, true);
            } else {
                display(btn, false);
            }
        });
        
    } else {
        btn.textContent = ops[i - 10].op;
        btn.setAttribute("id", `${ops[i - 10].id}`);
        btn.addEventListener("click", () => console.log("yo"));
    }
    
    interface.appendChild(btn);
}


