import Isotope from "isotope-layout";
import $ from "jquery";

class ContentFacultad {
  constructor() {
    this.primaryButtons = $(".primari-nav__item");
    this.secondButtons = $(".second-nav__item");
    this.events();
  }
  // 2. Eventos
  events() {
    var iso = new Isotope(".grid", {
      filter: ".facultad",
      itemSelector: ".section",
      layoutMode: "vertical",
    });

    this.primaryButtons.on("click", function () {
      var filterValue = $(this).attr("data-filter");
      console.log(filterValue);
      iso.arrange({ filter: filterValue });
    });
    this.secondButtons.on("click", function () {
      var filterValue = $(this).attr("data-filter");
      console.log(filterValue);
      iso.arrange({ filter: filterValue });
    });
  }
  // 3. Métodos
  filter() {}
}
export default ContentFacultad;
