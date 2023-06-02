

/*let one = document.getElementsById("submit");
const itemOne = () => {
    one.style.width = "100px";
    one.style.color = "orangered";
};
one.addEventListener("onmouseover", itemOne());

const itemTwo = () => {
    one.style.color = 'red';
    one.innerHTML = 'Sent!';
}

one.addEventListener("onclick", itemTwo());

let stepOne = document.getElementById("hello");

const stepBright = ()=>{
    stepOne.style.width = "100px";
    stepOne.style.color = 'orangered';
}

stepOne.addEventListener("onmouse")*/
let one = document.querySelector('button');

function moveOne() {
    one.style.width = "100px";
    one.style.backgroundColor = 'orangered';
}

one.onclick = moveOne;