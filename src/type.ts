export type ITask = { // I keno dilo mane task nah hoye ITask keno
  id: string; 
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "medium" | "low";
  assignedTo: string | null // aikhane key er nam assign nah diye assignTo keno dilam ?
};

export type Iuser = {
  id:string,
  name:string
}