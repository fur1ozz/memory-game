import React, {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import {useDarkMode} from "../utils/HeaderUtils";
import {handleInputChange} from "../utils/TwoWayBinding";

const Register = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const navigate = useNavigate();

    const [regData, setRegData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = handleInputChange(regData, setRegData);
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isChecked) {
            console.log({ message: 'Please accept the Terms and Conditions' });
            return;
        }

        if (!regData.password || !regData.confirmPassword) {
            console.log({ message: 'Write your password' });
            return;
        }
        if (regData.password !== regData.confirmPassword) {
            console.log({ message: 'Passwords do not match' });
            return;
        }

        try {
            const response = await axios.post('http://localhost/api/register', {
                email: regData.email,
                password: regData.password,
            });

            console.log('Registration successful', response.data);
            setRegData({
                email: '',
                password: '',
                confirmPassword: '',
            });
            navigate("/login");
        } catch (error) {
            console.error('Registration failed', error.response ? error.response.data : error.message);
        }
    };
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };




    return (
        <section
            className="bg-gray-50 dark:bg-gray-900 bg-cover bg-center"
            style={{ backgroundImage: 'url("/img/others/landscape1.jpg")' }}
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-gray-700 bg-opacity-80 dark:bg-opacity-80">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-text md:text-2xl ">
                            Create an account
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
                                    value={regData.email}
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
                                    value={regData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg block w-full p-2.5 dark:bg-background dark:border-gray-600 dark:placeholder-gray-400"
                                    required=""
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-text">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    value={regData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-text sm:text-sm rounded-lg block w-full p-2.5 dark:bg-background dark:border-gray-600 dark:placeholder-gray-400"
                                    required=""
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-background dark:border-gray-600 outline-0 ring-0"
                                        required=""
                                        onChange={toggleCheckbox}
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the <a className="font-medium text-primary hover:underline" href="#">
                                        Terms and Conditions
                                    </a>
                                    </label>
                                </div>
                            </div>
                            <button
                                className="w-full text-white bg-primary hover:bg-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-100"
                                onClick={handleSubmit}
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">
                                Login here
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;