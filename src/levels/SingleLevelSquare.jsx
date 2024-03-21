import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const SingleLevelSquare = ({ level, star1, star2, star3, unlocked }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const lastPath = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

    function test1() {
        console.log("test1")
        navigate(`level?level=${level}`);
    }
    let buttonColor = "bg-primary"

    if (lastPath === "main") {
        buttonColor = "bg-[#8F6E99]";
    } else if (lastPath === "time-trial") {
        buttonColor = "bg-[#BB524B]";
    }
    
    return (
        <button type="button" disabled={!unlocked} className={"w-36 h-36 rounded-lg m-4 p-5 justify-center items-center flex flex-col drop-shadow-lg transition duration-300 relative overflow-hidden " + (unlocked ? "cursor-pointer hover:scale-105" : "cursor-not-allowed") + " " + buttonColor} onClick={test1}>
            <div className="flex text-gold text-2xl mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill={star1 ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill={star2 ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill={star3 ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mt-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
            </div>
            <div className="font-bold text-white text-xl">
                level: {level}
            </div>
            {!unlocked && (
                <>
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                    <div className="absolute">
                        <img
                            src="/img/others/lock.png"
                            className="w-[50px]" alt=""
                        />
                    </div>
                </>
            )}
        </button>
    );
};

export default SingleLevelSquare;