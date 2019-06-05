const { getUserId } = require('../../utils');

const project = {
  async createProject(parent, { name }, context) {
    const userId = getUserId(context);
    return context.prisma.createProject({
      name,
      user: { connect: { id: userId } }
    });
  }
};

module.exports = { project };
