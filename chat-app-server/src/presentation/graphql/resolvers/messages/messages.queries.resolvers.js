const messageController = require("../../../../controllers/messages");

const Query = {
  messageByUser: async (_, { receiverId }, { userId }) => {
    const messages = messageController.getMessageByUser(userId, receiverId);
    return messages;
  },
};

exports.Query = Query;
