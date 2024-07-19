import type {
  EvaluationReduxAction,
  ReduxAction,
} from "@appsmith/constants/ReduxActionConstants";
import {
  ReduxActionErrorTypes,
  ReduxActionTypes,
} from "@appsmith/constants/ReduxActionConstants";
import { put, select, call } from "redux-saga/effects";
import {
  updateActionData,
  type FetchActionsPayload,
} from "actions/pluginActionActions";
import type { JSAction, JSCollection } from "entities/JSCollection";
import {
  closeJSActionTab,
  closeJsActionTabSuccess,
  copyJSCollectionError,
  copyJSCollectionSuccess,
  createJSCollectionSuccess,
  deleteJSCollectionError,
  deleteJSCollectionSuccess,
  fetchJSCollectionsForPage,
  fetchJSCollectionsForPageSuccess,
  moveJSCollectionError,
  moveJSCollectionSuccess,
} from "actions/jsActionActions";
import {
  getJSCollection,
  getNewEntityName,
  getPageNameByPageId,
} from "@appsmith/selectors/entitiesSelector";
import history from "utils/history";
import { getCurrentPageId } from "selectors/editorSelectors";
import type { JSCollectionCreateUpdateResponse } from "@appsmith/api/JSActionAPI";
import JSActionAPI from "@appsmith/api/JSActionAPI";
import {
  createMessage,
  ERROR_JS_ACTION_COPY_FAIL,
  ERROR_JS_ACTION_MOVE_FAIL,
  ERROR_JS_COLLECTION_RENAME_FAIL,
  JS_ACTION_COPY_SUCCESS,
  JS_ACTION_DELETE_SUCCESS,
  JS_ACTION_MOVE_SUCCESS,
} from "@appsmith/constants/messages";
import { validateResponse } from "sagas/ErrorSagas";
import type {
  FetchPageRequest,
  FetchPageResponse,
  PageLayout,
} from "api/PageApi";
import PageApi from "api/PageApi";
import { updateCanvasWithDSL } from "@appsmith/sagas/PageSagas";
import type { JSCollectionData } from "@appsmith/reducers/entityReducers/jsActionsReducer";
import type { ApiResponse } from "api/ApiResponses";
import AppsmithConsole from "utils/AppsmithConsole";
import { ENTITY_TYPE } from "@appsmith/entities/AppsmithConsole/utils";
import LOG_TYPE from "entities/AppsmithConsole/logtype";
import type { CreateJSCollectionRequest } from "@appsmith/api/JSActionAPI";
import * as log from "loglevel";
import { builderURL, jsCollectionIdURL } from "@appsmith/RouteBuilder";
import type { EventLocation } from "@appsmith/utils/analyticsUtilTypes";
import AnalyticsUtil from "@appsmith/utils/AnalyticsUtil";
import {
  checkAndLogErrorsIfCyclicDependency,
  getFromServerWhenNoPrefetchedResult,
} from "sagas/helper";
import { toast } from "design-system";
import { updateAndSaveLayout } from "actions/pageActions";
import type { CanvasWidgetsReduxState } from "reducers/entityReducers/canvasWidgetsReducer";
import { getWidgets } from "sagas/selectors";
import FocusRetention from "sagas/FocusRetentionSaga";
import { handleJSEntityRedirect } from "sagas/IDESaga";
import { getIDETypeByUrl } from "@appsmith/entities/IDE/utils";
import { IDE_TYPE } from "@appsmith/entities/IDE/constants";
import { CreateNewActionKey } from "@appsmith/entities/Engine/actionHelpers";
import { getAllActionTestPayloads } from "utils/storage";
import { fetchJSCollectionsSaga, createJSCollectionSaga, copyJSCollectionSaga, handleMoveOrCopySaga, moveJSCollectionSaga, getIndexToBeRedirected, deleteJSCollectionSaga, saveJSObjectName, refactorJSObjectName, fetchJSCollectionsForPageSaga, fetchJSCollectionsForViewModeSaga, closeJSActionTabSaga, fetchStoredTestPayloadsSaga } from "./JSActionSagas";

jest.mock("@appsmith/constants/ReduxActionConstants");
jest.mock("@appsmith/constants/ReduxActionConstants");
jest.mock("redux-saga/effects");
jest.mock("actions/pluginActionActions");
jest.mock("entities/JSCollection");
jest.mock("actions/jsActionActions");
jest.mock("@appsmith/selectors/entitiesSelector");
jest.mock("utils/history");
jest.mock("selectors/editorSelectors");
jest.mock("@appsmith/api/JSActionAPI");
jest.mock("@appsmith/api/JSActionAPI");
jest.mock("@appsmith/constants/messages");
jest.mock("sagas/ErrorSagas");
jest.mock("api/PageApi");
jest.mock("api/PageApi");
jest.mock("@appsmith/sagas/PageSagas");
jest.mock("@appsmith/reducers/entityReducers/jsActionsReducer");
jest.mock("api/ApiResponses");
jest.mock("utils/AppsmithConsole");
jest.mock("@appsmith/entities/AppsmithConsole/utils");
jest.mock("entities/AppsmithConsole/logtype");
jest.mock("@appsmith/api/JSActionAPI");
jest.mock("loglevel");
jest.mock("@appsmith/RouteBuilder");
jest.mock("@appsmith/utils/analyticsUtilTypes");
jest.mock("@appsmith/utils/AnalyticsUtil");
jest.mock("sagas/helper");
jest.mock("design-system");
jest.mock("actions/pageActions");
jest.mock("reducers/entityReducers/canvasWidgetsReducer");
jest.mock("sagas/selectors");
jest.mock("sagas/FocusRetentionSaga");
jest.mock("sagas/IDESaga");
jest.mock("@appsmith/entities/IDE/utils");
jest.mock("@appsmith/entities/IDE/constants");
jest.mock("@appsmith/entities/Engine/actionHelpers");
jest.mock("utils/storage");

