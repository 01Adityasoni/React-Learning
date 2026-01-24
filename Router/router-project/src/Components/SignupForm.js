import React from "react";
import { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ))
    }



    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account created successfully");
        navigate("/dashboard");
    }
    
    return (
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input
                        required
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        onChange={changeHandler}
                        value={formData.firstName}
                        />
                </label>
                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        onChange={changeHandler}
                        value={formData.lastName}
                        />
                </label>
                </div>
                
                       <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        onChange={changeHandler}
                        value={formData.email}
                        />
                </label>
                <div>
                       <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter password"
                        onChange={changeHandler}
                        value={formData.password }
                        />
                         <span onClick={() => setShowPassword((prev) => !prev)}>
                                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />) }
                                     </span>
                </label>
                       <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Enter password"
                        onChange={changeHandler}
                        value={formData.confirmPassword }
                        />
                         <span onClick={() => setShowPassword((prev) => !prev)}>
                                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />) }
                                     </span>
                </label>


                </div>
                <button>
                    Create Account
                </button>
                
            </form>

        </div>
    )

}
export default SignupForm;