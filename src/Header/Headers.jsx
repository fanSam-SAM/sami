import React from "react";

function Headers(){ 
    return ( 
        <>
            <header className=" p-2 flex items-center justify-between w-full bg-base-100 shadow-md">
                <div className="sideheadrr flex items-center justify-center gap-2">
                    <img className=" h-10 w-10 rounded-full" src="https://fansam-sam-urban-space-goldfish-9797ggjxq97v2xq44-3000.preview.app.github.dev/logo.jpeg" alt="" />
                    <div className=" text-xl">
                        StellaSite
                    </div>
                </div>
                <div className="profilepart dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="">
                        <img className=" h-10 w-10 rounded-full shadow-md" src="https://wallpapercave.com/wp/wp3709137.jpg" alt="" />
                    </label>
                    <div className="dropd dropdown-content">
                        <div className="dcont">
                            Profile
                        </div>
                        <div className="dcont">
                            Search
                        </div>
                        <div className="dcont">
                            Settings
                        </div>
                        <div className="dcont">
                            Account
                        </div>
                        <div className="dcont">
                            Signout
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Headers;