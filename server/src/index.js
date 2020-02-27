require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ListAPI = require('./datasources/list');
const TaskAPI = require('./datasources/task');

const dataSources = () => ({
  listAPI: new ListAPI(),
  taskAPI: new TaskAPI(),
});

const context = async () => {
  return {};
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  introspection: true,
  playground: true,
  engine: {
    schemaTag: 'current',
    generateClientInfo: ({ request }) => {
      if (!request || !request.http) return {};
      const clientName = request.http.headers.get('client-name');
      const clientVersion = request.http.headers.get('client-version');
      return { clientName, clientVersion };
    },
  },
});

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`🚀 app running at ${url}`)
  });
