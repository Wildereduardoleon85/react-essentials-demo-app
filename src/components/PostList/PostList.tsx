import { type Post as PostType } from '../../App'
import Post from '../Post'
import styles from './PostList.module.css'

type PostListProps = {
  posts: PostType[]
}

export default function PostList({ posts }: Readonly<PostListProps>) {
  return (
    <ul className={styles.root}>
      {posts.map((post) => (
        <Post key={post.name} author={post.name} body={post.body} />
      ))}
    </ul>
  )
}
