import React, {useState} from "react";
import AuthContext from "../AuthContext";

const AuthState = (props) => {
    const URL = "http://localhost:4000/";
    const SignUpEndpoint = "api/auth/createuser"
    const SignInEndpoint = "api/auth/userlogin"

    const [showNavComp , setNavComp] = useState(false);
    const [customerAuthToken , setCustomerAuthToken] = useState(null);


    const SignUpUser = async (userData) => {
        const SignUpUserUrl = URL + SignUpEndpoint;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const body = JSON.stringify({
            name: userData.name,
            email: userData.email,
            password: userData.password
        });
        const options = {
            method: 'POST',
            headers: headers,
            body: body
        };

        try {
            const response = await fetch(SignUpUserUrl , options)
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        }catch (error){
            console.log(error)
        }

    }

    const SignInUser = async (userData) => {
        const SignInUserUrl = URL + SignInEndpoint;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const body = JSON.stringify({
            email: userData.username,
            password: userData.password
        });
        const options = {
            method: 'POST',
            headers: headers,
            body: body
        };

        try {
            const response = await fetch(SignInUserUrl , options)
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            setNavComp(true);
            return data;
        }catch (error){
            console.log(error)
            return "400"
        }
    }

    return (
        <AuthContext.Provider value={{ SignUpUser , SignInUser , showNavComp , setNavComp }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;