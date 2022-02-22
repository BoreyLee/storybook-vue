import Element from "../src/index.vue";
import { mount } from "@vue/test-utils";

describe("Lbr-Input", () => {
  test("input-text", () => {
    const wrapper = mount(Element);
    expect(wrapper.html()).toContain('input type="text"');
  });
  test("input-password", () => {
    const wrapper = mount(Element, {
      propsData: { type: "password", value: "admin" },
    });
    expect(wrapper.html()).toContain('input type="password"');
    expect(wrapper.props("value")).toBe("admin");
  });
  /** 快照 */
  test("input-snapshot", () => {
    const wrapper = mount(Element, {
      propsData: { type: "password", value: "admin" },
    });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
