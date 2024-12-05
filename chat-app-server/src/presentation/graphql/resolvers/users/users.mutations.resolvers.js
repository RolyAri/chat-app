const userContoller = require("../../../../controllers/users");

const Mutation = {
  signupUser: async (_, { userNew }) => {
    const newUser = userContoller.registerUser(userNew);
    return newUser;
  },
  loginUser: async (_, { userLogin }) => {
    const token = userContoller.loginUser(userLogin);
    return token;
  },
};

exports.Mutation = Mutation;
