import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import MainApp from './components/MainApp'
import LoginPage from './components/LoginPage'
import './index.css'

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [username, setUsername] = useState(null)

	useEffect(() => {
		// Sprawdź, czy użytkownik jest zalogowany
		const storedUsername = localStorage.getItem('username')
		if (storedUsername) {
			setUsername(storedUsername)
			console.log('Stored username:', storedUsername) // Loguj bezpośrednio storedUsername
		}
	}, [])

	useEffect(() => {
		console.log('Updated username:', username)
	}, [username])

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={isAuthenticated ? <Navigate to="/app" /> : <LoginPage setIsAuthenticated={setIsAuthenticated} />}
				/>
				<Route
					path="/app"
					element={
						isAuthenticated ? (
							<MainApp username={username} setIsAuthenticated={setIsAuthenticated} />
						) : (
							<Navigate to="/" />
						)
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
