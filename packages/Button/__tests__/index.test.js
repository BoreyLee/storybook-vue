// require("jsdom-global")();
import Element from "../src/index.vue";
import { mount } from "@vue/test-utils";

describe("lbr-button", () => {
  test("button-size", () => {
    const wrapper = mount(Element);
    // expect(wrapper.props().size).toBe("medium");
  });
});
