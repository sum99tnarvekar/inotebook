import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import noteContext from '../context/noteContext'
import AuthContext from "../context/AuthContext";
import logo from '../images/note_logo.svg'
import AlertContext from "../context/AlertContext";
import {useSelector} from "react-redux";


const Navbar = () => {
    let location = useLocation();
    const { triggerAlert } = useContext(AlertContext);
    const {fetchNote , setuserAuthToken } = useContext(noteContext)
    const { showNavComp , setNavComp } = useContext(AuthContext);
    const darkMode = useSelector((state) => state.theme.darkMode);
    const currentLanguage = useSelector((state) => state.language.language);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    console.log(currentLanguage)

    // State for user dropdown menu
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Toggle user menu
    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const logOut = () =>{
        setNavComp(false)
        toggleUserMenu()
        localStorage.removeItem("userAuthToken");
        setuserAuthToken(null)
        console.log("Triggering alert for logout");
        triggerAlert("Logged out successfully")
    }

    // const handleChange = async (event) => {
    //     switch (event.target.value) {
    //         case 'marathi':
    //             dispatch(toggleMarathiLanguage());
    //             break;
    //         case 'english':
    //             dispatch(toggleEnglishLanguage());
    //             break;
    //         case 'hindi':
    //             dispatch(toggleHindiLanguage());
    //             break;
    //         default:
    //             break;
    //     }
    //     await translatePage(currentLanguage);
    // };

    return (
        <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-50' : 'bg-gray-800'}`}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu} // Toggle mobile menu on click
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className={`hidden h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/"><img className="h-8 w-auto" src={logo} alt="Your Company" /></Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/" className={`rounded-md px-3 py-2 text-sm font-medium ${darkMode ? (location.pathname === "/" ? "bg-gray-900 text-white" : "text-gray-800") : (location.pathname === "/" ? "bg-red-900 text-white" : "text-white")}`} aria-current="page">Dashboard</Link>
                                <Link to="/dailynote" className={`rounded-md px-3 py-2 text-sm font-medium ${darkMode ? (location.pathname === "/dailynote" ? "bg-gray-900 text-white" : "text-gray-800") : (location.pathname === "/dailynote" ? "bg-red-900 text-white" : "text-white")}`}>Daily Notes</Link>
                                <Link to={`${localStorage.getItem('userAuthToken') ? '/noteform' : '/signinmodal'} `} className={`rounded-md px-3 py-2 text-sm font-medium ${darkMode ? (location.pathname === "/noteform" ? "bg-gray-900 text-white" : "text-gray-800") : (location.pathname === "/noteform" ? "bg-red-900 text-white" : "text-white")}`}>Add Notes</Link>
                                <Link to="/notetestimonial" onClick={fetchNote} className={`rounded-md px-3 py-2 text-sm font-medium ${darkMode ? (location.pathname === "/notetestimonial" ? "bg-gray-900 text-white" : "text-gray-800") : (location.pathname === "/notetestimonial" ? "bg-red-900 text-white" : "text-white")} ${localStorage.getItem('userAuthToken') ? '' : 'hidden'}`}>My Notes</Link>
                                <Link to="/about" className={`rounded-md px-3 py-2 text-sm font-medium ${darkMode ? (location.pathname === "/about" ? "bg-gray-900 text-white" : "text-gray-800") : (location.pathname === "/about" ? "bg-red-900 text-white" : "text-white")}`}>About us</Link>
                            </div>
                        </div>
                    </div>

                    {/* Notifications and User Menu */}
                    <div
                        className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Notifications Button */}
                        {/*check user logged in or not*/}

                        {/*<div className="underline-select-wrapper text-white">*/}
                        {/*    <select className="underline-select">*/}
                        {/*        <option className="text-black" value="mr">अ</option>*/}
                        {/*        <option className="text-black" value="en">a</option>*/}
                        {/*        <option className="text-black" value="hi">ल्म</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}

                        <button
                            type="button"
                            className={`relative rounded-full  p-1 ${darkMode ? 'text-gray-800 hover:text-gray-400' : 'text-gray-400 hover:text-white'}  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ${localStorage.getItem('userAuthToken') ? '' : 'hidden'}`}
                        >
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                />
                            </svg>
                        </button>

                        {/* User Menu Button */}
                        <div className="relative ml-3">
                            <div style={{marginBottom: '8px'}}>
                                {
                                    showNavComp ? (
                                        <button
                                            type="button"
                                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            id="user-menu-button"
                                            aria-expanded={isUserMenuOpen}
                                            aria-haspopup="true"
                                            onClick={toggleUserMenu} // Toggle user menu on click
                                        >
                                            <span className="absolute -inset-1.5"></span>
                                            <span className="sr-only">Open user menu</span>
                                            <img className="h-8 w-8 rounded-full"
                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                 alt="User"/>
                                        </button>
                                    ) : (
                                        <div>
                                            <Link to="/signup"
                                                  className="bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                                Sign Up
                                            </Link>
                                            <Link to="/signin"
                                                  className="bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded ml-1">
                                                Sign In
                                            </Link>
                                        </div>
                                    )
                                }

                            </div>

                            {/* User Menu Dropdown */}
                            {isUserMenuOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex="-1">
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                       tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                       tabIndex="-1" id="user-menu-item-1">Settings</a>
                                    <Link to="/" onClick={logOut} className="block px-4 py-2 text-sm text-gray-700"
                                          role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                              aria-current="page">Dashboard</Link>
                        <Link to="/"
                              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Daily
                            Notes</Link>
                        <Link to={`${localStorage.getItem('userAuthToken') ? '/noteform' : '/signinmodal'}`}
                           className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Add
                            notes</Link>
                        <Link to="/notetestimonial" onClick={fetchNote}
                           className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${localStorage.getItem('userAuthToken') ? '' : 'hidden'}`}>My
                            notes</Link>
                        <Link to="/about"
                           className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">My
                            notes</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
