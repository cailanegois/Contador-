const BTN_DECREMENT = document.getElementById("buttonDecrement");
const BTN_INCREMENT = document.getElementById("buttonIncrement");
const NUMBER = document.getElementById("paragraph-number");


function incremente() {
    NUMBER.innerHTML = parseInt(NUMBER.innerHTML) +1
}

function decremente() {
    NUMBER.innerHTML = parseInt(NUMBER.innerHTML) -1;
}

BTN_DECREMENT.addEventListener("click", decremente)
BTN_INCREMENT.addEventListener("click", incremente)