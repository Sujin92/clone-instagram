import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    userById: async (_, args) => {
      const { id } = args;
      return await prisma.user({ id }).$fragment(); // $fragment는 prisma 에서 무한한 코드를 만들어서 서버가 먹통될 수 있는 케이스를 막기위함
    }
  }
}