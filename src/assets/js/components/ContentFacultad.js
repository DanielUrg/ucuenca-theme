import Isotope from "isotope-layout";
import $ from "jquery";

class ContentFacultad {
  constructor() {
    this.button = $(".primari-nav__item");
    this.events();
  }
  // 2. Eventos
  events() {
    var iso = new Isotope(".grid", {
      filter: "*",
    });

    this.button.on("click", function () {
      var name = "." + $(this).text();
      iso.arrange({ filter: name });
    });
  }
  // 3. Métodos
  filter() {}
}
export default ContentFacultad;
