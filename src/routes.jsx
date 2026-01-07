import { Route, Routes } from 'react-router-dom'
import Article from './pages/article'
import GlobalFeed from './pages/globalFeed'

export default function RoutesConfig() {
	return (
		<Routes>
			<Route
				path='/'
				element={<GlobalFeed />}
			/>
			<Route
				path='/articles/:slug'
				element={<Article />}
			/>
		</Routes>
	)
}
