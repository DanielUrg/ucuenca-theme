wp.blocks.registerBlockType("blocktheme/page-facultades", {
  title: "UC Página facultades",
  edit: function () {
    return wp.element.createElement("h2", null, "CONTENIDO FACULTADES");
  },
  save: function () {
    return null;
  },
});
