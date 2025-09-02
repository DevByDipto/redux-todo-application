export type ITask = { // I keno dilo mane task nah hoye ITask keno
  id: string; 
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
};

export type Iuser = {
  id:string,
  name:string
}