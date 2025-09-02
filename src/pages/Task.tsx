import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { selectTasks, updateFilter } from "@/redux/feature/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import { useDispatch } from "react-redux";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  
const dispatch = useDispatch()
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl py-5 ">all task</h1>
        <div className="flex gap-5">      
         <div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger onClick={()=>dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter('medium'))} value="medium">Medium</TabsTrigger>
          <TabsTrigger onClick={()=>dispatch(updateFilter('high'))} value="high">High</TabsTrigger>
        </TabsList>
        </Tabs>
      </div>
        <AddTaskModal></AddTaskModal>
      </div>
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
