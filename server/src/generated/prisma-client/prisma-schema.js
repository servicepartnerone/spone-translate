module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateLanguage {
  count: Int!
}

type AggregateNamespace {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type AggregateTranslation {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Language {
  id: ID!
  name: String!
  project: Project!
}

type LanguageConnection {
  pageInfo: PageInfo!
  edges: [LanguageEdge]!
  aggregate: AggregateLanguage!
}

input LanguageCreateInput {
  id: ID
  name: String!
  project: ProjectCreateOneWithoutLanguagesInput!
}

input LanguageCreateManyWithoutProjectInput {
  create: [LanguageCreateWithoutProjectInput!]
  connect: [LanguageWhereUniqueInput!]
}

input LanguageCreateWithoutProjectInput {
  id: ID
  name: String!
}

type LanguageEdge {
  node: Language!
  cursor: String!
}

enum LanguageOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type LanguagePreviousValues {
  id: ID!
  name: String!
}

input LanguageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [LanguageScalarWhereInput!]
  OR: [LanguageScalarWhereInput!]
  NOT: [LanguageScalarWhereInput!]
}

type LanguageSubscriptionPayload {
  mutation: MutationType!
  node: Language
  updatedFields: [String!]
  previousValues: LanguagePreviousValues
}

input LanguageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LanguageWhereInput
  AND: [LanguageSubscriptionWhereInput!]
  OR: [LanguageSubscriptionWhereInput!]
  NOT: [LanguageSubscriptionWhereInput!]
}

input LanguageUpdateInput {
  name: String
  project: ProjectUpdateOneRequiredWithoutLanguagesInput
}

input LanguageUpdateManyDataInput {
  name: String
}

input LanguageUpdateManyMutationInput {
  name: String
}

input LanguageUpdateManyWithoutProjectInput {
  create: [LanguageCreateWithoutProjectInput!]
  delete: [LanguageWhereUniqueInput!]
  connect: [LanguageWhereUniqueInput!]
  set: [LanguageWhereUniqueInput!]
  disconnect: [LanguageWhereUniqueInput!]
  update: [LanguageUpdateWithWhereUniqueWithoutProjectInput!]
  upsert: [LanguageUpsertWithWhereUniqueWithoutProjectInput!]
  deleteMany: [LanguageScalarWhereInput!]
  updateMany: [LanguageUpdateManyWithWhereNestedInput!]
}

input LanguageUpdateManyWithWhereNestedInput {
  where: LanguageScalarWhereInput!
  data: LanguageUpdateManyDataInput!
}

input LanguageUpdateWithoutProjectDataInput {
  name: String
}

input LanguageUpdateWithWhereUniqueWithoutProjectInput {
  where: LanguageWhereUniqueInput!
  data: LanguageUpdateWithoutProjectDataInput!
}

input LanguageUpsertWithWhereUniqueWithoutProjectInput {
  where: LanguageWhereUniqueInput!
  update: LanguageUpdateWithoutProjectDataInput!
  create: LanguageCreateWithoutProjectInput!
}

input LanguageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  project: ProjectWhereInput
  AND: [LanguageWhereInput!]
  OR: [LanguageWhereInput!]
  NOT: [LanguageWhereInput!]
}

input LanguageWhereUniqueInput {
  id: ID
  name: String
}

scalar Long

