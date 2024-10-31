import { useState, useEffect } from "react";
import "./App.css";
import ServerHandler from "./components/ServerHandler";
import ChannelHandler from "./components/ChannelHandler";
//import NewMessage from "./components/NewMessage";
import MessageHandler from "./components/MessageHanlder";
import NewMessage from "./components/NewMessage";



function App() {
  const [activeServer, SetActiveServer] = useState(0);
  const [activeChannel, SetActiveChannel] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const delay = data == null ? 0 : 250;

    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3000/x");
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, delay);
  }, [data]);

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
    
      <NewMessage activeChannel={activeChannel}></NewMessage>
    
    </div>
  );
}

export default App;
