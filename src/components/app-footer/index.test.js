import React from "react";
import { shallow } from "enzyme";
import AppFooter from "./index";

describe("<AppFooter />", () => {
  test("should contain [Current Year] Randy Nghiem", () => {
    const wrapper = shallow(<AppFooter />);
    const curYear = new Date().getFullYear();
    const footerText = `${curYear} Randy Nghiem`;
    expect(wrapper.text()).toContain(footerText);
  });
});
