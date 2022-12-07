import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../CSS/Comment.module.css'

export function Comment(){
	return(
		<div className={styles.comment}>
			<img src="https://github.com/brunolipe-a.png" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
					<div className={styles.authorAndTime}>
					<strong>Bruno Felipe</strong>
					<time
						title='12 de Novembro às 12hrs'
						dateTime='2022-11-06 12:00:00'>Cerca de 1hr atrás
					</time>
					</div>
					<button title='Deletar comentário'>
						<Trash size={24}/>
					</button>
					</header>
					<p>Muito bom Jhebas, parabéns!! 👏👏</p>
				</div>
				<footer>
				<button>
					<ThumbsUp size={20} />
					Aplaudir <span>20</span>
				</button>
				</footer>
			</div>
		</div>
	)
}
