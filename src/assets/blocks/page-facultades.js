wp.blocks.registerBlockType("blocktheme/page-facultad", {
  title: "UC Contenido Facultad",
  edit: function () {
    return wp.element.createElement("h2", null, "CONTENIDO DE FACULTAD");
  },
  save: function () {
    return null;
  },
});
