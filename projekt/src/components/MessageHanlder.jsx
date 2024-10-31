/* eslint-disable react/prop-types */
//import NewMessage from "./NewMessage";
export default function MessageHandler({ data, activeChannel }) {
  return (
    <div className="chatContainer">
      <div className="chat">
      {data && data.messages ? (
        data.messages
          .filter((messages) => messages.channelId === activeChannel) // Filtruj kanały według aktywnego serwera
          .map((messages) => (
            <div
              key={messages.messageId} // Użyj channelId jako klucza
              style={{}}
            >
              
                <div className="messageContainer">
                  <div className="messageAuthorAvatar"></div>
                  <div className="messageBox">
                    <span className="messageAuthor">{messages.author}</span>{" "}
                    <span className="messageDate">
                      {messages.hour}
                    </span>
                    <p className="messageContent">{messages.content}</p>
                  </div>
                </div>
              
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>

    //<div className="newMessageContainer">
    //<NewMessage></NewMessage>
    //</div>
  );
}
