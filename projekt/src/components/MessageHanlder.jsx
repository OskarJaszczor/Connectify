import NewMessage from "./NewMessage";
export default function MessageHandler({ data, activeChannel }) {
  return (
    <div className="chatContainer">
      {data && data.messages ? (
        data.messages
          .filter((messages) => messages.channelId === activeChannel) // Filtruj kanały według aktywnego serwera
          .map((messages) => (
            <div
              key={messages.messageId} // Użyj channelId jako klucza
              style={{}}
            >
              <div className="chat">
                <div className="messageContainer">
                  <div className="messageAuthorAvatar"></div>
                  <div className="messageBox">
                    <span className="messageAuthor">{messages.author}</span>{" "}
                    <span className="messageDate">
                      {messages.date}
                      {messages.hour}
                    </span>
                    <p className="messageContent">{messages.content}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>

    //<div className="newMessageContainer">
    //<NewMessage></NewMessage>
    //</div>
  );
}
