import { useState, useEffect } from "react";
import "./App.css";
import ServerHandler from "./components/ServerHandler";
import ChannelHandler from "./components/ChannelHandler";
import MessageHandler from "./components/MessageHanlder";
import NewMessage from "./components/NewMessage";
import AddServerInvisible from "./components/AddServerInvisible";


function App() {
  const [activeServer, SetActiveServer] = useState(0);
  const [activeChannel, SetActiveChannel] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const delay = data == null ? 0 : 250;

    setTimeout(() => {
      const fetchData = async () => {
        try {
          console.log("tutaj2");
          const response = await fetch("http://localhost:3000/x");
          console.log("tutaj1");
          const json = await response.json();
          setData(json);
          console.log(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }, delay);
  }, [data]);

  /*  PRZEWIJANIE CHATU NA DOL (DO PRZEROBIENIA)
  const scrollingElement = document.getElementById("scroller");

  const config = { childList: true };

  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        window.scrollTo(0, document.body.scrollHeight);
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(scrollingElement, config);
  */

  return (
    <div className="mainContainer">
      <div className="topBar">
        <span>CONNECTIFY</span>
      </div>
      <AddServerInvisible data={data}></AddServerInvisible>
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
