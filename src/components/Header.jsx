import {Link, useLocation} from "react-router-dom";
import {useDarkMode} from "../utils/HeaderUtils";
import React, {useState} from "react";

function Header2(){
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();


    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // const logedUserName = localStorage.getItem("username");

    return(
        <>
            <header className="absolute z-10 w-full border-b-[1px] dark:border-[#fff]/10 border-[#000]/10">
                <nav className="bg-background border-gray-200 px-4 lg:px-6 py-2.5 ">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-text">FlipMeha</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <button className="text-primary mr-4" onClick={toggleDarkMode}>
                                {isDarkMode === "dark" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" fill="currentColor" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                )}
                            </button>
                            <Link
                                to="/Login"
                                className="text-text bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            >
                                Login
                            </Link>
                            <button
                                onClick={handleMobileMenuToggle}
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-expanded={mobileMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div
                            className={`${
                                mobileMenuOpen ? "block" : "hidden"
                            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-col mt-4 font-normal lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <Link to="/" className={`transition ease-in block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/home' ? 'text-primary' : 'text-text'}`}>Home</Link>
                                </li>

                                <li>
                                    <Link to="/levels" className={`transition ease-in block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/levels' ? 'text-primary' : 'text-text'}`}>Levels</Link>
                                </li>
                                <li>
                                    <a href="#" className="transition ease-in block py-2 pr-4 pl-3 text-text border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Shop</a>
                                </li>
                                <li>
                                    <a href="#" className={`transition ease-in block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === '/leaderboards' ? 'text-primary' : 'text-text'}`}>Leaderboard</a>
                                </li>
                                <li>
                                    <a href="#" className="transition ease-in block py-2 pr-4 pl-3 text-text border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header2;