import { Card } from '../Ui'
import styles from './Post.module.css'

type PostProps = {
  body: string
  author: string
}

export default function Post({ author, body }: Readonly<PostProps>) {
  return (
    <Card className={styles.root} component="li">
      <h4>{author}</h4>
      <p>{body}</p>
    </Card>
  )
}
