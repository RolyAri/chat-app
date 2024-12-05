const typeDefs = `
    type Query {
        users: [User]
        messageByUser(receiverId: Int!): [Message]
    }
    input UserInput{
        firstName:String!
        lastName: String
        email: String
        password: String
    }
    input UserLoginInput{
        email: String!
        password: String!
    }
    type Mutation{
        signupUser(userNew: UserInput!): User
        loginUser(userLogin : UserLoginInput!): Token
        createMessage(receiverId: Int!, text: String!): Message
    }

    type User{
        id:ID!
        firstName:String!
        lastName:String!
        email:String!
    }
    
    type Token {
        token: String!
    }

    scalar Date

    type Message {
        id: ID!
        text: String!
        receiverId: Int!
        senderId: Int!
        createdAt: Date!
    }
    
    type Subscription{
        messageAdded: Message
    }
`;
module.exports = typeDefs;