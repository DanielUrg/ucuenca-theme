wp.blocks.registerBlockType("blocktheme/footer", {
  title: "Footer Ucuenca",
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "Footer Estático"
    );
  },
  save: function () {
    return null;
  },
});
