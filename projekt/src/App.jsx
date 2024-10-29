import { useState, useEffect } from "react";
import "./App.css";
import ServerHandler from "./components/ServerHandler";
import ChannelHandler from "./components/ChannelHandler";
import NewMessage from "./components/NewMessage";
import MessageHandler from "./components/MessageHanlder";

class Server {
  constructor(serverId, serverName, serverImg, people) {
    this.serverId = serverId;
    this.serverName = serverName;
    this.serverImg = serverImg;
    this.people = people;
  }
}

function App() {
  const [activeServer, SetActiveServer] = useState(0);
  const [activeChannel, SetActiveChannel] = useState(0);

  var server1 = new Server(1, "Giga Serwer", "/img/firstlogo.jfif", [1, 2, 3]);
  var server2 = new Server(2, "Swietny Serwer", "/img/secondlogo.jfif", [1, 3]);

  const [data, setData] = useState(null);

  useEffect(() => {
    const delay = data == null ? 0 : 250;

    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3000/x");
          const json = await response.json();
          setData(json);
          //console.log(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, delay);
  }, [data]);

  // przypisawanie do obiektow
  // zrobic wysylanie danych do node'a

  // <ServerHandler servers={data.servers}></ServerHandler>

  return (
    <div className="mainContainer">
      <div className="topBar">
        <span>CONNECTIFY</span>
      </div>

      <ServerHandler
        data={data}
        SetActiveServer={SetActiveServer}
        activeServer={activeServer}
      ></ServerHandler>

      <ChannelHandler
        data={data}
        activeServer={activeServer}
        activeChannel={activeChannel}
        setActiveChannel={SetActiveChannel}
      ></ChannelHandler>

      <MessageHandler
        data={data}
        activeChannel={activeChannel}
      ></MessageHandler>
    </div>
  );
}

export default App;
