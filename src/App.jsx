import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sidebar'


import './CSS/global.css'
import styles from '../src/CSS/App.module.css'

export function App() {
  return (
		<div>
			<Header />
				<div className={styles.wrapper}>
					<Sidebar />
					<main>
						<Post
							author="Diego Fernandes"
							content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur fugit quod architecto perferendis ipsa tenetur recusandae voluptatum excepturi, neque dolor beatae ratione provident accusamus odio. Consectetur nisi corrupti in!"
						/>
						<Post
							author="Gabrielzim"
							content="Um novo post foda"
						/>
					</main>
				</div>
			</div>
	)
}

