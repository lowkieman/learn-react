function Vehicle(props){
    return <li>I am a { props.brand }</li>;
}

function Mech(){
    const Vehicles = ["Ford", "BMW", "AUDI"];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {Vehicles.map((vehicle) => <Vehicle brand = {vehicle}/>)}
            </ul>
        </>
        
    )
}

export default Mech;