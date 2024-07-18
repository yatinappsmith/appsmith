import React from "react";
import type { CheckboxProps } from "design-system";
import { Checkbox } from "design-system";
import type { ControlProps } from "./BaseControl";
import BaseControl from "./BaseControl";
import type { ControlType } from "constants/PropertyControlConstants";
import type { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";
import { Field } from "redux-form";
import CheckboxControl from "./CheckboxControl";

jest.mock("design-system");
jest.mock("design-system");
jest.mock("./BaseControl");
jest.mock("./BaseControl");
jest.mock("constants/PropertyControlConstants");
jest.mock("redux-form");
jest.mock("redux-form");

describe('CheckboxControl', () => {
  let instance;

  beforeEach(() => {
    instance = new CheckboxControl();
  });

  it('instance should be an instanceof CheckboxControl', () => {
    expect(instance instanceof CheckboxControl).toBeTruthy();
  });

  it('should have a method getControlType()', () => {
    // instance.getControlType();
    expect(false).toBeTruthy();
  });

  it('should have a method render()', () => {
    // instance.render();
    expect(false).toBeTruthy();
  });
});