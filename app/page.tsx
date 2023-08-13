// Import your Client Component
import HomePage from 'src/pages/home';
 
const getUsers = async () => {
  // const res = await fetch('https://...')
  // const posts = await res.json()
  const users = [
    { name: 'user1', rank: 1, rating: 100 },
    { name: 'user2', rank: 2, rating: 200 },
    { name: 'user3', rank: 3, rating: 300 },
    { name: 'user4', rank: 4, rating: 400 },
  ]
  return users
}
 
export default async function Page() {
  // Fetch data directly in a Server Component
  const users = await getUsers()
  // Forward fetched data to your Client Component
  return <HomePage users={users} />
}