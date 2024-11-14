/* eslint-disable react/prop-types */
import AddServer from "./AddServer";

export default function ServerHandler({ data, SetActiveServer, activeServer, theme }) {
  return (
    <div className="serversContainer">
      {data && data.servers ? (
        data.servers.map((server) => (
          <div className="serverHandler"
            key={server.serverId}
            onClick={() => {
              SetActiveServer(server.serverId);
            }}
            style={{
              border:
              server.serverId === activeServer ? (theme == 'dark' ? "white 3px solid" : "black 3px solid") : "black 1px solid",
              backgroundImage: `url(http://localhost:3000/img/${server.serverImg})`,
              
            }}
          >
            <h2 className="serverName" >x</h2>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    <AddServer></AddServer>
    </div>
  );
}
