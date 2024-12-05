const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const schema = require('../graphql/schema')
const jwt = require("jsonwebtoken");


const server = new ApolloServer({
  schema
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
