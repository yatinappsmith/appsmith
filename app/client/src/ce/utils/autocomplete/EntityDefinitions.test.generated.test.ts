import { PluginType } from "entities/Action";
import type { JSCollectionData } from "@appsmith/reducers/entityReducers/jsActionsReducer";
import { getPropsForJSActionEntity } from "@appsmith/pages/Editor/Explorer/Entity/getEntityProperties";
import type { JSActionEntity } from "@appsmith/entities/DataTree/types";
import  from "./EntityDefinitions.test";

jest.mock("entities/Action");
jest.mock("@appsmith/reducers/entityReducers/jsActionsReducer");
jest.mock("@appsmith/pages/Editor/Explorer/Entity/getEntityProperties");
jest.mock("@appsmith/entities/DataTree/types");