class MenuPrincipal {
  // 1. Instancia del objeto
  constructor() {
    this.mainMenuModal = document.getElementById("main-nav-bar");
    this.modal = document.getElementById("modal-bg");
    this.openMainNabBtn = document.getElementById("open-main-nav-bar");
    this.closeMainNabBtn = document.getElementById("close-main-nav-bar");
    this.accordions = document.getElementsByClassName("accordion-principal");

    this.init();
    this.events();
  }
  // 2. Eventos
  events() {
    this.openMainNabBtn.addEventListener("click", () => this.addMainActive());
    this.closeMainNabBtn.addEventListener("click", () =>
      this.removeMainActive()
    );
    this.modal.addEventListener("click", () => this.removeMainActive());
  }
  // 3. Métodos
  init() {
    for (let accordion of this.accordions) {
      let plus = accordion.querySelector(".accordion__plus");
      plus.addEventListener("click", function () {
        this.accordions = document.getElementsByClassName(
          "accordion-principal"
        ); // revisar
        this.classList.toggle("plus-active");
        for (let accordion of this.accordions) {
          if (accordion != this.parentNode) {
            accordion
              .querySelector(".accordion__plus")
              .classList.remove("plus-active");
            let nextElement = accordion.nextElementSibling;
            if (nextElement.classList.contains("primari-nav__submenu")) {
              nextElement.style.maxHeight = null;
            }
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

export default MenuPrincipal;
