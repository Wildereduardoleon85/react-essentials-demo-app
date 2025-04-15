import NewPost from '../NewPost'
import Post from '../Post'
import styles from './PostList.module.css'

export default function PostList() {
  return (
    <>
      <NewPost />
      <ul className={styles.root}>
        <Post author="Wilder" body="React is awesome!" />
      </ul>
    </>
  )
}
