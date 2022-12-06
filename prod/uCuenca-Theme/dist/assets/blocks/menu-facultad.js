wp.blocks.registerBlockType("blocktheme/menu-facultad", {
  title: "UC MENÚ LATERAL",
  edit: function () {
    return wp.element.createElement("h2", null, "MENÚ LATERAL FACULTAD");
  },
  save: function () {
    return null;
  },
});
