document.querySelectorAll(".divBtn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const section = e.currentTarget.closest(".section");
    section.classList.toggle("active");
  });
});
