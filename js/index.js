function counter(id, start, end, duration) {
  const obj = document.getElementById(id);
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const step = Math.abs(Math.floor(duration / range));

  let current = start;
  const timer = setInterval(() => {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, step);
}

const btn = document.querySelector("#chooseNumber");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * 10) + 1;
  console.log(random);
  counter("counter", 0, random, 400);
});
