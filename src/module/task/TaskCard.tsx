import React from "react";
import type {ITask} from "@/type";
import { cn } from "@/lib/utils";

type TaskCardProps = {
  task: ITask;
};

const TaskCard = ({ task }: TaskCardProps) => {
   console.log({task});
   
  return (
    <div className="border p-4 rounded shadow flex justify-between mt-3">
      <div>
        <div className="flex items-center gap-2">

        
        <div className={cn("size-3 rounded-full",{ // cn kivabe kaj korche
            "bg-green-500":task.priority === "Low",
            "bg-yellow-500":task.priority === "Medium",
            "bg-red-500":task.priority === "High"
        })}></div>
        <h2 className="text-xl font-medium">{task.title}</h2>
        </div>
        <p>{task.description}</p>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
      </div>
    </div>
  );
};

export default TaskCard;
