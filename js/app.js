const num = document.querySelector(".num");
const logical1 = + prompt("Birinchi sonni kiriting");
const operator =  prompt("Operatorlarni kiriting /, -, +, *")
const logical2 = + prompt("Ikkinchi sonni kiriting");

if (operator == "+"){
    num.innerHTML=("Natija: " + (logical1 + logical2));
}else if (operator === "-"){
    num.innerHTML=("Natija: " + (logical1 - logical2));
}else if (operator === "/"){
    num.innerHTML=("Natija: " + (logical1 / logical2));
}else if (operator === "*"){
    num.innerHTML=("Natija: " + (logical1 * logical2));
}

