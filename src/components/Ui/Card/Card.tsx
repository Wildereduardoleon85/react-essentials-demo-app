import styles from './Card.module.css'

type CardProps = {
  children: React.ReactNode
  className?: string
  component?: React.ElementType
}

export default function Card({
  children,
  className = '',
  component: Component = 'div',
}: Readonly<CardProps>) {
  return (
    <Component className={`${styles.root} ${className}`}>{children}</Component>
  )
}
