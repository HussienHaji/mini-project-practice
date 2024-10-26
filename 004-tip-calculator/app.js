const billInput = document.querySelector(".bill");
const percentageInput = document.querySelector(".percentage");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  const tipAmount = billInput.value * (percentageInput.value / 100);

  result.textContent = tipAmount;
});
