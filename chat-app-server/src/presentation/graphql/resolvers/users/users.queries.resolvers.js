const userContoller = require("../../../../controllers/users");

const Query = {
  users: async (_, args, { userId }) => {
    const users = userContoller.getAllUsers(userId);
    return users;
  },
};

exports.Query = Query;
