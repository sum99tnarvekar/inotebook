import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import noteContext from "../context/noteContext";
import AuthContext from "../context/AuthContext";
import AlertContext from "../context/AlertContext";

export default function SigninModal(props) {
    const navigate = useNavigate();
    const { triggerAlert } = useContext(AlertContext);
    const { SignInUser } = useContext(AuthContext);
    const { setuserAuthToken } = useContext(noteContext)
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });
    const handleChange = (e) => {
        const { id , value } = e.target;
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
                <div className="relative bg-white rounded-lg dark:bg-gray-700">
                    <div
                        className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-black dark:text-white">
                            Sign in to our platform
                        </h3>
                        <button type="button"
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="/" onSubmit={signIn}>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-black dark:text-white">Your
                                    email</label>
                                <input type="email" name="email" id="email"
                                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       placeholder="" onChange={handleChange} required/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-black dark:text-white">Your
                                    password</label>
                                <input type="password" name="password" id="password" placeholder=""
                                       className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       onChange={handleChange} required/>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value=""
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                               required/>
                                    </div>
                                    <label htmlFor="remember"
                                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                        me</label>
                                </div>
                                <Link to="/" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot
                                    Password?</Link>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                                to your account
                            </button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <Link to="#"
                                                      className="text-blue-700 hover:underline dark:text-blue-500">Create
                                account</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
                )
                }