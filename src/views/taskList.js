import React from "react";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

import { taskListAction } from "root/store";

const TaskList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.task.taskList);

  return (
    <div className="w-full flex justify-start p-4">
      {taskList.map((task, index) => (
        <Card sx={{ minWidth: 275 }} className={"text-center mx-3"} key={index}>
          <CardContent>
            <Typography variant="h5" component="div">
              {task.title}
            </Typography>
            <Typography className="!text-xs" color="text.secondary">
              {task.date}
            </Typography>
            <Typography variant="body2" className="!mt-6">
              {task.description}
            </Typography>
          </CardContent>
          <CardActions className="flex justify-center">
            <Button
              size="small"
              onClick={() => {
                let temp = [...taskList];
                temp.splice(index, 1);
                dispatch(taskListAction(temp));
              }}
            >
              <DeleteIcon />
            </Button>
            <Button
              size="small"
              onClick={() => {
                navigate(`/edit/${index + 1}`, { replace: true });
              }}
            >
              <EditIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default withTranslation()(TaskList);
