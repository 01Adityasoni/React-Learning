import './App.css';
import { useState } from 'react';

function App() {

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

    return (
<div>
    <form>
        <input
        type='text'
        placeholder='First name'
        onChange={ChangeFirstHandler}
        />

        <input
        type='text'
        placeholder='Last name'
        onChange={ChangeLastHandler}
        />
    </form>
</div>
    );
}

export default App;
