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

/* const useGetMessagesByUser = (variables: {receiverId: any}, setMessage: any) => {
  const getMessagesByUser = useQuery(GET_MESSAGES_BY_USER,{
    variables: variables, onCompleted(data) {
      setMessage((prev:any) => [...prev,data.messageByUser])
    },
  })
  return getMessagesByUser
}
 */

// export default useGetMessagesByUser

