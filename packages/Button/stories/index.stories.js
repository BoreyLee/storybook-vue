import LbrButton from "../index.js";

export default {
  title: "Example/LbrButton",
  component: LbrButton,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LbrButton },
  template: '<lbr-button @click="onClick" v-bind="$props">button</lbr-button>',
});

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};
