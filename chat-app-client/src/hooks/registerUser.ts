import { gql, useMutation } from "@apollo/client";

const REGISTER_USER = gql`
mutation SignupUser($userNew: UserInput!) {
  signupUser(userNew: $userNew) {
    id
    firstName
    lastName
    email
  }
}
`


  

const useRegisterUser = () => {
    return useMutation(REGISTER_USER);
  };

export default useRegisterUser