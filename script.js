function showRegister() {
  document.getElementById("registerForm").classList.remove("hidden");

  // Auto-fill selected area + search value in form
  let area = document.getElementById("area").value;
  let workType = document.getElementById("search").value;

  let inputs = document.querySelectorAll("#registerForm form input");
  inputs[2].value = workType;
  inputs[3].value = area;
}
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("show");
}
function signin(){
  location.href = "try.html";

}
let slides = document.querySelectorAll(".container .slide");
let index = 0;

function showSlides() {
  slides.forEach((slide, i) => {
    slide.style.opacity = (i === index) ? "1" : "0";
  });
  index = (index + 1) % slides.length; // Loop back to first
}

setInterval(showSlides, 3000); // Change every 3 sec

function openMap(area) {
  if(area) {
    window.location.href = `map.html?area=${area}`;
  }
}




