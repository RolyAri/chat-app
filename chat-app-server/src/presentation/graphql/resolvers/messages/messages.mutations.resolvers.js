const { PubSub } = require("graphql-subscriptions");
const messageController = require("../../../../controllers/messages");

const pubSub = new PubSub()

const MESSAGE_ADDED = "MESSAGE_ADDED";

const Mutation = {
  createMessage: async (_, { receiverId, text }, { userId }) => {
    const message = messageController.createMessage(receiverId, text, userId);
    pubSub.publish(MESSAGE_ADDED, { messageAdded: message });
    return message;
  },
};

exports.Mutation = Mutation;
