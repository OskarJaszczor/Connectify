/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function NewMessage({activeChannel}) {
    const [message, newMessage] = useState('')

    const handleSendMessage = async() => {
        if (message.trim() === '') return
        console.log(message)
        try {
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

            const result = JSON.parse(response)
            if (result.success) {
                console.log('Wiadomość: ' + message + ' wysłana.')
                newMessage('')
            }
        } catch (error) {
            console.log('Nie udało się wysłać wiadomości!', error)
        }
    }

    return ( 
        <div className='newMessageContainer'>
        <input type = "text" value = { message }
        onChange = { msg => newMessage(msg.target.value) }
        placeholder = "Type here..."
        name = ""
        className = "newMessageInput" />
        <button onClick = { handleSendMessage }
        type = "submit"
        style = {
            { backgroundImage: `url(./img/send.png)`, color: `red` } } className = "newMessageSend">submit </button> 
        </div>
    )
}



