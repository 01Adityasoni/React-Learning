import react from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
const navigate = useNavigate();
    function clickHandler() {
        navigate('/about');
    }
    return (
        <div>
        <div>
            <h1>This is Labs Page</h1>
        </div>
        <button onClick={clickHandler}> move to about page </button>
        </div>

    )
}
export default Labs;