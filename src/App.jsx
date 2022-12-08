import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'


import './CSS/global.css'
import styles from '../src/CSS/App.module.css'

const post = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/joa0-pedro.png",
			nome: "João Pedro",
			role: "Estagiário SGC"
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz na Rocketseat. O nome dele é Ignite Feed 🚀' },
			{ type: 'link', content: <a href="#">ingnite.feed/rocketseat</a> },
		],
		publishedAt: new Date('2022-12-03 10:32:00'),
	},
];

export function App() {
  return (
		<div>
			<Header />
				<div className={styles.wrapper}>
					<Sidebar />
					<main>
						{post.map(post => {
							return (
								<Post
									key={post.id}
									author={post.author}
									content={post.content}
									publishedAt={post.publishedAt}
								/>
							)
						})}
					</main>
				</div>
			</div>
	)
}

