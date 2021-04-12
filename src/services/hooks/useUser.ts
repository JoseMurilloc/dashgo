import { useQuery } from "react-query"
import { api } from ".."

type User = {
  id: string;
  name: string;
  email: string;
  createAt: string;
}

export async function getUsers (): Promise<User[]> {
  const {data} = await api(`/users`)

  const users = data.users.map(user => ({
    ...user,
    createAt: new Date(user.createAt).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return users
}

export function useUser() {
  return useQuery(
    'users',
    getUsers,
    { staleTime: 1000 * 5 } // 5 seconds
  )
}