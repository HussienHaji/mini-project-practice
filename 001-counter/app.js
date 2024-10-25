const counter = document.querySelector(".counter");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

increment.addEventListener("click", changeCounter.bind(this, "increment"));
decrement.addEventListener("click", changeCounter.bind(this, "decrement"));
reset.addEventListener("click", changeCounter.bind(this, "reset"));

function changeCounter(event) {
  let count = Number(counter.textContent);

  switch (event) {
    case "increment":
      count++;
      break;
    case "decrement":
      count--;
      break;
    case "reset":
      count = 0;
      break;
  }

  counter.textContent = count;
}
