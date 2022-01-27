import React from "react";
import Logo from "../assets/logo3.png"

export default function Home() {
    const [color, setColor] = React.useState(true);
    const [color1, setColor1] = React.useState(false);
    const [color2, setColor2] = React.useState(false);
    const handleColor = () => {
        setColor(true);
        setColor1(false);
        setColor2(false);
    };
    const handleColor2 = () => {
        setColor(false);
        setColor1(true);
        setColor2(false);
    };
    const handleColor3 = () => {
        setColor(false);
        setColor1(false);
        setColor2(true);
    };
    return (
        <div className="h-full">
            <div className="w-full lg:p-12 h-screen bg-gradient-to-r to-sky-600 from-blue-500">
                <div className="flex h-min justify-between">
                    <img src={Logo} className=" w-1/12"/>
                    <button className="rounded-full px-7 h-min p-2 text-white shadow-slate-400 bg-hijau">
                        <text className="">Login</text>
                    </button>
                </div>
                <div className="w-full flex justify-center py-5">
                    <div className="w-1/3 flex justify-between shadow-md text-white p-3 bg-blue-200 rounded-full">
                        <div onClick={handleColor} className={color === true ? "px-7 rounded-full py-1 bg-hijau" : "px-7 py-1"}>Home</div>
                        <div onClick={handleColor2} className={color1 === true ? "px-7 rounded-full py-1 bg-hijau" : "px-7 py-1"}>Explanation</div>
                        <div onClick={handleColor3} className={color2 === true ? "px-7 rounded-full py-1 bg-hijau" : "py-1 px-7"}>Contact</div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-slate-300">h</div>
        </div>
    )
}