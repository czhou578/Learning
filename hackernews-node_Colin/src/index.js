const { ApolloServer } = require("apollo-server"); //graphql express server
const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const { getUserId } = require("./utils");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const { PubSub } = require("apollo-server");
const Subscription = require("./resolvers/Subscription");
const Vote = require("./resolvers/Vote");
// let links = [
//   {
//     id: "link-0",
//     url: "www.hotographql.com",
//     description: "Fullstack tutorial for GraphQL",
//   },
// ];

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
  // Query: {
  //   info: () => `This is the API of a Hackernews Clone`,
  //   // info: () => null,
  //   feed: () => links,
  //   feed: async (parent, args, context) => {
  //     return context.prisma.link.findMany();
  //   },
  // },

  // Link: {
  //   id: (parent) => parent.id,
  //   description: (parent) => parent.description,
  //   url: (parent) => parent.url,
  // },

  // Mutation: {
  //   post: (parent, args, context, info) => {
  //     let idCount = links.length;

  //     const link = {
  //       id: `link-${idCount++}`,
  //       description: args.description,
  //       url: args.url,
  //     };

  //     const newLink = context.prisma.link.create({
  //       data: {
  //         url: args.url,
  //         description: args.description,
  //       },
  //     });

  //     return newLink;
  //     links.push(link);
  //   },
  // },
};

const prisma = new PrismaClient();
const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      pubsub,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
