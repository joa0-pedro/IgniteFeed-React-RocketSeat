import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import styles from '../CSS/Comment.module.css'
import { Avatar } from './Avatar'




export function Comment({content, onDeleteComment}){

	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment(){

		onDeleteComment(content);
	}

	function handleLikeComment(){
		setLikeCount(likeCount + 1);
	}

	return(
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/brunolipe-a.png" />
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
					<button onClick={handleDeleteComment} title='Deletar comentário'>
						<Trash size={24}/>
					</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
				<button onClick={handleLikeComment}>
					<ThumbsUp size={20} />
					Aplaudir <span>{likeCount}</span>
				</button>
				</footer>
			</div>
		</div>
	)
}
