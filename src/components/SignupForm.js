import { useNavigate } from 'react-router-dom';
import React, {useContext, useState} from 'react';
import AuthContext from "../context/AuthContext";
import AlertContext from "../context/AlertContext";

export default function SignupForm() {
    const navigate = useNavigate();
    const { triggerAlert } = useContext(AlertContext);
    const { SignUpUser , SignInUser } = useContext(AuthContext);
    const [userData , setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { id , value } = e.target;
        setUserData({ ...userData, [id]: value });
    }

    const signUp = async (e) => {
        e.preventDefault();
        const signupResponse = await SignUpUser(userData);
        if(signupResponse._id){
            const signinResponse = await SignInUser({username : signupResponse.email, password: userData.password});
            if (signinResponse) localStorage.setItem("userAuthToken", JSON.stringify(signinResponse));
        }
        triggerAlert(`Hey ${userData.name} your acoount created successfully.`);
        navigate("/")
    }

    return (
        <div className="relative flex justify-center items-center h-screen bg-gray-50">
            <div className="relative w-full max-w-md bg-white shadow-lg rounded-lg p-8 z-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">SignUp Form</h1>
                <form onSubmit={signUp}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                            value={userData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            minLength="6"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                            value={userData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                            value={userData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="button"
                                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300">Reset
                        </button>
                        <button type="submit" onClick={signUp}
                                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300">Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
