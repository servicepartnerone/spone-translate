const user = {
  async deleteUser(parent, { id }, context) {
    const isUserExist = await context.prisma.$exists.user({
      id
    });
    if (!isUserExist) {
      throw new Error('User not found');
    }

    return context.prisma.deleteUser({ id });
  }
};

module.exports = { user };
