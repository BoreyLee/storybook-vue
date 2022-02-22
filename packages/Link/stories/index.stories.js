import LbrLink from "../index.js";

export default {
  title: "Example/LbrLink",
  component: LbrLink,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LbrLink },
  template:
    '<lbr-link v-bind="$props" href="https://www.baidu.com">百度</lbr-link>',
});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Underline = Template.bind({});
Underline.args = {
  underline: false,
};
