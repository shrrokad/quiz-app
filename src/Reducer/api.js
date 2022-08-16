import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan")
// console.log(apiCallBegan,"apiCallBegan");
export const apiCallSuccess = createAction("api/callSuccess")
export const apiCallFailed = createAction("api/CallFailed")