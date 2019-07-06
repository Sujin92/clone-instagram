// deep query, relationship 을 하고싶다면 $fragment 가 아닌 다른 방법으로 해야함
export const COMMENT_FRAGMENT = `
  fragment CommentParts on Comment{
    id
    text
    user {
      username
    }
  }
`