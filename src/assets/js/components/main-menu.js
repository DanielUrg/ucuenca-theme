class MenuLateral {
  constructor() {
    this.mainMenuModal = document.getElementById("main-nav-bar");
    this.modal = document.getElementById("modal-bg");
    this.openMainNabBtn = document.getElementById("open-main-nav-bar");
    this.closeMainNabBtn = document.getElementById("close-main-nav-bar");

    this.openMainNabBtn.addEventListener("click", () => this.addMainActive());
    this.closeMainNabBtn.addEventListener("click", () =>
      this.removeMainActive()
    );
    this.modal.addEventListener("click", () => this.removeMainActive());

    // Scroll to specific values
    // scrollTo is the same
    window.scroll({
      top: 2500,
      left: 0,
      behavior: "smooth",
    });

    this.accordions = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < this.accordions.length; i++) {
      let plus = this.accordions[i].querySelector(".accordion__plus");
      plus.addEventListener("click", function () {
        this.classList.toggle("plus-active");
        for (j = 0; j < this.accordions.length; j++) {
          if (this.accordions[j] != this.parentNode) {
            this.accordions[j]
              .querySelector(".accordion__plus")
              .classList.remove("plus-active");
            this.accordions[j].nextElementSibling.style.maxHeight = null;
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
  }
  addMainActive() {
    this.mainMenuModal.classList.add("main-nav-bar--active");
    this.modal.classList.add("modal-bg--active");
  }
  removeMainActive() {
    this.mainMenuModal.classList.remove("main-nav-bar--active");
    this.modal.classList.remove("modal-bg--active");
  }
}

export default MenuLateral;
