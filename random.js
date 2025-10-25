// Show Register Form
function showRegister() {
  document.getElementById("registerForm").classList.toggle("hidden");
}

// Counter Animation
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
