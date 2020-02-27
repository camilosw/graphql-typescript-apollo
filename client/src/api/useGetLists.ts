import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash/fp';
import { Query } from '../graphqlTypes';
import GET_LISTS from './gql/getLists';

const useGetLists = () => {
  const { data, ...rest } = useQuery<Pick<Query, 'getLists'>, null>(GET_LISTS, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    data: get('getLists', data),
    ...rest,
  };
};

export default useGetLists;
