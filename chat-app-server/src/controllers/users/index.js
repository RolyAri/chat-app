const prismaClient = require("@prisma/client");
const prisma = new prismaClient.PrismaClient();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {
  async getAllUsers(userId) {
    if (!userId) throw new Error("Debes haber iniciado sesión");
    const users = await prisma.user.findMany({
      where: {
        id: {
          not: userId,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  }

  async registerUser(newUserData) {
    const user = await prisma.user.findUnique({
      where: { email: newUserData.email },
    });
    if (user) throw new Error("El correo ya está en uso");
    const passwordHash = await bycrypt.hash(newUserData.password, 10);
    const newUser = await prisma.user.create({
      data: {
        ...newUserData,
        password: passwordHash,
      },
    });
    return newUser;
  }

  async loginUser(userLogin) {
    const user = await prisma.user.findUnique({
      where: { email: userLogin.email },
    });
    if (!user) throw new Error("El usuario no existe");
    const isSamePassword = await bycrypt.compare(
      userLogin.password,
      user.password
    );
    if (!isSamePassword) throw new Error("Correo o contraseña incorrecta");
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return { token };
  }
}

const userContoller = new UserController();

module.exports = userContoller;
