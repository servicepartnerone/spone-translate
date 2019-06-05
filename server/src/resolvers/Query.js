const { getUserId } = require('../utils');

const Query = {
  users: async (parent, args, context) => {
    const fragment = `
        fragment UserWithPosts on User {
        id
        email
        }
    `;

    const usersList = await context.prisma.users().$fragment(fragment);
    return usersList;
  },
  user: (parent, { id }, context) => {
    return context.prisma.user({ id });
  },
  userSettings: (parent, { id }, context) => {
    return context.prisma.user({ id });
  },
  projects: (parent, args, context) => {
    const id = getUserId(context);
    const where = {
      user: {
        id
      }
    };

    return context.prisma.projects({ where });
  },
  project: (parent, { id }, context) => {
    return context.prisma.project({ id });
  },
  languages: (parent, args, context) => {
    const where = {
      project: {
        id: 'cjw220kf1quim0b0528osjq8l'
      }
    };

    return context.prisma.languages({ where });
  },
  language: (parent, { id }, context) => {
    // return [];
    return context.prisma.language({ id });
  }
};

module.exports = { Query };
