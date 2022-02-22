import Element from "../src/index.vue";
import { mount } from "@vue/test-utils";

describe("Lbr-Link", () => {
  test("link-disabled", () => {
    const wrapper = mount(Element, {
      propsData: { disabled: true, underline: true },
    });
    expect(wrapper.html()).toContain('a class="disabled"');
  });
  test("link-href", () => {
    const wrapper = mount(Element, {
      propsData: {
        href: "https://www.baidu.com",
      },
    });
    expect(wrapper.props("href")).toBe("https://www.baidu.com");
  });
});
