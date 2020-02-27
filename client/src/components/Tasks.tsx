import React, { useEffect } from 'react';
import useGetTasks from '../api/useGetTasks';

interface Props {
  listId?: string;
}

const Tasks = ({ listId }: Props) => {
  const [getTasks, { data, loading }] = useGetTasks();

  useEffect(() => {
    if (listId) {
      getTasks(listId);
    }
  }, [listId]);

  if (loading) return <div>Loading</div>;

  if (!data || !data.length) return <div>No tasks</div>;

  return (
    <table>
      <tbody>
        {data.map(task => (
          <tr key={task.id}>
            <td className="list-item">{task.name}</td>
            <td className="list-item">{task.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tasks;
