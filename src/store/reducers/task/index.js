import { createReducer, createAction } from '@reduxjs/toolkit';

const defaultState = {
    taskList: [],
    process: "idle",
    taskSelected: 0
};

export const taskListAction = createAction('TASKLIST', function prepare(taskList) {
    return { payload: [...taskList], }
})
export const taskSelectedAction = createAction('TASKSELECTED', function prepare(taskSelected) {
    return { payload: taskSelected, }
})
export const fetchTaskListStartAction = createAction('FETCH_TASKLIST_START', function prepare() {
    return { payload: "start", }
})
export const fetchTaskListSuccessfulAction = createAction('FETCH_TASKLIST_SUCCESSFUL', function prepare() {
    return { payload: "successfull", }
})
export const fetchTaskListFailedAction = createAction('FETCH_TASKLIST_FAILED', function prepare() {
    return { payload: "failed", }
})

export const taskReducer = createReducer(defaultState, (builder) => {
    builder
        .addCase(taskListAction.type, (state, action) => {
            state["taskList"] = action["payload"]
        })
        .addCase(taskSelectedAction.type, (state, action) => {
            state["taskSelected"] = action["payload"]
        })
        .addCase(fetchTaskListStartAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
        .addCase(fetchTaskListSuccessfulAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
        .addCase(fetchTaskListFailedAction.type, (state, action) => {
            state["process"] = action["payload"]
        })
})
