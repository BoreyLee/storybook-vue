import LbrInput from "../index.js";

export default {
  title: "Example/LbrInput",
  component: LbrInput,
  argTypes: {
    type: {
      control: { type: "select", options: ["text", "password"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LbrInput },
  template: '<lbr-input v-bind="$props"></lbr-input>',
});

export const Text = Template.bind({});
Text.args = {
  type: "text",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
};
