// deep query, relationship 을 하고싶다면 $fragment 가 아닌 다른 방법으로 해야함
export const COMMENT_FRAGMENT = `
  fragment CommentParts on Comment{
    id
    text
    user {
      username
    }
  }
`;

type User {
  id: ID!
  username: String!
  email: String!
  lastName: String!
  firstName: String!
  bio: String
  followers: [User!]
  following: [User!]
  posts: [Post!]
  likes: [Like!]
  comments: [Comment!]
  rooms: [Room!]!
  loginSecret: String!
}

type Post {
  id: ID!
  location: String
  caption: String
  user: User!
  files: [File!]!
  likes: [Like!]!
  comments: [Comment!]!
}

type Like {
  id: ID!
  user: User!
  post: Post!
}

type Comment {
  id: ID!
  text: String!
  user: User!
  post: Post!
}

type File {
  id: ID!
  url: String!
  post: Post!
}

type Room {
  id: ID!
  participants: [User!]!
  messages: [Message!]!
}

type Message {
  id: ID!
  text: String!
  from: User!
  to: [User!]!
  room: Room!
}