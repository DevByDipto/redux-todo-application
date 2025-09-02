import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { useGetTaskQuery } from "@/redux/api/baseapi";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import { useDispatch } from "react-redux";

const Task = () => {
const {data,isLoading} = useGetTaskQuery(undefined)// undefined keno dilam ?
console.log(data);

if(isLoading){
return <p>Loading....</p>
}

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl py-5 ">all task</h1>
        <div className="flex gap-5">      
         <div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="low">Low</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger  value="high">High</TabsTrigger>
        </TabsList>
        </Tabs>
      </div>
        <AddTaskModal></AddTaskModal>
      </div>
     </div>
      <div>
        {!isLoading && data.tasks.map((task) => (
          // console.log(task)
          
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Task;
