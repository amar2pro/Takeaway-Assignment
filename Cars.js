document.addEventListener("DOMContentLoaded", () => {
  const listbox = document.getElementById("carList"); //this is the entire list of cars
  const options = listbox.querySelectorAll('[role="option"]');// the elements within the listbox
  const parent = document.getElementById("galleryParent");
  //this is the position of the currently focused car
  let currentIndex = 0;

  // Initial focus on the first element in the list
  options[currentIndex].tabIndex = 0;
  options[currentIndex].classList.add("ring-2", "ring-red-500"); //the ring is used to add focus since the default focus disappears in a split second
  options[currentIndex].focus();
  //
  listbox.addEventListener("keydown", (event) => {
    const key = event.key;//this listens to any key press inside the listbox
      //the condition states that either can work the same way hence the logical OR.
      //this first if is used to move focus to the next car
    if (key === "ArrowDown" || key === "ArrowRight") {
      event.preventDefault();
      if (currentIndex < options.length - 1) {
        options[currentIndex].tabIndex = -1;
        options[currentIndex].classList.remove("ring-2", "ring-red-500"); // to control the split-second default focus, I made it easy to just add and remove the focus using the ring

        currentIndex++;// this increases the index
        options[currentIndex].tabIndex = 0;
        options[currentIndex].classList.add("ring-2", "ring-red-500");
        options[currentIndex].focus();// moves focus to the next car
      }
    } else if (key === "ArrowUp" || key === "ArrowLeft") //this second if moves focus to the previous car
       {
      event.preventDefault();
      if (currentIndex > 0) {
        options[currentIndex].tabIndex = -1;
        options[currentIndex].classList.remove("ring-2", "ring-red-500");

        currentIndex--;
        options[currentIndex].tabIndex = 0;
        options[currentIndex].classList.add("ring-2", "ring-red-500");
        options[currentIndex].focus();//moves focus to the previous car
      }
    } else if (key === "Escape") //moves focus to the parent element
      {
      event.preventDefault();
      options[currentIndex].tabIndex = -1;
      options[currentIndex].classList.remove("ring-2", "ring-red-500");
      parent.focus();
    }
  });
});
