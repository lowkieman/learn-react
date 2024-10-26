function Football(){
    const shoot = () => {
        
        document.getElementById("events").innerHTML = "Great Short, Wilfred!"
    };

    const back = () => {
        document.getElementById("demo").style.display = "none";
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    )
}

export default Football;