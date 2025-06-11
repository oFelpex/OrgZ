export type TodoSection = "todo" | "onGoing" | "done";

export interface Task {
  id: string;
  title: string;
  description?: string;
  dateCreation: Date;
  dateBegin: Date;
  dateFinish: Date;
  important?: boolean;
  done: boolean;
}
export interface TasksData {
  todo: Task[];
  onGoing: Task[];
  done: Task[];
}