describe('fetchJSCollectionsSaga', () => {
  it('should expose a function', () => {
		expect(fetchJSCollectionsSaga).toBeDefined();
	});
  
  it('fetchJSCollectionsSaga should return expected output', () => {
    // const retValue = fetchJSCollectionsSaga(action);
    expect(false).toBeTruthy();
  });
});
describe('createJSCollectionSaga', () => {
  it('should expose a function', () => {
		expect(createJSCollectionSaga).toBeDefined();
	});
  
  it('createJSCollectionSaga should return expected output', () => {
    // const retValue = createJSCollectionSaga(actionPayload);
    expect(false).toBeTruthy();
  });
});
describe('copyJSCollectionSaga', () => {
  it('should expose a function', () => {
		expect(copyJSCollectionSaga).toBeDefined();
	});
  
  it('copyJSCollectionSaga should return expected output', () => {
    // const retValue = copyJSCollectionSaga(action);
    expect(false).toBeTruthy();
  });
});
describe('handleMoveOrCopySaga', () => {
  it('should expose a function', () => {
		expect(handleMoveOrCopySaga).toBeDefined();
	});
  
  it('handleMoveOrCopySaga should return expected output', () => {
    // const retValue = handleMoveOrCopySaga(actionPayload);
    expect(false).toBeTruthy();
  });
});
describe('moveJSCollectionSaga', () => {
  it('should expose a function', () => {
		expect(moveJSCollectionSaga).toBeDefined();
	});
  
  it('moveJSCollectionSaga should return expected output', () => {
    // const retValue = moveJSCollectionSaga(action);
    expect(false).toBeTruthy();
  });
});
describe('getIndexToBeRedirected', () => {
  it('should expose a function', () => {
		expect(getIndexToBeRedirected).toBeDefined();
	});
  
  it('getIndexToBeRedirected should return expected output', () => {
    // const retValue = getIndexToBeRedirected(jsActions,id);
    expect(false).toBeTruthy();
  });
});
describe('deleteJSCollectionSaga', () => {
  it('should expose a function', () => {
		expect(deleteJSCollectionSaga).toBeDefined();
	});
  
  it('deleteJSCollectionSaga should return expected output', () => {
    // const retValue = deleteJSCollectionSaga(actionPayload);
    expect(false).toBeTruthy();
  });
});
describe('saveJSObjectName', () => {
  it('should expose a function', () => {
		expect(saveJSObjectName).toBeDefined();
	});
  
  it('saveJSObjectName should return expected output', () => {
    // const retValue = saveJSObjectName(action);
    expect(false).toBeTruthy();
  });
});
describe('refactorJSObjectName', () => {
  it('should expose a function', () => {
		expect(refactorJSObjectName).toBeDefined();
	});
  
  it('refactorJSObjectName should return expected output', () => {
    // const retValue = refactorJSObjectName(id,pageId,oldName,newName);
    expect(false).toBeTruthy();
  });
});
describe('fetchJSCollectionsForPageSaga', () => {
  it('should expose a function', () => {
		expect(fetchJSCollectionsForPageSaga).toBeDefined();
	});
  
  it('fetchJSCollectionsForPageSaga should return expected output', () => {
    // const retValue = fetchJSCollectionsForPageSaga(action);
    expect(false).toBeTruthy();
  });
});
describe('fetchJSCollectionsForViewModeSaga', () => {
  it('should expose a function', () => {
		expect(fetchJSCollectionsForViewModeSaga).toBeDefined();
	});
  
  it('fetchJSCollectionsForViewModeSaga should return expected output', () => {
    // const retValue = fetchJSCollectionsForViewModeSaga(action);
    expect(false).toBeTruthy();
  });
});
describe('closeJSActionTabSaga', () => {
  it('should expose a function', () => {
		expect(closeJSActionTabSaga).toBeDefined();
	});
  
  it('closeJSActionTabSaga should return expected output', () => {
    // const retValue = closeJSActionTabSaga(actionPayload);
    expect(false).toBeTruthy();
  });
});
describe('fetchStoredTestPayloadsSaga', () => {
  it('should expose a function', () => {
		expect(fetchStoredTestPayloadsSaga).toBeDefined();
	});
  
  it('fetchStoredTestPayloadsSaga should return expected output', () => {
    // const retValue = fetchStoredTestPayloadsSaga(collections);
    expect(false).toBeTruthy();
  });
});