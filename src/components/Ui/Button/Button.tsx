import styles from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default function Button({ children, ...props }: Readonly<ButtonProps>) {
  return (
    <button className={styles.root} {...props}>
      {children}
    </button>
  )
}
