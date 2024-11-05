document.querySelector('.logInButton').addEventListener('click', () => {
	document.querySelector('.buttonContainer').innerHTML = `
        <div class='loginContainer'>
            Login: <br><input type='text' class='inpLogin' name='inpLogin' id='login' required><br>
            Hasło:<br><input type='password' class='inpPassword' name='inpPassword' id='password' required><br>
            <button class='sendButton'>Zaloguj</button>
        </div>
    `

	const sendButton = document.querySelector('.sendButton')
	sendButton.addEventListener('click', async () => {
		const login = document.getElementById('login').value
		const password = document.getElementById('password').value

		try {
			const response = await fetch('http://localhost:3002/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ login, password }),
			})

			if (response.ok) {
				window.location.href = 'http://localhost:5173/'
			} else {
				const data = await response.json()
				alert(data.message || 'Wystąpił błąd podczas logowania')
			}
		} catch (error) {
			console.error('Błąd:', error)
			alert('Wystąpił błąd podczas logowania')
		}
	})
})

// Rejestracja
document.querySelector('.signUpButton').addEventListener('click', () => {
	document.querySelector('.buttonContainer').innerHTML = `
        <div class='registerContainer'>
            Login: <br><input type='text' class='inpLogin' id='login2' name='inpLogin' required><br>
            Hasło:<br><input type='password' class='inpPassword' id='password' required><br>
            Potwierdź hasło:<br><input type='password' class='inpPassword' id='password2' required><br>
            <button class='sendButton1'>Zarejestruj się</button>
        </div>
    `

	const sendButton1 = document.querySelector('.sendButton1')
	sendButton1.addEventListener('click', async () => {
		const login = document.getElementById('login2').value
		const password = document.getElementById('password').value
		const password2 = document.getElementById('password2').value

		if (password !== password2) {
			alert('Hasła się nie zgadzają')
			return
		}

		try {
			const response = await fetch('http://localhost:3002/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ login, password }),
			})

			if (response.ok) {
				alert('Zarejestrowano pomyślnie!')
				window.location.href = 'http://localhost:5173/'
			} else {
				const data = await response.json()
				alert(data.message || 'Wystąpił błąd podczas rejestracji')
			}
		} catch (error) {
			console.error('Wystąpił błąd:', error)
			alert('Wystąpił błąd podczas rejestracji')
		}
	})
})
