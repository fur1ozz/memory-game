import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import {useDarkMode} from "../utils/HeaderUtils";
import {handleInputChange} from "../utils/TwoWayBinding";

const Login = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const navigate = useNavigate();

    const [logData, setLogData] = useState({
        email: '',
        password: '',
    });

    const handleChange = handleInputChange(logData, setLogData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!logData.email) {
            console.log({ message: 'Write your email' });
            return;
        }
        if (!logData.password) {
            console.log({ message: 'Write your password' });
            return;
        }


        try {
            const response = await axios.post('http://localhost/api/login', {
                email: logData.email,
                pass: logData.password,
            });

            console.log('Login successful', response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userID', response.data.userID);
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('username', response.data.userName);
            setLogData({
                email: '',
                password: '',
            });
            navigate("/home");
        } catch (error) {
            console.error('Login failed', error.response ? error.response.data : error.message);
        }
    };

    return (
        <section
            className="bg-gray-50 dark:bg-gray-900 bg-cover bg-center"
            style={{ backgroundImage: 'url("/img/others/landscape1.jpg")' }}
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-gray-700 bg-opacity-80 dark:bg-opacity-80">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl">
                            Sign in to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-text">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={logData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg block w-full p-2.5 dark:bg-background dark:border-gray-600 dark:placeholder-gray-400"
                                    placeholder="name@email.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-text">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={logData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg block w-full p-2.5 dark:bg-background dark:border-gray-600 dark:placeholder-gray-400"
                                    required=""
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-background dark:border-gray-600 outline-0 ring-0"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                className="w-full text-white bg-primary hover:bg-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-100"
                                onClick={handleSubmit}
                            >
                                Sign in
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/register" className="font-medium text-primary hover:underline">
                                Sign up
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;