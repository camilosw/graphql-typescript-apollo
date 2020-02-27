import gql from 'graphql-tag';

export default gql`
  mutation createTask($task: TaskCreateInput!) {
    createTask(task: $task) {
      id
    }
  }
`;
