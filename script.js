const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2")
const result = document.getElementById("result")


/**Calculations */
/**Addition */
document.getElementById("add").addEventListener("click", () => {
    let a = Number(num1.value)
    let b = Number(num2.value)

    let sum = a+b;

    result.textContent = sum;
    result.style.color = "red";
})

/**Subtraction */
document.getElementById("subtract").addEventListener("click", () => {

    let a = Number(num1.value);
    let b = Number(num2.value);

    let difference = a - b;
    result.textContent = difference;
    result.style.color = "blue";
})


/**Multiply */
document.getElementById("multiply").addEventListener("click", () => {

    let a = Number(num1.value);
    let b = Number(num2.value);

    let multiply = a * b;

    result.textContent = multiply;
    result.style.color = "yellow";
})



/**Division */
document.getElementById("divide").addEventListener("click", () => {

    let a = Number(num1.value);
    let b = Number(num2.value);
 
    let division = a / b;   
    result.textContent = division
    result.style.color = "orange";
});