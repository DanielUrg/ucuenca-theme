wp.blocks.registerBlockType("blocktheme/banner-facultad", {
  title: "UC Banner Facultad",
  edit: function () {
    return wp.element.createElement("h2", null, "BANNER FACULTAD");
  },
  save: function () {
    return null;
  },
});
