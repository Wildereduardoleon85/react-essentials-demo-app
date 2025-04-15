import { useState } from 'react'
import styles from './NewPost.module.css'
import { LuUser, LuMessageSquareMore } from 'react-icons/lu'
import { Button, Card } from '../Ui'
import { type Post } from '../../App'

type NewPostProps = {
  onNewPost: (post: Post) => void
}

const initialState = { name: '', body: '' }

export default function NewPost({ onNewPost }: Readonly<NewPostProps>) {
  const [values, setValues] = useState<Post>(initialState)

  const isFormValid = Object.values(values).every((value) => !!value)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isFormValid) {
      onNewPost(values)
      setValues(initialState)
    }
  }

  return (
    <Card className={styles.root}>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-container']}>
          <div className={styles['form-group']}>
            {!values.body && <label htmlFor="body">Text *</label>}
            <textarea
              name="body"
              onChange={handleInputChange}
              value={values.body}
            />
            <LuMessageSquareMore />
          </div>
        </div>
        <div className={styles['form-container']}>
          <div className={styles['form-group']}>
            {!values.name && <label htmlFor="name">Your Name *</label>}
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              value={values.name}
            />
            <LuUser />
          </div>
        </div>
        <Button type="submit" disabled={!isFormValid}>
          Create
        </Button>
      </form>
    </Card>
  )
}
