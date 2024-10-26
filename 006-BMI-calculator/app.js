const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const weight = document.querySelector(".weight");
const hight = document.querySelector(".hight");

btn.addEventListener("click", () => {
  const heightInMeters = hight.value / 100;
  const bmi = weight.value / (heightInMeters * heightInMeters);
  result.textContent = bmi.toFixed(2);
});
