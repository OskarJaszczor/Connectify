import { useState, useEffect } from 'react'
import './App.css'
import ServerHandler from './components/ServerHandler'
import NewMessage from './components/NewMessage'

class Server
{
  constructor(serverId, serverName, serverImg, people)
  {
    this.serverId = serverId
    this.serverName = serverName
    this.serverImg = serverImg
    this.people = people
  }
}

class Channel
{
  constructor(channelId, serverId, channelName, channelChar)
  {
    this.channelId = channelId
    this.channelChar = channelChar
    this.channelName = channelName
    this.serverId = serverId
  }
}

function App() {
  //const [activeServer, setServer] = useState(server1.serverName);
  //const [activeChannel, setChannel] = useState(channel1.channelName)
  var server1 = new Server(1, "Giga Serwer", "/img/firstlogo.jfif", [1,2,3])
  var server2 = new Server(2, "Swietny Serwer", "/img/secondlogo.jfif", [1,3])
  var channel1 = new Channel(1, 1, "Super kanał", '#')
  var channel2 = new Channel(2, 2, "Najlepszy kanał", '!')


  const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/x');
                const json = await response.json();
                setData(json); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
        
    }, []);
    
  if(data!=null)
    console.log(data)

  return (
    <div className='mainContainer'>
      <div className='topBar'>
        <span>CONNECTIFY</span>
      </div>
      <div className='serversContainer'>
          <ServerHandler server={server1}></ServerHandler>
          <ServerHandler server={server2}></ServerHandler>
        </div>
        <div className='channelsContainer'>
        <div className="channelHandler">
            <span className="channelChar">#</span><p className="channelName">Super kanal</p>
        </div>
            
        </div>
        <div className='chatContainer'>
          <div className='chat'>
          <div className="messageContainer">
            <div className="messageAuthorAvatar"></div>
            <div className="messageBox">
                <span className="messageAuthor">username</span> <span className="messageDate">25.10.2024 14:50</span>
                <p className="messageContent">
                    To jest swietna wiadomosc
                </p>
            </div>
        </div>
        <div className="messageContainer">
            <div className="messageAuthorAvatar"></div>
            <div className="messageBox">
                <span className="messageAuthor">username</span> <span className="messageDate">25.10.2024 14:50</span>
                <p className="messageContent">
                    To jest swietna wiadomosc To jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc
                </p>
            </div>
        </div>
        <div className="messageContainer">
            <div className="messageAuthorAvatar"></div>
            <div className="messageBox">
                <span className="messageAuthor">username</span> <span className="messageDate">25.10.2024 14:50</span>
                <p className="messageContent">
                    To jest swietna wiadomosc To jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc
                </p>
            </div>
        </div>
        <div className="messageContainer">
            <div className="messageAuthorAvatar"></div>
            <div className="messageBox">
                <span className="messageAuthor">username</span> <span className="messageDate">25.10.2024 14:50</span>
                <p className="messageContent">
                    To jest swietna wiadomosc To jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc
                </p>
            </div>
        </div>
        <div className="messageContainer">
            <div className="messageAuthorAvatar"></div>
            <div className="messageBox">
                <span className="messageAuthor">username</span> <span className="messageDate">25.10.2024 14:50</span>
                <p className="messageContent">
                    To jest swietna wiadomosc To jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc
                </p>
            </div>
        </div>
        <div className="messageContainer">
            <div className="messageAuthorAvatar"></div>
            <div className="messageBox">
                <span className="messageAuthor">username</span> <span className="messageDate">25.10.2024 14:50</span>
                <p className="messageContent">
                    To jest swietna wiadomosc To jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc
                </p>
            </div>
        </div>
        <div className="messageContainer">
            <div className="messageAuthorAvatar"></div>
            <div className="messageBox">
                <span className="messageAuthor">username</span> <span className="messageDate">25.10.2024 14:50</span>
                <p className="messageContent">
                    To jest swietna wiadomosc To jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc
                </p>
            </div>
        </div>
        <div className="messageContainer">
            <div className="messageAuthorAvatar"></div>
            <div className="messageBox">
                <span className="messageAuthor">username</span> <span className="messageDate">25.10.2024 14:50</span>
                <p className="messageContent">
                    To jest swietna wiadomosc To jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomosc To jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomoscTo jest swietna wiadomosc
                </p>
            </div>
        </div>
          </div>
          <div className='newMessageContainer'>
            <NewMessage></NewMessage>
          </div>
        </div>
    </div>
  )
}

export default App