type Mutation {
  createLanguage(data: LanguageCreateInput!): Language!
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  updateManyLanguages(data: LanguageUpdateManyMutationInput!, where: LanguageWhereInput): BatchPayload!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  deleteManyLanguages(where: LanguageWhereInput): BatchPayload!
  createNamespace(data: NamespaceCreateInput!): Namespace!
  updateNamespace(data: NamespaceUpdateInput!, where: NamespaceWhereUniqueInput!): Namespace
  updateManyNamespaces(data: NamespaceUpdateManyMutationInput!, where: NamespaceWhereInput): BatchPayload!
  upsertNamespace(where: NamespaceWhereUniqueInput!, create: NamespaceCreateInput!, update: NamespaceUpdateInput!): Namespace!
  deleteNamespace(where: NamespaceWhereUniqueInput!): Namespace
  deleteManyNamespaces(where: NamespaceWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createTranslation(data: TranslationCreateInput!): Translation!
  updateTranslation(data: TranslationUpdateInput!, where: TranslationWhereUniqueInput!): Translation
  updateManyTranslations(data: TranslationUpdateManyMutationInput!, where: TranslationWhereInput): BatchPayload!
  upsertTranslation(where: TranslationWhereUniqueInput!, create: TranslationCreateInput!, update: TranslationUpdateInput!): Translation!
  deleteTranslation(where: TranslationWhereUniqueInput!): Translation
  deleteManyTranslations(where: TranslationWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type Namespace {
  id: ID!
  name: String!
  translations(where: TranslationWhereInput, orderBy: TranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Translation!]
}

type NamespaceConnection {
  pageInfo: PageInfo!
  edges: [NamespaceEdge]!
  aggregate: AggregateNamespace!
}

input NamespaceCreateInput {
  id: ID
  name: String!
  translations: TranslationCreateManyWithoutOwnerInput
}

input NamespaceCreateOneWithoutTranslationsInput {
  create: NamespaceCreateWithoutTranslationsInput
  connect: NamespaceWhereUniqueInput
}

input NamespaceCreateWithoutTranslationsInput {
  id: ID
  name: String!
}

type NamespaceEdge {
  node: Namespace!
  cursor: String!
}

enum NamespaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type NamespacePreviousValues {
  id: ID!
  name: String!
}

type NamespaceSubscriptionPayload {
  mutation: MutationType!
  node: Namespace
  updatedFields: [String!]
  previousValues: NamespacePreviousValues
}

input NamespaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NamespaceWhereInput
  AND: [NamespaceSubscriptionWhereInput!]
  OR: [NamespaceSubscriptionWhereInput!]
  NOT: [NamespaceSubscriptionWhereInput!]
}

input NamespaceUpdateInput {
  name: String
  translations: TranslationUpdateManyWithoutOwnerInput
}

input NamespaceUpdateManyMutationInput {
  name: String
}

input NamespaceUpdateOneRequiredWithoutTranslationsInput {
  create: NamespaceCreateWithoutTranslationsInput
  update: NamespaceUpdateWithoutTranslationsDataInput
  upsert: NamespaceUpsertWithoutTranslationsInput
  connect: NamespaceWhereUniqueInput
}

input NamespaceUpdateWithoutTranslationsDataInput {
  name: String
}

input NamespaceUpsertWithoutTranslationsInput {
  update: NamespaceUpdateWithoutTranslationsDataInput!
  create: NamespaceCreateWithoutTranslationsInput!
}

input NamespaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  translations_every: TranslationWhereInput
  translations_some: TranslationWhereInput
  translations_none: TranslationWhereInput
  AND: [NamespaceWhereInput!]
  OR: [NamespaceWhereInput!]
  NOT: [NamespaceWhereInput!]
}

input NamespaceWhereUniqueInput {
  id: ID
  name: String
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: ID!
  name: String!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language!]
  user: User!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: ID
  name: String!
  languages: LanguageCreateManyWithoutProjectInput
  user: UserCreateOneWithoutProjectsInput!
}

