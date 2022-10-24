wp.blocks.registerBlockType("blocktheme/banner-facultad", {
  title: "UC BANNER Facultad",
  edit: function () {
    return wp.element.createElement("h2", null, "BANNER FAACULTAD");
  },
  save: function () {
    return null;
  },
});
