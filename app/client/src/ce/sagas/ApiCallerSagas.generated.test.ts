import JSActionAPI from "@appsmith/api/JSActionAPI";
import ActionAPI from "api/ActionAPI";
import type { ApiResponse } from "api/ApiResponses";
import type { Action } from "entities/Action";
import type { JSCollection } from "entities/JSCollection";
import { updateActionAPICall, updateJSCollectionAPICall } from "./ApiCallerSagas";

jest.mock("@appsmith/api/JSActionAPI");
jest.mock("api/ActionAPI");
jest.mock("api/ApiResponses");
jest.mock("entities/Action");
jest.mock("entities/JSCollection");

describe('updateActionAPICall', () => {
  it('should expose a function', () => {
		expect(updateActionAPICall).toBeDefined();
	});
  
  it('updateActionAPICall should return expected output', () => {
    // const retValue = updateActionAPICall(action);
    expect(false).toBeTruthy();
  });
});
describe('updateJSCollectionAPICall', () => {
  it('should expose a function', () => {
		expect(updateJSCollectionAPICall).toBeDefined();
	});
  
  it('updateJSCollectionAPICall should return expected output', () => {
    // const retValue = updateJSCollectionAPICall(jsCollection);
    expect(false).toBeTruthy();
  });
});