// deep query, relationship 을 하고싶다면 $fragment 가 아닌 다른 방법으로 해야함
export const USER_FRAGMENT = `
    id
    username
    avatar
`

export const COMMENT_FRAGMENT = `
    id
    text
    user {
      ${USER_FRAGMENT}
    }
`

export const FILE_FRAGMENT = `
    id
    url
`

export const MESSAGE_FRAGMENT = `
  id
  text
  to {
    ${USER_FRAGMENT}
  }
  from {
    ${USER_FRAGMENT}
  }
`

export const ROOM_FRAGMENT = `
   fragment RoomParts on Room {
     id
     participants {
       ${USER_FRAGMENT}
     }
     messages {
       ${MESSAGE_FRAGMENT}
     }
   }
`