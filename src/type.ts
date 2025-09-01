export type ITask = {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
};