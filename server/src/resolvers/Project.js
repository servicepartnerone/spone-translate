const { languageFragment } = require('../fragments/languageFragment');

const Project = {
  languages({ id }, args, context) {
    return context.prisma
      .project({ id })
      .languages()
      .$fragment(languageFragment);
  }
};

module.exports = {
  Project
};
