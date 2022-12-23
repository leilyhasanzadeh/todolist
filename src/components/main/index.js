import React, { useEffect, useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { withTranslation } from "react-i18next";
import { useNavigate, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchTaskList } from "root/store/thunks/task";
import { taskSelectedAction } from "root/store";

function Main({ t, ...props }) {

  const dispatch = useDispatch();
  const [traslationList, setTranslationList] = useState([]);
  const taskList = useSelector(state => state.task.taskList);

  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTaskList());
  }, [])

  useEffect(() => {
    let temp = [];
    taskList.forEach(item => {
      temp.push({ "title": item.title });
    })
    setTranslationList([...temp]);
  }, [taskList])

  return (
    <main className='relative h-screen overflow-auto	'>
      <div className='h-full'>
        <div className='px-2 mt-4'>
          <div className='overflow-auto'>
            {taskList.map((task, index) => (
              <div className="mb-6">
                <p className="mb-2 text-sm">key-{index}</p>
                <table className="w-full table-fixed	" >
                  <tr>
                    <td className="border border-solid w-6/12 p-3 " >
                      <span
                        onDoubleClick={(event) => dispatch(taskSelectedAction(task.id))}
                      >
                        {task.title}
                      </span>
                    </td>
                    <td className="border border-solid w-6/12 p-0">
                      <TextareaAutosize
                        placeholder=""
                        className='w-full !h-full p-3'
                        minRows={1}
                        onBlur={(event) => {
                          let temp = [...traslationList];
                          temp[index].title = event.target.value;
                          taskList.forEach(item => {
                            temp.push({ "title": item.title });
                          })
                          setTranslationList([...temp]);
                        }}
                      />
                    </td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default withTranslation()(Main)
