import styles from '../CSS/Post.module.css'
import { Comment } from './Comment'

export function Post(){
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
					className={styles.avatar}
					src="https://github.com/joa0-pedro.png"/>
					<div className={styles.authorInfo}>
						<strong>João Pedro</strong>
						<span>Web Dev</span>
					</div>
				</div>
				<time
				title='12 de Novembro às 12hrs'
				dateTime='2022-11-06 12:00:00'>Publicado há 1h</time>
			</header>

			<div className={styles.content}>
			<p>Fala galeraa 👋</p>

			<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p><a href="#">jane.design/doctorcare</a></p>

			<p>
			<a href="#">#novoprojeto</a>{' '}
			<a href="#">#nlw</a>{' '}
			<a href="#">#rocketseat</a>
			</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu Feedback</strong>
				<textarea
				placeholder='Deixe um comentário'
				/>
				<footer>
				<button type='submit'>Enviar</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	)
}


