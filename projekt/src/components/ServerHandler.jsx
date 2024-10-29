export default function ServerHandler({ data, SetActiveServer, activeServer }) {
  return (
    <div className="serversContainer">
      {data && data.servers ? (
        data.servers.map((server) => (
          <div
            key={server.serverId}
            onClick={() => {
              SetActiveServer(server.serverId);
            }}
            style={{
              backgroundColor:
                server.serverId === activeServer ? "lightblue" : "white",
            }} // Jak server jest aktywny tobedzie kolorowy
          >
            <h2>{server.serverName}</h2>
            <img src={server.serverImg} alt={server.serverName} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
