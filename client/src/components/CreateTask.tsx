import React, { useEffect, FormEvent, useReducer } from 'react';
import useCreateTask from '../api/useCreateTask';
import { Task, Priority } from '../graphqlTypes';

interface Props {
  listId?: string;
  onCreate(task: Task): void;
}

const reducer = (
  state: { name: string; priority: Priority },
  { name, value }: { name: string; value: string },
) => {
  return {
    [name]: value,
    ...state,
  };
};

const CreateTask = ({ listId, onCreate }: Props) => {
  const [createTask, { data }] = useCreateTask();
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    priority: Priority.Normal,
  });

  useEffect(() => {
    if (data) {
      onCreate(data);
    }
  }, [data]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (listId) {
      createTask({
        listId,
        ...state,
      });
    }
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-form">
        <input
          type="text"
          name="name"
          onChange={({ target }) => dispatch(target)}
        />
        <select name="priority" onChange={({ target }) => dispatch(target)}>
          <option>{Priority.Low}</option>
          <option>{Priority.Normal}</option>
          <option>{Priority.High}</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateTask;
