import React, { useEffect, useState } from "react";
import "./dragAndDrop.css";
import { Draggable, Droppable } from "react-drag-and-drop";
import TaskContainer from "../reusable/taskContainer";


const project_task = {
  toDo: [
    {
      id:1,
      title: "Create a Visual Style Guide",
      dueTime: "09.00 AM - 09.30 AM",
    },
    {
      id:2,
      title: "Local setup Doc",
      dueTime: "09.00 AM - 10.30 AM",
    },
    {
      id:3,
      title: "Ui fixes for website",
      dueTime: "09.00 AM - 09.30 AM",
    },
  ],
  inProgress: [
    {
      id:4,
      title: "Complete environment Setup",
      dueTime: "09.00 AM - 10.30 AM",
    },
  ],
  completed: [],
  overdue: [],
};

function DragDrop() {
  const [projectTaskList, setProjectTaskList]= useState(project_task);
  
  const taskDropHandler = (task, dropLocation) => {
    const data = JSON.parse(task.task);
    const taskItem=data.item; 
    setProjectTaskList((prev) => {
      const updatedPickList = prev[data.pickLocation].filter((item) => item.id !== taskItem.id);
      const updatedDropList = [...prev[dropLocation], taskItem];
      return {
        ...prev,
        [data.pickLocation]: updatedPickList,
        [dropLocation]: updatedDropList,
      };
    });

  };
 
  return (
    <div className="drag-drop-holder">
      <div className="drop-sections">
        <p>To Do</p>
        <Droppable onDrop={(task)=>taskDropHandler(task,"toDo")} types={["task"]}>
          {projectTaskList.toDo?.map((item,index) => {
            const task={item:item,pickLocation:"toDo"};
            return <Draggable type="task" data={JSON.stringify(task)} key={index}>
              <TaskContainer taskDetails={item} />
            </Draggable>;
          })}
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>In Progress </p>
        <Droppable onDrop={(task)=>taskDropHandler(task,"inProgress")} types={["task"]}>
          {projectTaskList.inProgress?.map((item,index) => {
            const task={item:item,pickLocation:"inProgress"};
            return <Draggable type="task" data={JSON.stringify(task)} key={index}>
              <TaskContainer taskDetails={item} />
            </Draggable>;
          })}
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>Completed </p>
        <Droppable onDrop={(task)=>taskDropHandler(task,"completed")} types={["task"]}>
          {projectTaskList.completed?.map((item,index) => {
            const task={item:item,pickLocation:"completed"};
            return <Draggable type="task" data={JSON.stringify(task)} key={index}>
              <TaskContainer taskDetails={item} />
            </Draggable>;
          })}
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>Overdue</p>
        <Droppable onDrop={(task)=>taskDropHandler(task,"overdue")} types={["task"]}>
          {projectTaskList.overdue?.map((item,index) => {
            const task={item:item,pickLocation:"overdue"};
            return <Draggable type="task" data={JSON.stringify(task)} key={index}>
              <TaskContainer taskDetails={item} />
            </Draggable>;
          })}
        </Droppable>
      </div>
    </div>
  );
}

export default DragDrop;
