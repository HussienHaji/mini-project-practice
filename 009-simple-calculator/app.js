const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const operator = document.querySelector(".operator");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  let r = 0;

  if (firstNumber.value === "" || secondNumber.value === "") return;

  switch (operator.value) {
    case "+":
      r = +firstNumber.value + +secondNumber.value;
      break;
    case "-":
      r = +firstNumber.value - +secondNumber.value;
      break;
    case "*":
      r = +firstNumber.value * +secondNumber.value;
      break;
    case "/":
      r = +firstNumber.value / +secondNumber.value;
      break;
  }

  result.textContent = r;
});
