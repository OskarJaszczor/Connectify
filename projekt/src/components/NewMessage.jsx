/* eslint-disable react/prop-types */
import { useState } from "react";
export default function NewMessage({activeChannel})
{
    const [content, setContent] = useState("");

    return(
        <div className="newMessageContainer">
            <input type="text" placeholder="Type here..." name="" className="newMessageInput" onInput={(e) => {
                setContent(e.target.value)  
                console.log(content)
            }}/>
            <button type="submit" style={{backgroundImage: `url(./img/send.png)`}} className="newMessageSend" onClick={async () => {
                    try {
                        const response = await fetch('http://localhost:3000/addMessage', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(content, activeChannel),
                          mode: 'no-cors'
                        });
                  
                        if (response.ok) {
                          console.log('Data successfully sent!');
                        }
                      } catch (error) {
                        console.error('Error sending data:', error);
                      }
                   
                  
            }}></button>
        </div>
    )
}