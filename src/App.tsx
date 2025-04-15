import PostList from './components/PostList'
import styles from './App.module.css'
import { useState } from 'react'
import NewPost from './components/NewPost'

export type Post = {
  name: string
  body: string
}

export default function App() {
  const [posts, setPosts] = useState<Post[]>([
    { name: 'Wilder', body: 'Next is great!' },
  ])

  const handleNewPost = (post: Post) => {
    setPosts((prevPosts) => [...prevPosts, post])
  }

  return (
    <main className={styles.root}>
      <NewPost onNewPost={handleNewPost} />
      <PostList posts={posts} />
    </main>
  )
}
