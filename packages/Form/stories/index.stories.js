import LbrForm from "../index.js";
import LbrFormItem from "../../FormItem/index.js";
import LbrInput from "../../Input/index.js";
import LbrButton from "../../Button/index.js";

export default {
  title: "Example/LbrForm",
  component: LbrForm,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LbrForm, LbrFormItem, LbrInput, LbrButton },
  template:
    '<lbr-form class="form" ref="form" :model="user" :rules="rules"><lbr-form-item label="用户名" prop="username"><lbr-input :value="user.username" @input="user.username = $event" placeholder="请输入用户名"/></lbr-form-item><lbr-form-item label="密码" prop="password"><lbr-input type="password" v-model="user.password"></lbr-input></lbr-form-item><lbr-form-item><lbr-button type="primary" @click="login">登 录</lbr-button></lbr-form-item></lbr-form>',
  methods: {
    login() {
      console.log("button");
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("验证成功");
        } else {
          alert("验证失败");
          return false;
        }
      });
    },
  },
});

export const Login = Template.bind({});
Login.args = {
  user: {
    username: "",
    password: "",
  },
  rules: {
    username: [
      {
        required: true,
        message: "请输入用户名",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码",
      },
      {
        min: 6,
        max: 12,
        message: "请输入6-12位密码",
      },
    ],
  },
};
