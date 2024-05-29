import React, { useEffect, useState } from "react";
import "./dragAndDrop.css";
import { Draggable, Droppable } from "react-drag-and-drop";
import TaskContainer from "../reusable/taskContainer";

function DragDrop() {
  const project_task = {
    toDo: [
      {
        title: "Create a Visual Style Guide",
        dueTime: "09.00 AM - 09.30 AM",
      },
      {
        title: "Local setup Doc",
        dueTime: "09.00 AM - 10.30 AM",
      },
      {
        title: "Ui fixes for website",
        dueTime: "09.00 AM - 09.30 AM",
      },
    ],
    inProgress: [
      {
        title: "Complete environment Setup",
        dueTime: "09.00 AM - 10.30 AM",
      },
    ],
    completed: [],
    overdue: [],
  };

  const [toDoDrop, setToDoDrop] = useState(project_task.toDo);
    const [inProgressDrop, setinProgressDrop] = useState(project_task.inProgress);
    const [completedDrop, setcompletedDrop] = useState(project_task.completed);
    const [overDueDrop, setoverDueDrop] = useState(project_task.overdue);

  const toDoDrophandler = (task) => {
    const data = JSON.parse(task.task);
    console.log(data);
    let prevItems = [...toDoDrop];
    const index = prevItems.findIndex((item) => item === data.title);
    if (index !== -1) {
      //if already in it then move to first index
      prevItems = prevItems.filter((item) => item !== data.task);
      prevItems = [data.task, ...prevItems];
      setToDoDrop(prevItems);
    } else {
      setToDoDrop((prev) => {
        return [...prev, data];
      });
    }
  };
  const inProgressDrophandler = (task) => {
    const data = JSON.parse(task.task);
    console.log(data);
    let prevItems = [...inProgressDrop];
    const index = prevItems.findIndex((item) => item === data.title);
    if (index !== -1) {
      //if already in it then move to first index
      prevItems = prevItems.filter((item) => item !== data.task);
      prevItems = [data.task, ...prevItems];
      setinProgressDrop(prevItems);
    } else {
      setinProgressDrop((prev) => {
        return [...prev, data];
      });
    }
  };
  const completedDrophandler = (task) => {
    const data = JSON.parse(task.task);
    console.log(data);
    let prevItems = [...completedDrop];
    const index = prevItems.findIndex((item) => item === data.title);
    if (index !== -1) {
      //if already in it then move to first index
      prevItems = prevItems.filter((item) => item !== data.task);
      prevItems = [data.task, ...prevItems];
      setcompletedDrop(prevItems);
    } else {
      setcompletedDrop((prev) => {
        return [...prev, data];
      });
    }
  };
  const overDueDrophandler = (task) => {
    const data = JSON.parse(task.task);
    console.log(data);
    let prevItems = [...overDueDrop];
    const index = prevItems.findIndex((item) => item === data.title);
    if (index !== -1) {
      //if already in it then move to first index
      prevItems = prevItems.filter((item) => item !== data.task);
      prevItems = [data.task, ...prevItems];
      setoverDueDrop(prevItems);
    } else {
      setoverDueDrop((prev) => {
        return [...prev, data];
      });
    }
  };


  return (
    <div className="drag-drop-holder">
      <div className="drop-sections">
        <p>To Do</p>
        <Droppable onDrop={toDoDrophandler} types={["task"]}>
          {
            toDoDrop?.map((item)=> (
              <Draggable type="task" data={JSON.stringify(item)}>
              <TaskContainer taskDetails={item}/>
            </Draggable>
            ))
          }
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>In Progress </p>
        <Droppable onDrop={inProgressDrophandler} types={["task"]}>
        {
            inProgressDrop?.map((item)=> (
              <Draggable type="task" data={JSON.stringify(item)}>
              <TaskContainer taskDetails={item}/>
            </Draggable>
            ))
          }
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>Completed </p>
        <Droppable onDrop={completedDrophandler} types={["task"]}>
        {
            completedDrop?.map((item)=> (
              <Draggable type="task" data={JSON.stringify(item)}>
              <TaskContainer taskDetails={item}/>
            </Draggable>
            ))
          }
        </Droppable>
      </div>
      <div className="drop-sections">
        <p>Overdue </p>
        <Droppable onDrop={overDueDrophandler} types={["task"]}>
        {
            overDueDrop?.map((item)=> (
              <Draggable type="task" data={JSON.stringify(item)}>
              <TaskContainer taskDetails={item}/>
            </Draggable>
            ))
          }
        </Droppable>
      </div>
    </div>
  );
}

export default DragDrop;
