import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import AuthContext from "../context/AuthContext";
import noteContext from "../context/noteContext";
import AlertContext from "../context/AlertContext";

export default function SigninForm() {
    const navigate = useNavigate();
    const { triggerAlert } = useContext(AlertContext);
    const { setuserAuthToken } = useContext(noteContext)
    const { SignInUser } = useContext(AuthContext);
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
    }

    const signIn = async (e) => {
        e.preventDefault();
        const signinResponse = await SignInUser(userData);
        if (signinResponse !== "400") {
            localStorage.setItem("userAuthToken", signinResponse)
            await setuserAuthToken(signinResponse)
            triggerAlert("Logged in successfully.")
            await navigate("/")
        } else {
            triggerAlert("Account not found!! Please create a new account");
            await navigate("/signup")
        }
    }


    return (
        <div className="relative flex justify-center items-center h-screen bg-gray-50">
            <div className="relative w-full max-w-md bg-white shadow-lg rounded-lg p-8 z-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">SignIn Form</h1>
                <form onSubmit={signIn}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            required
                            value={userData.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
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
                        <button type="submit" onClick={signIn}
                                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300">Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
