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


function App() {

    var server1 = new Server(1, "Giga Serwer", "/img/firstlogo.jfif", [1,2,3])
    var server2 = new Server(2, "Swietny Serwer", "/img/secondlogo.jfif", [1,3])

  
  
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
      }, [data]);


// przypisawanie do obiektow
// zrobic wysylanie danych do node'a


/*

<div>
      <h1>List of Servers</h1>
      {data && data.servers ? (
        data.servers.map(server => (
          <div key={server.serverId}>
            <h2>{server.serverName}</h2>
            <img src={server.serverImg} alt={server.serverName} />
            <p>Users: {server.users}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
*/



  return (
    <div className='mainContainer'>
      <div className='topBar'>
        <span>CONNECTIFY</span>
      </div>
      <div className='serversContainer'>
        <ServerHandler servers={data.servers}></ServerHandler>
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

export default App;
