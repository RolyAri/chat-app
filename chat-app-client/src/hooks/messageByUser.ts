import { gql} from "@apollo/client"

export const GET_MESSAGES_BY_USER = gql`
query MessageByUser($receiverId: Int!) {
  messageByUser(receiverId: $receiverId) {
    id
    text
    receiverId
    senderId
    createdAt
  }
}
`

