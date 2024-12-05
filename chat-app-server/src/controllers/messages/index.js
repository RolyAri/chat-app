const prismaClient = require("@prisma/client");
const prisma = new prismaClient.PrismaClient();

class MessageController {
  async getMessageByUser(userId, receiverId) {
    if (!userId) throw new Error("Debes haber iniciado sesión");
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: receiverId },
          { senderId: receiverId, receiverId: userId },
        ],
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    return messages;
  }

  async createMessage(receiverId, text, userId) {
    if (!userId) throw new Error("Debes haber iniciado sesión");
    const message = await prisma.message.create({
      data: {
        text,
        receiverId,
        senderId: userId,
      },
    });
    return message
  }
}

const messageController = new MessageController();

module.exports = messageController;
