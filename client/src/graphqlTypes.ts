export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: string;
};

export type List = {
  __typename?: 'List';
  id: Scalars['UUID'];
  name: Scalars['String'];
  tasks: Array<Task>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
};

export type MutationCreateTaskArgs = {
  task: TaskCreateInput;
};

export enum Priority {
  High = 'HIGH',
  Normal = 'NORMAL',
  Low = 'LOW',
}

export type Query = {
  __typename?: 'Query';
  getLists: Array<List>;
  getTasks: Array<Task>;
};

export type QueryGetTasksArgs = {
  listId: Scalars['UUID'];
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['UUID'];
  name: Scalars['String'];
  priority?: Maybe<Priority>;
  other?: Maybe<Scalars['String']>;
};

export type TaskCreateInput = {
  listId: Scalars['UUID'];
  name: Scalars['String'];
  priority?: Maybe<Priority>;
};
