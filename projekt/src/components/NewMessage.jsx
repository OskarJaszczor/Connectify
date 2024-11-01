import { useState } from 'react'

export default function NewMessage({ activeChannel }) {
	const [message, newMessage] = useState('')

	const handleInputChange = event => {
		newMessage(event.target.value)
	}

	const handleSendMessage = async () => {
		if (message.trim() === '') return
		console.log('Wiadomość do wysłania:', message)
		try {
			console.log('Wiadomość do wysłania juz dalej:', message)

			const response = await fetch('http://localhost:3000/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					content: message,
					author: 'User1',
					channel: activeChannel,
					date: new Date().toLocaleDateString(),
					hour: new Date().toLocaleTimeString(),
				}),
			})

			const result = await response.json()
			if (result.success) {
				console.log('Wiadomość wysłana. Czyszczenie pola.')
				newMessage('')
			} else {
				newMessage('')
			}
		} catch (error) {
			console.log('Nie udało się wysłać wiadomości!', error)
		}
	}

	return (
		<div className="newMessageContainer">
			<input
				type="text"
				value={message}
				onChange={handleInputChange}
				placeholder="Type here..."
				className="newMessageInput"
			/>
			<button
				onClick={handleSendMessage}
				type="submit"
				style={{ backgroundImage: `url(./img/send.png)`, color: `red` }}
				className="newMessageSend">
				submit
			</button>
		</div>
	)
}
