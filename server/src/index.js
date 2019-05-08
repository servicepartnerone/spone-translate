const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    users: (parent, args, context) => {
      return context.prisma.users();
    },
    user: (parent, { id }, context) => {
      return context.prisma.user({ id });
    },
    projects: (parent, args, context) => {
      return context.prisma.projects();
    },
    project: (parent, { id }, context) => {
      return context.prisma.project({ id });
    }
  },
  Mutation: {
    createUser(parent, { email, first_name }, context) {
      return context.prisma.createUser({ email, first_name });
    },
    createProject(parent, { project_name }, context) {
      return context.prisma.createProject({ project_name });
    },
    createLanguage(parent, { language }, context) {
      return context.prisma.createProject({ language });
    },
    createNamespace(parent, { namespace_name }, context) {
      return context.prisma.createNamespace({ namespace_name });
    },
    createTranslation(parent, { key, value }, context) {
      return context.prisma.createTranslation({ key, value });
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma
  }
});

server.start(() => console.log('Server is running on http://localhost:4000'));
