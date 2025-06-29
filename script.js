// Typing animation
const typeText = "Cybersecurity student. Systems & backend developer. Linux enjoyer.";
let index = 0;
function typeWriter() {
  if (index < typeText.length) {
    document.getElementById("typewriter-text").textContent += typeText.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;

// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
