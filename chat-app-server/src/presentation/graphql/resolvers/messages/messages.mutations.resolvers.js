const { pubSub } = require('../pubsub');
const messageController = require("../../../../controllers/messages");

const MESSAGE_ADDED = "MESSAGE_ADDED";

const Mutation = {
  createMessage: async (_, { receiverId, text }, { userId }) => {
    const message = messageController.createMessage(receiverId, text, userId);
    pubSub.publish(MESSAGE_ADDED, { messageAdded: message });
    return message;
  },
};

const Subscription = {
  messageAdded: {
    subscribe: () => pubSub.asyncIterableIterator(MESSAGE_ADDED),
  },
};

exports.Mutation = Mutation;
exports.Subscription = Subscription
