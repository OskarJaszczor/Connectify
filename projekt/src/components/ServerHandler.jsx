import { sendToNode } from "../App";

export default function ServerHandler({name})
{
    
    return(
        <div className="serverHandler" onClick={sendToNode("server", name)}></div>
    )
}