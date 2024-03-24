import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {

    const user = "";

    return (
        <>
            <header className="absolute z-10 w-full border-b-[1px] border-[#fff]/10">
                <nav className="bg-[#040606] border-gray-200 px-4 lg:px-6 py-2.5 bg-opacity-30">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">FlipMeha</span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <Link
                                to="/Login"
                                className="text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <section
                className="bg-background bg-cover bg-center bg-fixed"
                style={{backgroundImage: 'url("/img/page-bg/page-bg-4.jpg")'}}
            >
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-lg text-center flex flex-col items-center">
                            <h1
                                className="mb-4 text-7xl tracking-tight font-semibold lg:text-9xl text-white uppercase"
                                style={{fontFamily: 'Ribeye'}}
                            >
                                Flip Meha
                            </h1>
                            <p className="mb-4 text-lg font-light text-gray-200 max-w-screen-sm">Test your memory skills with our classic card game! Match pairs of cards to win while sharpening your concentration and memory recall abilities.</p>
                            <Link to={user ? '/levels' : '/login'} className="inline-flex text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Start Journey</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;