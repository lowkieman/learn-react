function MissedGoal(){
    return <h1><span>MISSED!</span></h1>;
}

function MadeGoal(){
    return <h1><span>GOAL!</span></h1>;
}

function Goal(props){
    const isGoal = props.isGoal;

    if (isGoal){
        return <MadeGoal/>;
    }else{
        return <MissedGoal/>;
    }
}

export default Goal;