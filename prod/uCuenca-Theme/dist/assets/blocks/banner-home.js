wp.blocks.registerBlockType("blocktheme/banner-home", {
  title: "UC BANNER HOME",
  edit: function () {
    return wp.element.createElement("h2", null, "BANNER HOME");
  },
  save: function () {
    return null;
  },
});
