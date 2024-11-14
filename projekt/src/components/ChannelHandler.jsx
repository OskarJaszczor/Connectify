/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ChannelHandler({
  data,
  activeServer,
  setActiveChannel,
  activeChannel,
  theme
}) {

  const [a, setA] = useState("")
  const [b, setB] = useState("")
  return (
    <div className="channelsContainer">
      {data && data.servers ? (data.servers.filter((server) => server.serverId === activeServer).map((server) => (<h2 key={server.serverId} className="serverNameOnChannels">{server.serverName}</h2>))): (
        <p>Loading...</p>
      )}

      <h2 className="channels">Kanały tekstowe: </h2>
      {data && data.channels ? (
        data.channels
          .filter((channel) => channel.serverId === activeServer)
          .map((channel) => (
            <div
              className="channelHandler "
              key={channel.channelId}
              onClick={() => {
                setActiveChannel(channel.channelId);
                {{console.log(document.querySelectorAll(".channelHandler"))}}
              }}
              style={{
                background:  
                  channel.channelId === activeChannel ? 
                  (theme == "dark" ? 
                  "linear-gradient(146deg, rgba(7, 7, 8, 1) 2%, rgba(168, 98, 28, 1) 99%)" 
                  : 
                  "linear-gradient(146deg, rgba(255, 255, 255, 1) 2%, rgba(52, 152, 219, 1) 99%)") 
                  : "",
              }}
            >
              
              
              <h2 className="channelName"><span className="channelChar">{channel.channelChar}</span>{channel.channelName}</h2>
              
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
      <h3 className="addChannel" onClick={() => {
        document.querySelector(".addChannelInvisible").style.setProperty("display", "block")
      }}>Dodaj kanał:</h3>
      <div className="addChannelInvisible">
        <h3>Znak kanału: </h3>
        <input type="text" className="channelCharInput" maxLength={1} id="" onInput={(e) => {
          setA(e.target.value)
        }} />

        <h3>Nazwa kanału:</h3>
        <input type="text" className="channelNameInput" onInput={(e) => {
          setB(e.target.value)
        }} /><br/>
        <button className="makeChannel" onClick={ async (e) => {
          document.querySelector(".addChannelInvisible").style.setProperty("display", "none")
           const response = await fetch("http://localhost:3000/addChannel", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              char: a,
              name: b,
              server: activeServer
            }),
          });
      
        }}>Stwórz</button>
      </div>
    </div>
  );
}
