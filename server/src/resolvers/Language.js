const Language = {
  namespaces({ id }, args, context) {
    return context.prisma.language({ id }).namespaces();
  }
};

module.exports = {
  Language
};
