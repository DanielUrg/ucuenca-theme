wp.blocks.registerBlockType("blocktheme/header", {
  title: "Header Ucuenca",
  edit: function () {
    return wp.element.createElement(
      "div",
      { className: "our-placeholder-block" },
      "Header estático"
    );
  },
  save: function () {
    return null;
  },
});
