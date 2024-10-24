export default function ChannelHandler(props)
{

    return(
        <div className="channelHandler" style={{backgroundImage: {a}}} onClick={ async () => {
            const response = await fetch("http://localhost:3000/server", {
            method: "POST",
            body: JSON.stringify({server: props.name})
});
        }}>

        </div>
    )
}