import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/adrianoqueiroz.png" />
          <div className={styles.authorInfo}>
            <strong>Adriano Queiroz</strong>
            <span>Web Developer</span>
          </div>

          <time>Publicado há 1h</time>
        </div>
      </header>
    </article>
  )
}