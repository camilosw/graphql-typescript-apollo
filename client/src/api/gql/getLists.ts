import gql from 'graphql-tag';

export default gql`
  query getLists {
    getLists {
      id
      name
    }
  }
`;
