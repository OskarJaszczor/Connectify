import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function NewMessage({ activeChannel, activeUser }) {
	const [message, newMessage] = useState('')

	const handleInputChange = event => {
		newMessage(event.target.value)
	}

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			event.preventDefault()
			handleSendMessage()
		}
	}
	const handleSendMessage = async () => {
		if (message.trim() === '') return
		console.log('Wiadomość do wysłania:', message)
		try {
			console.log('Wiadomość do wysłania juz dalej:', message)
			//console.log(document.querySelector('.chat'))
			document.querySelector('.chat').scrollTo(0, document.querySelector('.chat').clientHeight + 400)

			const response = await fetch('http://localhost:3000/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					content: message,
					// AUTOR
					author: activeUser,
					channel: activeChannel,
					date: new Date().toLocaleDateString(),
					hour: new Date().toLocaleTimeString(),
				}),
			})

			const result = await response
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
			{/* <form onKeyDown={handleKeyDown}> */}
			<input
				onKeyDown={handleKeyDown}
				type="text"
				value={message}
				onChange={handleInputChange}
				placeholder="Type here..."
				className="newMessageInput"
			/>
			<input
				onKeyDown={handleKeyDown}
				onClick={handleSendMessage}
				type="submit"
				style={{ backgroundImage: `url(./img/send.png)`, color: `red` }}
				className="newMessageSend"
				value=""
			/>
			{/* </form> */}
		</div>
	)
}
