import { useMutation } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import {
  Mutation,
  MutationCreateTaskArgs,
  TaskCreateInput,
} from '../graphqlTypes';
import CREATE_TASK from './gql/createTask';

const useCreateTask = () => {
  const [mutation, { data, ...rest }] = useMutation<
    Pick<Mutation, 'createTask'>,
    MutationCreateTaskArgs
  >(CREATE_TASK);

  const createTask = (task: TaskCreateInput) =>
    mutation({ variables: { task } });

  return [
    createTask,
    {
      data: get('createTask', data),
      ...rest,
    },
  ] as const;
};

export default useCreateTask;
