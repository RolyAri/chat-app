const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const jwt = require("jsonwebtoken");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function main() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      const {authorization} = req.headers;
      if (authorization) {
        const {userId} = jwt.verify(authorization, process.env.JWT_SECRET);
        return {userId}
      }
    },
  });
  console.log(`🚀  Server ready at: ${url}`);
}


main();
