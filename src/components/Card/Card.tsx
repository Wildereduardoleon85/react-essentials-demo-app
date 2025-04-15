import styles from './Card.module.css'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export default function Card({
  children,
  className = '',
}: Readonly<CardProps>) {
  return <div className={`${styles.root} ${className}`}>{children}</div>
}
