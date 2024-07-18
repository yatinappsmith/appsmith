import type { ExtraDef } from "utils/autocomplete/defCreatorUtils";
import { generateTypeDef } from "utils/autocomplete/defCreatorUtils";
import {
  ENTITY_TYPE,
  type AppsmithEntity,
} from "@appsmith/entities/DataTree/types";
import _ from "lodash";
import { EVALUATION_PATH } from "utils/DynamicBindingUtils";
import type { Def } from "tern";
import type {
  ActionEntity,
  ActionEntityConfig,
  DataTreeEntityConfig,
  WidgetEntityConfig,
} from "@appsmith/entities/DataTree/types";
import type { FieldEntityInformation } from "components/editorComponents/CodeEditor/EditorConfig";
import { AutocompleteDataType } from "utils/autocomplete/AutocompleteDataType";
import { eeAppsmithAutocompleteDefs } from "@appsmith/utils/autocomplete/helpers";
import { entityDefinitions, GLOBAL_DEFS, GLOBAL_FUNCTIONS, ternDocsInfo, getEachEntityInformation } from "./EntityDefinitions";

jest.mock("utils/autocomplete/defCreatorUtils");
jest.mock("utils/autocomplete/defCreatorUtils");
jest.mock("@appsmith/entities/DataTree/types");
jest.mock("lodash");
jest.mock("utils/DynamicBindingUtils");
jest.mock("tern");
jest.mock("@appsmith/entities/DataTree/types");
jest.mock("components/editorComponents/CodeEditor/EditorConfig");
jest.mock("utils/autocomplete/AutocompleteDataType");
jest.mock("@appsmith/utils/autocomplete/helpers");

describe('entityDefinitions', () => {
  
});
describe('GLOBAL_DEFS', () => {
  
});
describe('GLOBAL_FUNCTIONS', () => {
  
});
describe('ternDocsInfo', () => {
  
});
describe('getEachEntityInformation', () => {
  
});