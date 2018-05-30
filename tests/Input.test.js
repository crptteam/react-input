import React from "react";
import { Input } from "../src/";
import { mount } from 'enzyme';

describe("Input", () => {
  it("Should renders without problems", () => {
    const wrapper = mount(<Input placeholder="I am an input" />);

    expect(wrapper).toMatchSnapshot();
  });
});
