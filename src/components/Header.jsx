import styles from './Style.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className="nav">
        <a className="home">Home</a>
        <a className="explore">Explore</a>
        <a className="grupos">Grupos</a>
        <a className="grupos">Amigos</a>
      </nav>
    </div>
  )
}

