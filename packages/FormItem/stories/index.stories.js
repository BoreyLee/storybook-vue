import LbrFormItem from "../index.js";

export default {
  title: "Example/LbrFormItem",
  component: LbrFormItem,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LbrFormItem },
  template: '<lbr-form-item v-bind="$props"></lbr-form-item>',
});

export const Normal = Template.bind({});
Normal.args = {
  label: "Normal",
};
