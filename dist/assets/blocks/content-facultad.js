wp.blocks.registerBlockType("blocktheme/content-facultad", {
  title: "UC Contenido Facultad",
  edit: function () {
    return wp.element.createElement("h2", null, "CONTENIDO DE FACULTAD");
  },
  save: function () {
    return null;
  },
});
