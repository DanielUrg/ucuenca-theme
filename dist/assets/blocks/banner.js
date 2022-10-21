import { registerBlockType } from "@wordpress/blocks";

registerBlockType("blocktheme/banner", {
  title: "Banner",
  supports: {
    align: ["full"],
  },
  attributes: {},
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {}

function SaveComponent() {}
