/* eslint-disable react/prop-types */
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
              className="channelHandler"
              key={channel.channelId}
              onClick={() => {
                setActiveChannel(channel.channelId);
              }}
              style={{
                backgroundColor:
                  channel.channelId === activeChannel ? "rgba(173,216,230,0.6)" : "rgba(255,255,255,0)",
              }}
            >
              
              <h2 className="channelName"><span className="channelChar">{channel.channelChar}</span>{channel.channelName}</h2>
              
            </div>
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
