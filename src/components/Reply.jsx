import styles from './Style.module.css'


export default function Post(props) {
  const nome = props.nome
  const postTime = props.postTime
  const descrição = props.descrição
  const likes = props.likes

  return (
    <div className={styles.post}>
      <div className={styles.post_content_container}>
        <div className={styles.line_view}></div>
        <div className={styles.usarname_data_container}>
          <div className={styles.username}>{nome}</div>
          <div className={styles.data}>{postTime}</div>
        </div>
      </div>
      <p>{descrição}</p>

      <div className={styles.feedback_post}>
        <div className={styles.likes}>{likes} curtidas</div>
      </div>

      <div className="line_view"></div>

    </div>
  )
}
