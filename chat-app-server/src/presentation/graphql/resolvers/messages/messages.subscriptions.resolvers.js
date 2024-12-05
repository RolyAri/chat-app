const { PubSub } = require("graphql-subscriptions");

const pubSub = new PubSub()

const MESSAGE_ADDED = "MESSAGE_ADDED";

const Subscription = {
  messageAdded: {
    subscribe: () => pubSub.asyncIterableIterator(MESSAGE_ADDED),
  },
};

module.exports = Subscription