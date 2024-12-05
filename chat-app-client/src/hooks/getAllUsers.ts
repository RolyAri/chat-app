import { gql, useQuery } from "@apollo/client"

const GET_ALL_USERS = gql`
query getAllUsers {
  users {
    id
    firstName
    lastName
    email
  }
}

`

const useGetAllUsers = () => {
  const getUsersQuery = useQuery(GET_ALL_USERS)
  return getUsersQuery
}

export default useGetAllUsers