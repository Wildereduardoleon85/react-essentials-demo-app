import { useState } from 'react'
import Card from '../Card'
import styles from './NewPost.module.css'
import { LuUser, LuMessageSquareMore } from 'react-icons/lu'

type InputValues = {
  name: string
  body: string
}

export default function NewPost() {
  const [values, setValues] = useState<InputValues>({ name: '', body: '' })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className={styles.root}>
      <h2>New Post</h2>
      <form>
        <div className={styles['form-container']}>
          <div className={styles['form-group']}>
            {!values.body && <label htmlFor="body">Text *</label>}
            <textarea
              name="body"
              onChange={handleInputChange}
              value={values.body}
            ></textarea>
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
        <button className="button">Create</button>
      </form>
    </Card>
  )
}
