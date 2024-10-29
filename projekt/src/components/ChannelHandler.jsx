export default function ChannelHandler({
  data,
  activeServer,
  setActiveChannel,
  activeChannel,
}) {
  return (
    <div className="channelsContainer">
      {data && data.channels ? (
        data.channels
          .filter((channel) => channel.serverId === activeServer)
          .map((channel) => (
            <div
              key={channel.channelId}
              onClick={() => {
                setActiveChannel(channel.channelId);
              }}
              style={{
                backgroundColor:
                  channel.channelId === activeChannel ? "lightblue" : "white",
              }}
            >
              <h2>{channel.channelName}</h2>
              <span>{channel.channelChar}</span>
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
