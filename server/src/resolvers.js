module.exports = {
  Query: {
    getLists: async (_, __, { dataSources }) =>
      dataSources.listAPI.getLists(),
    getTasks: async (_, { listId }, { dataSources }) =>
      dataSources.taskAPI.getTasks(listId),
  },
  Mutation: {
    createTask: async (_, { task }, { dataSources }) => {
      return {
        id: '3e495d9b-ff30-421d-b58e-f5439d799234',
        ...task
      }
    },
  },
};
