import React from "react";

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-evenly bg-gray-200 py-4 px-8">
            <nav className="flex flex-col md:flex-row items-center gap-4 font-semibold w-full md:w-auto justify-evenly">
                <a href="https://github.com/VictorMonk/sticky-notes" className="font-bold text-black">
                    Project Repo
                </a>
                <a href="https://github.com/VictorMonk" className="font-bold text-black">
                    Github
                </a>
                <a href="https://www.linkedin.com/in/victor-monk-43649b243/" className="font-bold text-black">
                    LinkedIn
                </a>
            </nav>
            <div className="flex flex-col md:flex-row items-center justify-evenly mt-4 md:mt-0">
                <div className="mb-2 md:mb-0 md:mr-4">Logo</div>
                <div>Copyright</div>
            </div>
        </div>
    );
}

export default Footer;