input ProjectCreateManyWithoutUserInput {
  create: [ProjectCreateWithoutUserInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutLanguagesInput {
  create: ProjectCreateWithoutLanguagesInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutLanguagesInput {
  id: ID
  name: String!
  user: UserCreateOneWithoutProjectsInput!
}

input ProjectCreateWithoutUserInput {
  id: ID
  name: String!
  languages: LanguageCreateManyWithoutProjectInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  languages: LanguageUpdateManyWithoutProjectInput
  user: UserUpdateOneRequiredWithoutProjectsInput
}

input ProjectUpdateManyDataInput {
  name: String
}

input ProjectUpdateManyMutationInput {
  name: String
}

input ProjectUpdateManyWithoutUserInput {
  create: [ProjectCreateWithoutUserInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneRequiredWithoutLanguagesInput {
  create: ProjectCreateWithoutLanguagesInput
  update: ProjectUpdateWithoutLanguagesDataInput
  upsert: ProjectUpsertWithoutLanguagesInput
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutLanguagesDataInput {
  name: String
  user: UserUpdateOneRequiredWithoutProjectsInput
}

input ProjectUpdateWithoutUserDataInput {
  name: String
  languages: LanguageUpdateManyWithoutProjectInput
}

input ProjectUpdateWithWhereUniqueWithoutUserInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutUserDataInput!
}

input ProjectUpsertWithoutLanguagesInput {
  update: ProjectUpdateWithoutLanguagesDataInput!
  create: ProjectCreateWithoutLanguagesInput!
}

input ProjectUpsertWithWhereUniqueWithoutUserInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutUserDataInput!
  create: ProjectCreateWithoutUserInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  languages_every: LanguageWhereInput
  languages_some: LanguageWhereInput
  languages_none: LanguageWhereInput
  user: UserWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
  name: String
}

type Query {
  language(where: LanguageWhereUniqueInput!): Language
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  languagesConnection(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LanguageConnection!
  namespace(where: NamespaceWhereUniqueInput!): Namespace
  namespaces(where: NamespaceWhereInput, orderBy: NamespaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Namespace]!
  namespacesConnection(where: NamespaceWhereInput, orderBy: NamespaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NamespaceConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  translation(where: TranslationWhereUniqueInput!): Translation
  translations(where: TranslationWhereInput, orderBy: TranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Translation]!
  translationsConnection(where: TranslationWhereInput, orderBy: TranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TranslationConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Status {
  ACTIVE
  DRAFT
  UPDATED
  REMOVED
}

type Subscription {
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
  namespace(where: NamespaceSubscriptionWhereInput): NamespaceSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  translation(where: TranslationSubscriptionWhereInput): TranslationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Translation {
  id: ID!
  key: String!
  value: String!
  owner: Namespace!
  status: Status!
}

type TranslationConnection {
  pageInfo: PageInfo!
  edges: [TranslationEdge]!
  aggregate: AggregateTranslation!
}

input TranslationCreateInput {
  id: ID
  key: String!
  value: String!
  owner: NamespaceCreateOneWithoutTranslationsInput!
  status: Status
}

input TranslationCreateManyWithoutOwnerInput {
  create: [TranslationCreateWithoutOwnerInput!]
  connect: [TranslationWhereUniqueInput!]
}

input TranslationCreateWithoutOwnerInput {
  id: ID
  key: String!
  value: String!
  status: Status
}

type TranslationEdge {
  node: Translation!
  cursor: String!
}

enum TranslationOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  value_ASC
  value_DESC
  status_ASC
  status_DESC
}

type TranslationPreviousValues {
  id: ID!
  key: String!
  value: String!
  status: Status!
}

input TranslationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  AND: [TranslationScalarWhereInput!]
  OR: [TranslationScalarWhereInput!]
  NOT: [TranslationScalarWhereInput!]
}

type TranslationSubscriptionPayload {
  mutation: MutationType!
  node: Translation
  updatedFields: [String!]
  previousValues: TranslationPreviousValues
}

input TranslationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TranslationWhereInput
  AND: [TranslationSubscriptionWhereInput!]
  OR: [TranslationSubscriptionWhereInput!]
  NOT: [TranslationSubscriptionWhereInput!]
}

input TranslationUpdateInput {
  key: String
  value: String
  owner: NamespaceUpdateOneRequiredWithoutTranslationsInput
  status: Status
}

input TranslationUpdateManyDataInput {
  key: String
  value: String
  status: Status
}

input TranslationUpdateManyMutationInput {
  key: String
  value: String
  status: Status
}

input TranslationUpdateManyWithoutOwnerInput {
  create: [TranslationCreateWithoutOwnerInput!]
  delete: [TranslationWhereUniqueInput!]
  connect: [TranslationWhereUniqueInput!]
  set: [TranslationWhereUniqueInput!]
  disconnect: [TranslationWhereUniqueInput!]
  update: [TranslationUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [TranslationUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [TranslationScalarWhereInput!]
  updateMany: [TranslationUpdateManyWithWhereNestedInput!]
}

input TranslationUpdateManyWithWhereNestedInput {
  where: TranslationScalarWhereInput!
  data: TranslationUpdateManyDataInput!
}

input TranslationUpdateWithoutOwnerDataInput {
  key: String
  value: String
  status: Status
}

input TranslationUpdateWithWhereUniqueWithoutOwnerInput {
  where: TranslationWhereUniqueInput!
  data: TranslationUpdateWithoutOwnerDataInput!
}

input TranslationUpsertWithWhereUniqueWithoutOwnerInput {
  where: TranslationWhereUniqueInput!
  update: TranslationUpdateWithoutOwnerDataInput!
  create: TranslationCreateWithoutOwnerInput!
}

input TranslationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  value: String
  value_not: String
  value_in: [String!]
  value_not_in: [String!]
  value_lt: String
  value_lte: String
  value_gt: String
  value_gte: String
  value_contains: String
  value_not_contains: String
  value_starts_with: String
  value_not_starts_with: String
  value_ends_with: String
  value_not_ends_with: String
  owner: NamespaceWhereInput
  status: Status
  status_not: Status
  status_in: [Status!]
  status_not_in: [Status!]
  AND: [TranslationWhereInput!]
  OR: [TranslationWhereInput!]
  NOT: [TranslationWhereInput!]
}

input TranslationWhereUniqueInput {
  id: ID
  key: String
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  name: String
  projects: ProjectCreateManyWithoutUserInput
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectsInput {
  id: ID
  email: String!
  password: String!
  name: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  projects: ProjectUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  update: UserUpdateWithoutProjectsDataInput
  upsert: UserUpsertWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutProjectsDataInput {
  email: String
  password: String
  name: String
}

input UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    