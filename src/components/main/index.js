import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { taskListAction } from "root/store";
// import { fetchTaskList } from "root/store/thunks/task";

function Main({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const taskList = localStorage.getItem("taskList");
    dispatch(taskListAction(taskList ? JSON.parse(taskList) : []));
    // dispatch(fetchTaskList());
  }, []);

  return (
    <main className="relative	w-full">
      <div className="h-full">
        <div className="px-2 mt-4 h-full">
          <div className="overflow-auto h-full">{children}</div>
        </div>
      </div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.element,
};

export default withTranslation()(Main);
