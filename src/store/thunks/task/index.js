import axios from "axios";

import {
  fetchTaskListStartAction,
  fetchTaskListSuccessfulAction,
  fetchTaskListFailedAction,
  taskListAction,
} from "root/store/reducers";
import { showSuccess, showError, showWarning } from "root/utilities/toast";

export const fetchTaskList = (params) => {
  return (dispatch) => {
    dispatch(fetchTaskListStartAction());
    // axios({
    //   url: `https://jsonplaceholder.typicode.com/posts`,
    //   method: "GET",
    //   headers: {
    //     "Authorization": `Bearer ${localStorage.getItem("access_token")}`
    //   },
    //   params: params
    // })
    //   .then((response) => {
    dispatch(taskListAction([]));
    dispatch(fetchTaskListSuccessfulAction());
    // })
    // .catch((err) => {
    //   if (err?.response?.data?.message) showError(err.response.data.message);
    //   else showError("Server Error");
    //   dispatch(fetchTaskListFailedAction());
    // })
  };
};
