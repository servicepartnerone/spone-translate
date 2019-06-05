const { Query } = require('./Query');
const { User } = require('./User');
const { Project } = require('./Project');
// const { Language } = require('./Language');
const { auth } = require('./Mutation/auth');
const { user } = require('./Mutation/user');
const { project } = require('./Mutation/project');
const { language } = require('./Mutation/language');

module.exports = {
  Query,
  User,
  Project,
  Mutation: {
    ...auth,
    ...user,
    ...project,
    ...language
  }
};
