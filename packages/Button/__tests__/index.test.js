import Element from "../src/index.vue";
import { mount } from "@vue/test-utils";

describe("Lbr-button", () => {
  test("button-label", () => {
    const wrapper = mount(Element, {
      propsData: {
        label: "test",
      },
    });
    expect(wrapper.props("label")).toBe("test");
  });
  test("button-primary", () => {
    const wrapper = mount(Element, {
      propsData: {
        primary: true,
      },
    });
    expect(wrapper.html()).toContain("lbr-button--primary");
  });
  test("button-size", () => {
    const wrapper = mount(Element, {
      propsData: {
        size: "small",
      },
    });
    expect(wrapper.html()).toContain("lbr-button--small");
  });
});
