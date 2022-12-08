import styles from '../CSS/Sidebar.module.css';
import {PencilLine }from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar(){
	return (
		<aside className={styles.sidebar}>
		<img
		className={styles.cover}
		src="https://images.unsplash.com/photo-1669628700016-51556b432450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"/>
		<div className={styles.profile}>
		<Avatar src="https://github.com/joa0-pedro.png" />
			<strong>João Pedro</strong>
			<span>Web Dev</span>
		</div>
		<footer>
			<a href="#">
				<PencilLine size={20} />
				Editar seu Perfil
			</a>
		</footer>
		</aside>
	)

}
