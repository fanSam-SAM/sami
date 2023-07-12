import React from "react";

function Headers(){ 
    return ( 
        <>
            <header className=" hadedad z-50 p-2 flex items-center justify-between w-full  shadow-md">
                <div className="sideheadrr flex items-center justify-center gap-2">
                    <img className=" h-10 w-10 rounded-full" src="https://fansam-sam-urban-space-goldfish-9797ggjxq97v2xq44-3000.preview.app.github.dev/logo.jpeg" alt="" />
                    <div className=" text-xl font-bold">
                        StellaSite
                    </div>
                </div>
                <div className="profilepart z-50 dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="">
                        <img className=" h-10 w-10 object-cover rounded-full shadow-md" src="https://wallpapercave.com/wp/wp3709137.jpg" alt="" />
                    </label>
                    <div tabIndex={0} className="dropd p-2 rounded-md w-[150px] dropdown-content">
                        <div className="dcont cursor-pointer p-2 hover:opacity-[.6] hover:scale-[.80] transition-all">
                            Profile
                        </div>
                        <div className="dcont cursor-pointer p-2 hover:opacity-[.6] hover:scale-[.80] transition-all">
                            Search
                        </div>
                        <div className="dcont cursor-pointer p-2 hover:opacity-[.6] hover:scale-[.80] transition-all">
                            Settings
                        </div>
                        <div className="dcont cursor-pointer p-2 hover:opacity-[.6] hover:scale-[.80] transition-all">
                            Account
                        </div>
                        <div className="dcont cursor-pointer p-2 hover:opacity-[.6] hover:scale-[.80] transition-all">
                            Signout
                        </div>
                    </div>
                </div>
            </header>

            <div className="navigations flex items-center justify-between gap-2 p-2">
                <div className="na1 flex items-center justify-center rounded-md shadow-md cursor-pointer hover:scale-[.80] transition-all w-full p-2 bg-base-100">
                    <i className="fa fa-home"></i>
                    <span>Home</span>
                </div>
                <div className="na1 flex items-center justify-center rounded-md shadow-md cursor-pointer hover:scale-[.80] transition-all w-full p-2 bg-base-100">
                    <i className="fa fa-search"></i>
                    <span>Search</span>
                </div>
                <div className="na1 flex items-center justify-center rounded-md shadow-md cursor-pointer hover:scale-[.80] transition-all w-full p-2 bg-base-100">
                    <i className="fa fa-gear"></i>
                    <span>Settings</span>
                </div>
            </div>
        </>
    );
}

export default Headers;