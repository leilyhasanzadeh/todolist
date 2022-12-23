import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AdapterJalali from '@date-io/date-fns-jalali';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { taskListAction } from "root/store";
import { showSuccess } from 'root/utilities/toast';

const Task = ({t, ...props}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const [value, setValue] = useState(null);
    const [selected, setSelected] = useState(null);
    const taskList = useSelector(state => state.task.taskList);

    useEffect(() => {
        if(params.index && taskList.length) {
            setSelected(taskList[params.index - 1]);            
            setValue(new Date(taskList[params.index - 1]?.timestamp));
        }else {
            setSelected(null);
            setValue(null);
        }
    }, [params, taskList])

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        let data = {};
        if(value) data["timestamp"] = new Date(value).getTime();
        const inputList = event.target.querySelectorAll("input, textarea");
        inputList.forEach((element) => {
            if(element.name){
                data[element.name] = element.value                
            }            
        })
        if(params.index) {
            let temp = [...taskList];
            temp[params.index - 1] = data;
            dispatch(taskListAction(temp));
            localStorage.setItem("taskList", JSON.stringify(temp));    
            navigate(`/inbox`, { replace: true });
        }else {
            dispatch(taskListAction([...taskList, data]));
            localStorage.setItem("taskList", JSON.stringify([...taskList, data]));    
            setValue(null);
            event.target.reset();
        }
        
        showSuccess(t("operation has done successfully"));
    }

    return (
        <div className="w-full flex justify-center">
            <form onSubmit={handleSubmit} className={"flex flex-col p-8 shadow-xl"}>
                <AddTaskIcon className="self-center mb-4"/>
                <TextField 
                    name="title"
                    label={t("Title")} 
                    variant="outlined" 
                    className="!mb-4"
                    defaultValue={selected?.title}
                    key={selected?.title}
                    required
                />
                <LocalizationProvider dateAdapter={AdapterJalali}>
                    <DatePicker
                        label={t("Duo date")}
                        value={value}
                        onChange={(newValue) => {                            
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params}  className="!mb-4" name="date"/>}
                    />
                </LocalizationProvider>
                <TextField   
                    name="description"                          
                    label={t("Description")}
                    placeholder={t("Description")}
                    multiline
                    variant="filled"
                    className="!mb-4"
                    defaultValue={selected?.description}
                    key={selected?.description}
                />
                <Button 
                    variant="contained"
                    type="submit"           
                >
                    {t("Submit")}
                </Button>
            </form>
        </div>
    )
}

export default withTranslation()(Task);