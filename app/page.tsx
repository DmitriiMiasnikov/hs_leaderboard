// Import your Client Component
import { getUsers } from 'src/features/users';
import HomePage from 'src/pages/home';
 
export default async function Page() {
  // Fetch data directly in a Server Component
  const users = await getUsers()
  // Forward fetched data to your Client Component
  return <HomePage users={users} />
}