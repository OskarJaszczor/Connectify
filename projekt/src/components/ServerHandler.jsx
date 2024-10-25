export default function ServerHandler(props)
{
    var div = "";
    return(
        <div className="serverHandler" style={{backgroundImage: 'url(' + props.server.serverImg + ')'}} onMouseEnter={(e) => {
            div = document.createElement("div");
            div.classList.add("serverName");
            div.innerText = props.server.serverName;
            e.target.appendChild(div);
            e.target.classList.add("active")
            
        }} onClick={(e) => {
            
        }} onMouseLeave={(e) => {
            e.target.removeChild(div);
            e.target.classList.remove("active")
        }}>
            
        </div>
    )
}