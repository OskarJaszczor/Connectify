import { useState, useEffect } from "react";
import "./App.css";
import ServerHandler from "./components/ServerHandler";
import ChannelHandler from "./components/ChannelHandler";
import MessageHandler from "./components/MessageHanlder";
import NewMessage from "./components/NewMessage";
import AddServerInvisible from "./components/AddServerInvisible";
import imageToBase64 from "image-to-base64/browser";

function App() {
  const [activeServer, SetActiveServer] = useState(0);
  const [activeChannel, SetActiveChannel] = useState(0);
  const [activeUser, SetActiveUser] = useState(0);
  const [data, setData] = useState(null);

  //const imageToBase64 = require("image-to-base64");

  // POBIERANIE ZDJEC NA SERWER
  /*imageToBase64("img/a.png")
    .then((response) => {
      const filePath = path.join('./uploads', fileName);

      const buffer = Buffer.from(base64Data, 'base64');
  
      fs.writeFileSync(filePath, buffer);
    })
    .catch((error) => {
      console.log(error);
    });
*/
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
        activeUser={activeUser}
      ></MessageHandler>

      <NewMessage activeChannel={activeChannel}></NewMessage>
    </div>
  );
}

export default App;
