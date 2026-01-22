import react from "react";
import { useNavigate } from "react-router-dom";



const About = () => {
    const navigate = useNavigate();

    function clickHandler(){
        navigate('/support');
    }

    function backHandler(){
        navigate(-1);
    }

    return (
        <div>
        <div>
            <h1>This is About Page</h1>
        </div>
        <button onClick={clickHandler}>go to support page </button>
        <button onClick={backHandler}>go back</button>
        </div>
    )
}
export default About;