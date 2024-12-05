const { ApolloServer } = require("@apollo/server");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const { createServer } = require('http');
const express = require('express')
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const { ApolloServerPluginDrainHttpServer } = require("@apollo/server/plugin/drainHttpServer");
const { expressMiddleware } = require("@apollo/server/express4");
const schema = require('./schema');

const app = express();

const context = async ({ req }) => {
    const { authorization } = req.headers;
    if (authorization) {
      const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);
      return { userId };
    }
  }

const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});
 

const serverCleanup = useServer({ schema, context: async ({ extra }) => { 
    const authorization = extra.request.headers.authorization; 

    if (authorization) {
      const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);
      return { userId };
    }
  }
}, wsServer);

const apolloServer = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

const main = async () => {
    await apolloServer.start();
    app.use(
        '/graphql',
        cors({ origin: ['http://localhost:5173'] }),
        express.json(),
        expressMiddleware(apolloServer, {
          context: context,
        })
      );
      const PORT = 4000;
      httpServer.listen(PORT, () => {
        console.log(`Server is   
     running at http://localhost:4000/graphql`);
  });
}
 
main()

