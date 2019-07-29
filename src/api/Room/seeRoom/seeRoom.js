import { ROOM_FRAGMENT } from "../../../fragment";

export default {
  Query: {
    seeRoom: async(_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      const canSee = await prisma.$exists.room({
        participants_some: {
          id: user.id
        }
      });
      if (canSee) {
        const room = await prisma.room({ id }).$fragment(ROOM_FRAGMENT);
        return room;
      } else {
        throw Error("You can't see this")
      }
    }
  }
}