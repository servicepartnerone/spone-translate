const language = {
  async createLanguage(parent, { name, project }, context) {
    return context.prisma.createLanguage({
      name,
      project: {
        connect: {
          id: project
        }
      }
    });
  }
};

module.exports = { language };
