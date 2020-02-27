import gql from 'graphql-tag';

export default gql`
  query getTasks($listId: UUID!) {
    getTasks(listId: $listId) {
      id
      name
      priority
    }
  }
`;
