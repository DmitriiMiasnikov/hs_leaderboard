// Import your Client Component
import { getUsers } from 'src/api';
import { HomePage } from 'src/pages/HomePage';
 
export default async function Page() {
  // Fetch data directly in a Server Component
  const users = await getUsers()
  // Forward fetched data to your Client Component
  return <HomePage users={users} />
}