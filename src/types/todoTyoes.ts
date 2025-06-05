export type TodoSection = "todo" | "onGoing" | "done";

export interface TodoData {
  todo: string[];
  onGoing: string[];
  done: string[];
}
