import React, { useState } from 'react';
import Lists from './Lists';
import Tasks from './Tasks';
import CreateTask from './CreateTask';
import { Task } from '../graphqlTypes';

const Main = () => {
  const [listId, setListId] = useState<string | undefined>();
  const [newTask, setNewTask] = useState<Task | undefined>();

  return (
    <div className="main">
      <div className="list">
        <Lists onSelect={setListId} />
      </div>
      <div className="task">
        <Tasks listId={listId} />
        {newTask ? (
          <div>New task ID: {newTask.id}</div>
        ) : (
          <CreateTask listId={listId} onCreate={setNewTask} />
        )}
      </div>
    </div>
  );
};

export default Main;
