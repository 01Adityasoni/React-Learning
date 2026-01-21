import './App.css';
import { useState } from 'react';
function App() {
/*
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    function ChangeFirstHandler(e){
        setFirstName(e.target.value);
        console.log(e.target.value)
    }

    function ChangeLastHandler(e){
        setLastName(e.target.value);
        console.log(e.target.value)
    } 
*/  
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: ""
});
console.log(formData);

function ChangeHandler(e){
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}


function submitHandler(e){
    e.preventDefault();
    console.log("form submitted");
    console.log(formData);
}



    return (
<div className="form-center">
    <form className="justify-center items-center text-center"
    onSubmit={submitHandler}
    >
        <input
        type='text'
        placeholder='First name'
        //onChange={ChangeFirstHandler}
        onChange={ChangeHandler}
        name='firstName'
        value={formData.firstName}
        />
<br/>
        <input
        type='text'
        placeholder='Last name'
        //onChange={ChangeLastHandler}
        onChange={ChangeHandler} 
        name='lastName' 
        value={formData.lastName}  
        />
        <br/>
        <input
        type='email'
        placeholder='Email'
        onChange={ChangeHandler} 
        name='email'
        value={formData.email}   
        />
        <br/>
        <br/>
        <textarea
        placeholder='enter your comments here'
        onChange={ChangeHandler}
        name='comments'
        value={formData.comments}
        />
        <br/>
        <input
        type="checkbox"
        onChange={ChangeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible</label>
<br/>
        <input
        type="radio"
        onChange={ChangeHandler}
        name='mode'
        value="online mode"
        id="online-Mode"
        checked={formData.mode === "online mode"}
        />
        <label htmlFor='online-Mode'>Online Mode</label>
        <br/>

        <input
        type="radio"
        onChange={ChangeHandler}
        name='mode'
        value="offline mode"
        id="offline-Mode"
        checked={formData.mode === "offline mode"}
        />
        <label htmlFor='offline-Mode'>Offline Mode</label>

        <br/>
        <select
            onChange={ChangeHandler}
            name='favCar'
            value={formData.favCar}
            id="favCar"
            >
                <option value="">--Choose your favorite car--</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="scorpio">Scorpio</option>
                <option value="fortuner">Fortuner</option>
                <option value="mustang">Mustang</option>
                <option value="camaro">Camaro</option>
        </select>
        <label htmlFor='favCar'> Choose your favorite car</label>

        <br/>
        <br/>
        <button>Submit</button>


        </form>
</div>
    );
}
export default App;
