document.addEventListener("DOMContentLoaded", () => {
  const listbox = document.getElementById("carList");
  const options = listbox.querySelectorAll('[role="option"]');
  const parent = document.getElementById("galleryParent");

  let currentIndex = 0;

  // Initial focus
  options[currentIndex].tabIndex = 0;
  options[currentIndex].classList.add("ring-2", "ring-red-500"); // 🔴 highlight
  options[currentIndex].focus();

  listbox.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "ArrowDown" || key === "ArrowRight") {
      event.preventDefault();
      if (currentIndex < options.length - 1) {
        options[currentIndex].tabIndex = -1;
        options[currentIndex].classList.remove("ring-2", "ring-red-500"); // remove highlight

        currentIndex++;
        options[currentIndex].tabIndex = 0;
        options[currentIndex].classList.add("ring-2", "ring-red-500"); // add highlight
        options[currentIndex].focus();
      }
    } else if (key === "ArrowUp" || key === "ArrowLeft")  {
      event.preventDefault();
      if (currentIndex > 0) {
        options[currentIndex].tabIndex = -1;
        options[currentIndex].classList.remove("ring-2", "ring-red-500");

        currentIndex--;
        options[currentIndex].tabIndex = 0;
        options[currentIndex].classList.add("ring-2", "ring-red-500");
        options[currentIndex].focus();
      }
    } else if (key === "Escape") {
      event.preventDefault();
      options[currentIndex].tabIndex = -1;
      options[currentIndex].classList.remove("ring-2", "ring-red-500");
      parent.focus();
    }
  });
});
