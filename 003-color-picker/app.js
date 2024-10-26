const colorPicker = document.querySelector("input");
const container = document.querySelector(".container");

colorPicker.addEventListener("change", () => {
  container.style.backgroundColor = colorPicker.value;
  console.log(colorPicker.value);
});
