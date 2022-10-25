let mainMenuModal = document.getElementById("main-nav-bar");
let modal = document.getElementById("modal-bg");
let openMainNabBtn = document.getElementById("open-main-nav-bar");
let closeMainNabBtn = document.getElementById("close-main-nav-bar");

openMainNabBtn.addEventListener("click", () => addMainActive());
closeMainNabBtn.addEventListener("click", () => removeMainActive());
modal.addEventListener("click", () => removeMainActive());

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth",
});

let accordions = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < accordions.length; i++) {
  let plus = accordions[i].querySelector(".accordion__plus");
  plus.addEventListener("click", function () {
    this.classList.toggle("plus-active");
    for (j = 0; j < accordions.length; j++) {
      if (accordions[j] != this.parentNode) {
        accordions[j]
          .querySelector(".accordion__plus")
          .classList.remove("plus-active");
        accordions[j].nextElementSibling.style.maxHeight = null;
      }
    }

    let panel = this.parentNode.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function addMainActive() {
  mainMenuModal.classList.add("main-nav-bar--active");
  modal.classList.add("modal-bg--active");
}
function removeMainActive() {
  mainMenuModal.classList.remove("main-nav-bar--active");
  modal.classList.remove("modal-bg--active");
}
