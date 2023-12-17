const counterValue = document.querySelector('#value');
let value = 0;
const btn = document.querySelectorAll('button');
btn.forEach(element => element.addEventListener("click", () =>{
    if (element.hasAttribute('decrement')){
        value -= 1;
    } else {
         value += 1;
    }

    counterValue.innerHTML = value;
}))



