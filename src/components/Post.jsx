import styles from './Style.module.css'


export default function Post(props) {
  const nome = props.nome
  const postTime = props.postTime
  const descrição = props.descrição
  const likes = props.likes
  const comments = props.comments

  return (
    <div className={styles.post}>
      <div className={styles.post_content_container}>
        <div className={styles.usarname_data_container}>
          <div className={styles.username}>Postado por {nome}</div>
          <div className={styles.data}>{postTime}</div>
        </div>
      </div>
      <h2 className={styles.titulo}>Titulo</h2>
      <h3 className={styles.subtitulo}>Sub-Título</h3>
      <p className={styles.descrição_post}>{descrição}</p>
      
      <div className={styles.feedback_post}>
        <div className={styles.likes}>{likes} curtidas</div>
        <div className={styles.comments}>{comments} comentários</div>
      </div>

      <div className="line_view"></div>

    </div>
  )
}
