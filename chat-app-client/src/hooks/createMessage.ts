import { gql } from "@apollo/client";

export const CREATE_MESSAGE = gql`
mutation CreateMessage($receiverId: Int!, $text: String!) {
  createMessage(receiverId: $receiverId, text: $text) {
    id
    text
    receiverId
    senderId
    createdAt
  }
}
`


  

/* const useCreateMessage = () => {
    return useMutation(CREATE_MESSAGE);
  };

export default useCreateMessage */