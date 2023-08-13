// Import your Client Component
import HomePage from 'src/pages/home';
 
const getPosts = async () => {
  // const res = await fetch('https://...')
  // const posts = await res.json()
  const posts = [
    { id: '1', name: 'post1' },
    { id: '2', name: 'post2' }
  ]
  return posts
}
 
export default async function Page() {
  // Fetch data directly in a Server Component
  const posts = await getPosts()
  // Forward fetched data to your Client Component
  return <HomePage posts={posts} />
}