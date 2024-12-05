const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const jwt = require("jsonwebtoken");

/* const users = [
    {
      id: "sdaddsada",
      firstName: "mukesh",
      lastName: "kumar",
      email: "mukesh@mukeshkumar.com",
      password: "12345"
    },
    {
      id: "wfwrwr",
      firstName: "suresh",
      lastName: "sharma",
      email: "suresh@sureshsharma.com",
      password: "12346"
    }
  ];

  const todos = [
    {
      title: "buy book",
      by: "sdaddsada"
    },
    {
      title: "write code",
      by: "sdaddsada"
    },
    {
      title: "record video",
      by: "wfwrwr"
    }
  ]
  
 */

/* const resolvers = {
    Query: {
      users: () => users, 
      user: (_, {id}, {userLoggedIn}) =>{
        if(!userLoggedIn) throw new Error("no estas logeado")
        console.log(userLoggedIn)
        return users.find(item => item.id == id)
      } 
    },
    User: {
        todos:(parent) => {
            console.log("entrando bd")
            return todos.filter(todo=>todo.by == parent.id)
        }
    },
    Mutation: {
        createUser: (_,{userNew}) => {
            const newUser = {id: crypto.randomUUID(),
                ...userNew}
            users.push(newUser)
            return newUser

        }
    }
  }; */
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
