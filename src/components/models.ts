export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Task {
  id: number;
  title: string;
  isFav: boolean;
}
