import React from "react";
import Logo from "../assets/logo3.png"
import Heart from "../assets/heart.png"
import Hand from "../assets/hand.png"
import Lamp from "../assets/lamp.png"
import { Center, Box, Circle, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Home() {
    const list = [
        "Merencanakan kegiatan penyelesaian studi, perkembangan karier, serta kehidupan peserta didik di masa yang akan datang.",
        "Menyesuaikan diri dengan lingkungan pendidikan dan lingkungan masyarakat.",
        "Mengetahui hambatan dan kesulitan yang dihadapi peserta didik dalam studi, penyesuaian dengan lingkungan pendidikan dalam masyarakat."
    ];
    const numbers = [1,2,3,4,5];
    const isiBox = list.map((isilist)=>{
        return <li>{isilist}</li>;
    });
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
    var Handed = {
        height: "50%",
        backgroundImage: `url(${Hand})`
    };
    return (
        <div className="h-full">
            <div className="w-full lg:p-12 h-screen bg-gradient-to-r to-blue-700 from-blue-500">
                <div className="flex h-min justify-between">
                    <img src={Logo} className=" w-1/12" />
                    <Link to="/log">
                        <button className="rounded-full px-7 h-min p-2 text-white shadow-slate-400 bg-hijau">
                            <text className="">Login</text>
                        </button>
                    </Link>
                </div>
                <div className="w-full flex justify-center py-5">
                    <div className="w-1/2 flex justify-around shadow-md text-white p-3 bg-blue-200 bg-opacity-50 rounded-3xl">
                        <div onClick={handleColor} className={color === true ? "px-7 rounded-full py-1 bg-hijau" : "px-7 py-1"}>Home</div>
                        <div onClick={handleColor2} className={color1 === true ? "px-7 rounded-full py-1 bg-hijau" : "px-7 py-1"}>Explanation</div>
                        <div onClick={handleColor3} className={color2 === true ? "px-7 rounded-full py-1 bg-hijau" : "py-1 px-7"}>Contact</div>
                    </div>
                </div>
                <div className="w-full px-4 flex py-10 justify-between">
                    <div className="text-white w-6/10 h-1/2">
                        <p className="text-5xl py-10">Ruang BK</p>
                        <p className="w-2/3 text-xl mb-4">Aplikasi Layanan Bimbingan dan Konseling. Mempermudah kerja Konselor/Guru Bimbingan dan Konseling dalam proses Management (Pengelolaan), Delivery (Penyampaian) and Connectivity (Konektivitas).</p>
                        <div className=" border-b-8 border-hijau w-1/2 rounded-md"></div>
                    </div>
                    {/* <div className="w-1/10"></div> */}
                    <div className="w-3/10">
                        <img src={Heart} alt="heart" className="w-full " />
                        {/* <p className="border-hijau border-b-8 rounded-md "></p> */}
                    </div>
                </div>
            </div>
            <div className="w-full h-full bg-gray-200 py-24 px-10">
                <div className="w-full h-1/3 justify-center flex">
                    <div className="">
                        <p className="text-3xl text-blue-700 font-Montserrat font-medium">Bimbingan Konseling</p>
                        <div className="border-b-8 border-hijau rounded-md"></div>
                    </div>
                </div>
                <div className="h-2/3 flex justify-center">
                    <div className="w-1/3">
                        <Box
                            mx='5'
                            my='20'
                            p='10'
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                        >
                            <div className="h-full flex justify-center">
                                <Circle
                                    size='120px'
                                    bg='#2776ED'
                                    color='white'
                                >
                                    <img src={Hand} alt="" className="h-20" />
                                </Circle>
                            </div>
                            <div className="font-bold text-xl h-full text-center">
                                <div className="border-t-8 border-hijau rounded-md my-5 mx-20"></div>
                                <p>Apa itu Bimbingan Konseling ?</p>
                            </div>
                            <div className="flex justify-center text-center text-gray-400 px-5 pt-4 text-lg">
                                <p>serangkaian kegiatan berupa bantuan yang dilakukan seorang ahli pada konseling dengan cara tatap muka, baik secara individu atau beberapa orang dengan memberikan pengetahuan tambahan.</p>
                            </div>
                        </Box>
                    </div>
                    <div className="w-2/3">
                        <Box
                            mx='5'
                            my='20'
                            p='10'
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                        >
                            <div className="h-full flex justify-center">
                                <Circle
                                    size='120px'
                                    bg='#2776ED'
                                    color='white'
                                >
                                    <img src={Lamp} alt="" className="h-20" />
                                </Circle>
                            </div>
                            <div className="font-bold text-xl h-full text-center">
                                <div className="border-t-8 border-hijau rounded-md my-5 mx-80"></div>
                                <p>Tujuan Bimbingan Konseling ?</p>
                            </div>
                            <div className="flex justify-center text-gray-400 px-5 pt-5 text-lg">
                                <ol className="px-4 py-3">
                                    {isiBox}
                                </ol>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}