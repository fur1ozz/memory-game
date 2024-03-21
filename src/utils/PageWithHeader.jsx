import React from 'react';
import Header from "../components/Header";

const PageWithHeader = ({ children }) => {
    return (
        <>
            <Header />
            <section
                className="bg-background bg-cover bg-center bg-fixed">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
                    {children}
                </div>
            </section>
        </>
    );
};

export default PageWithHeader;