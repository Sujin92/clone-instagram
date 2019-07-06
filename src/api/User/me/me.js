import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    // 이중밑줄은 부모의 arguments, 밑줄 한개는 변수도 될 수 있음
    me: async (_,__, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts
      }
    }
  }
}