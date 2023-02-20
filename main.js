let rate = document.querySelectorAll(".rate li"),
  btn = document.querySelector("button"),
  rateDom = document.querySelector(".rateDom"),
  mainContainer = document.querySelector(".container"),
  thankContainer = document.querySelector(".thank-you-state"),
  count;

const handleRate = (e) => {
  // Remove Active Class
  rate.forEach((li) => {
    li.classList.remove("active");
  });
  // Add Active Class
  e.target.classList.add("active");
  // Update Count Rate
  count = e.target.dataset.num;
  // Update Rate DOM
  rateDom.innerHTML = count;
};
rate.forEach((li) => {
  li.addEventListener("click", handleRate);
});

const handleSubmit = () => {
  if (count === undefined) {
    alert("Please choose an rate..!");
    return;
  } else {
    mainContainer.remove();
    thankContainer.classList.add("open");
  }
};
btn.addEventListener("click", handleSubmit);
