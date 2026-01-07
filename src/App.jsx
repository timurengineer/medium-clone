import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes.jsx'

export default function App() {
	return (
		<div>
			<h3>Welcome to Hooks</h3>
			<BrowserRouter>
				<RoutesConfig />
			</BrowserRouter>
		</div>
	)
}
