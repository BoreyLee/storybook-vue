import Element from "../src/index.vue";
import { mount } from "@vue/test-utils";

describe("Lbr-Form", () => {
  test("form", () => {
    const wrapper = mount(Element);
    expect(wrapper.html()).toContain("form");
  });
});
