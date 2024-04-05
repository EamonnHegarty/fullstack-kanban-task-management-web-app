export type Boards = {
  _id: string;
  boardName: string;
};
export type Subtask = {
  subtaskTitle: string;
  completed: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type Task = {
  taskTitle: string;
  taskDescription: string;
  subtasks: Subtask[];
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type Column = {
  columnName: string;
  tasks?: Task[];
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BoardData = {
  _id: string;
  user: string;
  boardName: string;
  columns: Column[];
  __v: number;
  createdAt: string;
  updatedAt: string;
};

export type SelectedBoard = {
  _id: string;
  boardName: string;
  columns: [Column];
};

export type ColumnsForTaskForm = {
  id: string;
  columnName: string;
};
