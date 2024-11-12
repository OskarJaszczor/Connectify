/* eslint-disable react/prop-types */
//import NewMessage from "./NewMessage";
export default function MessageHandler({ data, activeChannel }) {
  console.log(data);
  return (
    <div className="chatContainer">
      {data && data.channels ? (
        data.channels
          .filter((channel) => channel.channelId === activeChannel)
          .map((channel) => (
            <h2 key={channel.channelId} className="channelNameOnChat">
              {channel.channelName}
            </h2>
          ))
      ) : (
        <p>Loading...</p>
      )}
      <div className="chat">
        {data && data.messages ? (
          data.messages
            //
            .filter((messages) => messages.channelId === activeChannel) // Filtruj kanały według aktywnego serwera
            .map((messages) => (
              <div
                key={messages.messageId} // Użyj channelId jako klucza
                style={{}}
              >
                <div className="messageContainer">
                  <div
                    className="messageAuthorAvatar"
                    style={{
                      backgroundImage: `url(./img/${
                        data.users.filter(
                          (users) => users.username == messages.author
                        )[0].avatar
                      })`,
                    }}
                  ></div>
                  <div className="messageBox">
                    <span className="messageAuthor">{messages.author}</span>{" "}
                    <span className="messageDate">{messages.hour}</span>
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
