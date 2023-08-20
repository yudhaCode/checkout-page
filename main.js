const chevronIcon = document.querySelector(".form__input.form__input--select");
const selectIcon = document.querySelector(".select-icon");

let rotated = false;

chevronIcon.addEventListener("click", () => {
  if (!rotated) {
    selectIcon.style.transform = "rotate(180deg)";
  } else {
    selectIcon.style.transform = "rotate(0deg)";
  }

  rotated = !rotated;
});
