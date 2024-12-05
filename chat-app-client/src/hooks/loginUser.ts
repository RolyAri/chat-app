import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation LoginUser($userLogin: UserLoginInput!) {
    loginUser(userLogin: $userLogin) {
      token
    }
  }
`
const useLoginUser = () => {
    return useMutation(LOGIN_USER,{
        onCompleted(data){
            localStorage.setItem("jwt",data.loginUser.token)
        }
    })
}

export default useLoginUser