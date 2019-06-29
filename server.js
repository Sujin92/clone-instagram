// nodemon은 파일을 저장할 때 바로 반영되게 해줌. 서버를 껐다켰다 할 필요 없음.
require('dotenv').config()
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
const PORT = process.env.PORT || 4000;
const typeDefs = `
  type Query{
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "HI"
  }
}
const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: PORT}, () => console.log(`server start http://localhost:${PORT}`));