// Animation on button click
document.getElementById("animateBtn").addEventListener("click", function() {
  const box = document.getElementById("box");
  box.classList.add("animate");

  setTimeout(() => {
    box.classList.remove("animate"); // reset
