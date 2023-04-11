import { Meta, StoryObj } from "@storybook/react";

import Image from ".";

const meta: Meta<typeof Image> = {
  component: Image,
  argTypes: {
    image: {
      type: {
        name: "other",
        value: "Image",
        required: true,
      },
      description:
        "Image to be displayed in the figure inside the content block.",
      control: "object",
      table: { type: { summary: "Image" } },
    },
    caption: {
      control: "text",
      description:
        "Caption to be displayed in the figure inside the content block.",
      table: { type: { summary: "string" } },
    },
    title: {
      control: "text",
      description:
        "Optional title for the content block, will be displayed inside of the modal if set.",
      table: { type: { summary: "string" } },
    },
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Vertical or horizontal image layout",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
    },
  },
};
export default meta;

const baseArgs = {
  image: {
    altText:
      "Wide view of Rubin Observatory with the telescope mount visible through the open dome",
    url: "https://rubin.canto.com/direct/image/o7j607sgdt6690c5rpken97r6n/NAvYOhoG30hYEfRUDUJYPKcz2q8/original?content-type=image%2Fjpeg&name=Rubin+December+2022.jpg",
  },
  caption:
    "A view of Rubin Observatory in December 2022. A view of Rubin Observatory at twilight with the telescope mount visible through the open dome",
};

export const Primary: StoryObj<typeof Image> = {
  args: {
    ...baseArgs,
  },
};
export const Horizontal: StoryObj<typeof Image> = {
  args: {
    ...baseArgs,
    layout: "horizontal",
  },
};
