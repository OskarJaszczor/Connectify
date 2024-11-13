/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function LoginPage({ setIsAuthenticated }) {
	const [isLoginVisible, setIsLoginVisible] = useState(false)
	const [isRegisterVisible, setIsRegisterVisible] = useState(false)
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const handleLogin = async () => {
		try {
			//console.log(login, password)
			const response = await fetch('http://localhost:3000/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ login, password }),
			})
			if (response.ok) {
				const data = await response.json()
				console.log(data.username)
				localStorage.setItem('username', data.username)
				setIsAuthenticated(true)
			} else {
				const data = await response.json()
				alert(data.message || 'Wystąpił błąd podczas logowania')
			}
		} catch (error) {
			console.error('Błąd:', error)
			alert('Wystąpił błąd podczas logowania')
		}
	}

	const handleRegister = async () => {
		if (password !== passwordConfirm) {
			alert('Hasła się nie zgadzają')
			return
		}
		try {
			const response = await fetch('http://localhost:3000/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ login, password }),
			})

			if (response.ok) {
				alert('Zarejestrowano pomyślnie!')
				setIsLoginVisible(true)
				setIsRegisterVisible(false)
				setLogin('')
				setPassword('')
			} else {
				const data = await response.json()
				alert(data.message || 'Wystąpił błąd podczas rejestracji')
			}
		} catch (error) {
			console.error('Wystąpił błąd:', error)
			alert('Wystąpił błąd podczas rejestracji')
		}
	}

	return (
		<div className="container">
			<div className="buttonContainer">
				{!isLoginVisible && !isRegisterVisible && (
					<>
						<button onClick={() => setIsLoginVisible(true)}>Zaloguj się</button>
						<button onClick={() => setIsRegisterVisible(true)}>Zarejestruj się</button>
					</>
				)}

				{isLoginVisible && (
					<div className="loginContainer">
						<label>
							Login:
							<input type="text" value={login} onChange={e => setLogin(e.target.value)} />
						</label>
						<label>
							Hasło:
							<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
						</label>
						<button onClick={handleLogin}>Zaloguj</button>
					</div>
				)}

				{isRegisterVisible && (
					<div className="registerContainer">
						<label>
							Login:
							<input type="text" value={login} onChange={e => setLogin(e.target.value)} />
						</label>
						<label>
							Hasło:
							<input type="password" value={password} onChange={e => setPassword(e.target.value)} />
						</label>
						<label>
							Potwierdź hasło:
							<input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} />
						</label>
						<button onClick={handleRegister}>Zarejestruj się</button>
					</div>
				)}
			</div>
		</div>
	)
}
