import React from 'react';
import useGetLists from '../api/useGetLists';

interface Props {
  onSelect(listId: string): void;
}

const Lists = ({ onSelect }: Props) => {
  const { data, loading } = useGetLists();

  if (loading) return <div>loading</div>;

  if (!data || !data.length) return <div>No lists available</div>;

  return (
    <div>
      {data.map(item => (
        <div
          key={item.id}
          className="selectable list-item"
          onClick={() => onSelect(item.id)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Lists;
