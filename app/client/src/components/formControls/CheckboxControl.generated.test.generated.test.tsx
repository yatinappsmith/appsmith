import React from "react";
import type { CheckboxProps } from "design-system";
import { Checkbox } from "design-system";
import type { ControlProps } from "./BaseControl";
import BaseControl from "./BaseControl";
import type { ControlType } from "constants/PropertyControlConstants";
import type { WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";
import { Field } from "redux-form";
import CheckboxControl from "./CheckboxControl";
import  from "./CheckboxControl.generated.test";

jest.mock("design-system");
jest.mock("design-system");
jest.mock("./BaseControl");
jest.mock("./BaseControl");
jest.mock("constants/PropertyControlConstants");
jest.mock("redux-form");
jest.mock("redux-form");
jest.mock("./CheckboxControl");