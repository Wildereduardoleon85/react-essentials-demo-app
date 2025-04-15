import styles from './Post.module.css'

type PostProps = {
  body: string
  author: string
}

export default function Post({ author, body }: Readonly<PostProps>) {
  return (
    <li className={styles.root}>
      <h4>{author}</h4>
      <p>{body}</p>
    </li>
  )
}
