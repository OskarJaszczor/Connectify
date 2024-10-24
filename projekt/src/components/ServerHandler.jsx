export default function ServerHandler(props)
{

    return(
        <div className="serverHandler" onClick={ async () => {
            const response = await fetch("http://localhost:3000/server", {
            method: "POST",
            body: JSON.stringify({server: props.name})
});
        }}>

        </div>
    )
}