import { useLazyQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import { Query, QueryGetTasksArgs, Scalars } from '../graphqlTypes';
import GET_TASKS from './gql/getTasks';

const useGetTasks = () => {
  const [query, { data, ...rest }] = useLazyQuery<
    Pick<Query, 'getTasks'>,
    QueryGetTasksArgs
  >(GET_TASKS);

  const getTasks = (listId: Scalars['UUID']): void => {
    query({ variables: { listId } });
  };

  return [
    getTasks,
    {
      data: get('getTasks', data),
      ...rest,
    },
  ] as const;
};

export default useGetTasks;
