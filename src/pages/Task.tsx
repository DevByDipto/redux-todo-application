import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { selectTasks } from "@/redux/feature/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import React from "react";

const Task = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl py-5 ">all task</h1>
        <AddTaskModal></AddTaskModal>
      </div>
      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
