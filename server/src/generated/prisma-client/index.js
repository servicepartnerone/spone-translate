"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Project",
    embedded: false
  },
  {
    name: "Language",
    embedded: false
  },
  {
    name: "Namespace",
    embedded: false
  },
  {
    name: "Translation",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/public-flaxprince-27/spone-translate/dev`
});
exports.prisma = new exports.Prisma();
