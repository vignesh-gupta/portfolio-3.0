import { WrenchIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skills",
  type: "document",
  icon: WrenchIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
  ],
});
