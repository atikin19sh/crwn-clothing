import { createAction } from "../reducer/reducer.utils";

test("created with createAction action without payload have right type", () => {
  const testType = "TEST_ACTION_TYPE";
  const createdAction = createAction(testType);
  expect(createdAction.type).toBe(testType);
});

test("created with createAction action with payload have right type and payload", () => {
  const testType = "TEST_ACTION_TYPE";
  const testPayload = { a: 1, b: "test" };
  const createdAction = createAction(testType, testPayload);
  expect(createdAction.type).toBe(testType);
  expect(createdAction.payload).toEqual(testPayload);
});
