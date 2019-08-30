const language = {
  async createLanguage(parent, { name, project }, context) {
    return context.prisma.createLanguage({
      name
    });
  }
};

module.exports = { language };
