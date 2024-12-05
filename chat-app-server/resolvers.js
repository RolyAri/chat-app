
const userContoller = require("./src/controllers/users");
const messageController = require("./src/controllers/messages");

const { PubSub } = require("graphql-subscriptions");

const pubSub = new PubSub();

const MESSAGE_ADDED = "MESSAGE_ADDED";

const resolvers = {
  Query: {
    users: async (_, args, { userId }) => {
      const users = userContoller.getAllUsers(userId);
      return users;
    },
    messageByUser: async (_, { receiverId }, { userId }) => {
      const messages = messageController.getMessageByUser(userId, receiverId);
      return messages;
    },
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
      const newUser = userContoller.registerUser(userNew);
      return newUser;
    },
    loginUser: async (_, { userLogin }) => {
      const token = userContoller.loginUser(userLogin);
      return token;
    },
    createMessage: async (_, { receiverId, text }, { userId }) => {
      const message = messageController.createMessage(receiverId, text, userId);
      pubSub.publish(MESSAGE_ADDED, { messageAdded: message });
      return message;
    },
  },
  Subscription: {
    messageAdded: {
      subscribe: () => pubSub.asyncIterableIterator(MESSAGE_ADDED),
    },
  },
};

module.exports = resolvers;
