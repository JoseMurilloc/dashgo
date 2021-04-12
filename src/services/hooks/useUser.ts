import { useQuery } from "react-query"
import { api } from ".."

type User = {
  id: string;
  name: string;
  email: string;
  createAt: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[];
}

export async function getUsers (page: number): Promise<GetUsersResponse> {
  const {data, headers} = await api(`/users`, { 
    params: {
      page,
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => ({
    ...user,
    createAt: new Date(user.createAt).toLocaleDateString('pt-br', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return {
    users,
    totalCount,
  }
}

export function useUser(page: number) {
  return useQuery(
    ['users', page],
    () => getUsers(page),
    { staleTime: 1000 * 60 * 10 } // 10 minutes
  )
}