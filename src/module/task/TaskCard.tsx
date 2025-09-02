import React from "react";
import type {ITask} from "@/type";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleCompleteStatus } from "@/redux/feature/task/taskSlice";
import { selectUsers } from "@/redux/feature/user/userSlice";

type TaskCardProps = {
  task: ITask;
};

const TaskCard = ({ task }: TaskCardProps) => {
  //  console.log({task});
  const dispatch = useDispatch()
  const users = useSelector(selectUsers)

  const assignUser = users.find((user)=> user.id ==task.assignedTo )
   console.log(assignUser);
   
  return (
    <div className="border p-4 rounded shadow flex justify-between mt-3">
      <div>
        <div className="flex items-center gap-2">

        
        <div className={cn("size-3 rounded-full",{ // cn kivabe kaj korche
            "bg-green-500":task.priority === "low",
            "bg-yellow-500":task.priority === "medium",
            "bg-red-500":task.priority === "high"
        })}></div>
        <h2 className={cn(`text-xl font-medium`,
         {"line-through" : task.isCompleted}
        )}>{task.title}</h2>
        </div>
        <p>Assigned To: {assignUser ? assignUser.name : "no-one"}</p>
        <p>{task.description}</p>
      </div>
      <div>
        <Input defaultChecked={task.isCompleted} type="checkbox" name="" id="" onClick={()=>dispatch(toggleCompleteStatus(task.id))}/>
        <button onClick={()=>dispatch(deleteTask(task.id))}>delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
