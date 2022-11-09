class MenuPrincipal {
  // 1. Instancia del objeto
  constructor() {
    this.accordions = document.getElementsByClassName("accordion-secundario");
    this.init();
    this.events();
  }
  // 2. Eventos
  events() {}
  // 3. Métodos
  init() {
    for (let accordion of this.accordions) {
      let plus = accordion.querySelector(".accordion__plus");
      plus.addEventListener("click", function () {
        this.accordions = document.getElementsByClassName(
          "accordion-secundario"
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
}

export default MenuPrincipal;
