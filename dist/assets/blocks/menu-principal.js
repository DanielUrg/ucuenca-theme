wp.blocks.registerBlockType("blocktheme/menu-principal", {
  title: "UC MENÚ LATERAL",
  edit: function () {
    return wp.element.createElement("h2", null, "MENÚ LATERAL");
  },
  save: function () {
    return null;
  },
});
