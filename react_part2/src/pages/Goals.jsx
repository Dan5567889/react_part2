import GoalImage from '../assets/team.jpg'; 
function Goals() {
    return(
        <>
        <h1> Team Goals </h1>
        <p>As a team we plan to help each other out and grow together in computer science. We plan to use the skills that we develop in class and help each other to get the work we do in class done. We also plan to use the skills we get from this class and use them in the future for fun. </p>
        <img src={GoalImage} alt="Team"/>
        </>
    );
}
export default Goals;