// resolvers/pubsub.js
const { PubSub } = require('graphql-subscriptions');

const pubSub = new PubSub();

module.exports = { pubSub };