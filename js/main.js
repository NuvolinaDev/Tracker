let activeSection = null;
window.activeSection = activeSection;

document.querySelectorAll(".divBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.closest(".section");

    // If clicking the currently active section → close it
    if (activeSection === section) {
      section.classList.remove("active");
      activeSection = null;
      window.activeSection = null;
      console.log("Active section cleared");
      return;
    }

    // Otherwise, switch active section
    document.querySelectorAll(".section").forEach((s) => {
      s.classList.remove("active");
    });

    section.classList.add("active");
    activeSection = section;
    window.activeSection = activeSection;

    console.log("Active section set:", section.dataset.key);
  });
});
