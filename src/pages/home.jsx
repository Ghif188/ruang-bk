import React from "react";
import Logo from "../assets/logo3.png"
import Heart from "../assets/heart.png"
import Comment from "../assets/comment.png"
import Cs from "../assets/cs.png"
import Hand from "../assets/hand.png"
import Costumer from "../assets/costumer.png"
import Business from "../assets/business.png"
import Lamp from "../assets/lamp.png"
import bgLap from "../assets/bglap.png"
import Whatsapp from "../assets/whatsapp.png"
import Twitter from "../assets/twitter.png"
import Instagram from "../assets/instagram.png"
import Telegram from "../assets/telegram.png"
import { MdCheckCircle } from "react-icons/md"
import { Center, Box, Circle, Avatar, position, Button, Image, List, ListItem, ListIcon, Icon } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function Home() {
    const list = [
        "Merencanakan kegiatan penyelesaian studi, perkembangan karier, serta kehidupan peserta didik di masa yang akan datang.",
        "Mengetahui hambatan dan kesulitan yang dihadapi peserta didik dalam studi, penyesuaian dengan lingkungan pendidikan dalam masyarakat."
    ];
    const numbers = [1, 2, 3, 4, 5];
    const isiBox = list.map((isilist) => {
        return <ListItem>
            <div className="flex my-3">
                <div className="">
                    <ListIcon as={MdCheckCircle} color='green.500' />
                </div>
                <div className="text-center">{isilist}</div>
            </div>
        </ListItem>;
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
    var BgMid = {
        height: "100%",
        backgroundImage: `url(${bgLap})`,
    };
    return (
        <div className="h-full">
            {/* Home page */}
            <section className="w-full lg:p-12 h-screen bg-gradient-to-r to-blue-700 from-blue-500">
                <div className="flex h-min justify-between">
                    <img src={Logo} className=" w-1/12" />
                    <Link to="/log">
                        <button className="rounded-full px-7 h-min p-2 text-white shadow-slate-400 bg-hijau">
                            <text className="">Login</text>
                        </button>
                    </Link>
                </div>
                <div className="w-full flex justify-center py-5">
                    <div className="w-1/2 flex justify-around shadow-md text-white p-3 bg-blues rounded-3xl">
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
                        <img src={Comment} alt="heart" className="w-full " />
                        {/* <p className="border-hijau border-b-8 rounded-md "></p> */}
                    </div>
                </div>
            </section>
            {/* Bimbingan konseling */}
            <section className="bg-gray-200 py-20 px-10">
                <div className="w-full justify-center flex">
                    <div className="">
                        <p className="text-3xl text-blue-700 font-bahnschrift font-medium">Bimbingan Konseling</p>
                        <div className="border-b-8 border-hijau rounded-md"></div>
                    </div>
                </div>
                <div className="flex h-max justify-center py-10 mx-10">
                    <div className="w-1/3 mr-5 bg-white rounded-xl py-5 shadow-lg">
                        <div className="flex justify-center">
                            <Circle
                                size='120px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Hand} alt="" className="h-20" />
                            </Circle>
                        </div>
                        <div className="border-b-8 border-hijau rounded-md my-5 mx-10" />
                        <div className="font-bold text-center text-lg">
                            Apa itu Bimbingan Konseling ?
                        </div>
                        <div className="text-lg my-5 text-gray-400 text-center mx-10">
                            serangkaian kegiatan berupa bantuan yang dilakukan seorang ahli pada konseling dengan cara tatap muka, baik secara individu atau beberapa orang dengan memberikan pengetahuan tambahan.
                        </div>
                    </div>
                    <div className="w-1/3 mr-5 bg-white rounded-xl py-5 shadow-lg">
                        <div className="flex justify-center">
                            <Circle
                                size='120px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Business} alt="" className="h-20" />
                            </Circle>
                        </div>
                        <div className="border-b-8 border-hijau rounded-md my-5 mx-10" />
                        <div className="font-bold text-center text-lg">
                            Apa itu Konseling ?
                        </div>
                        <div className="text-lg my-5 text-gray-400 text-center mx-10">
                            proses pemberian bantuan yang dilakukan oleh seorang ahli (disebut konselor/pembimbing) kepada individu yang mengalami sesuatu masalah (disebut konseli) yang bermuara pada teratasinya masalah yang dihadapi klien.
                        </div>
                    </div>
                    <div className="w-1/3 bg-white rounded-xl py-5 shadow-lg">
                        <div className="flex justify-center">
                            <Circle
                                size='120px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Costumer} alt="" className="h-20" />
                            </Circle>
                        </div>
                        <div className="border-b-8 border-hijau rounded-md my-5 mx-10" />
                        <div className="font-bold text-center text-lg">
                            Bidang Layanan
                        </div>
                        <div className="text-lg my-5 text-gray-400 text-center mx-10">
                            Konseling bisa dilakukan dalam berbagai bidang kehidupan, seperti di masyarakat, di dunia industri, membantu korban bencana alam, maupun di lingkungan pendidikan.
                        </div>
                    </div>
                </div>
                <div className="mx-10">
                    <Box
                        p='10'
                        boxShadow='lg'
                        bgColor='white'
                        rounded='xl'
                        height='100%'
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
                        <div className="border-t-8 border-hijau rounded-md my-5 mx-96 "></div>
                        <div className="font-bold text-xl h-full text-center">
                            <p>Tujuan Bimbingan Konseling ?</p>
                        </div>
                        <div className="flex justify-center text-gray-400 pt-3 text-lg">
                            <List>
                                {isiBox}
                                <div className="flex my-3">
                                    <div className="">
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                    </div>
                                    <div className="text-center items-center justify-center">Menyesuaikan diri dengan lingkungan pendidikan dan lingkungan masyarakat.</div>
                                </div>
                            </List>
                        </div>
                    </Box>
                </div>
            </section>
            {/* Midder */}
            <section className="bg-gradient-to-r justify-center flex p-32" style={BgMid}>
                <div className="text-center ">
                    <div className="text-white text-3xl mb-10">
                        <p>Daftar dan gunakan Secara Gratis</p>
                    </div>
                    <Button
                        size='lg'
                        height='50px'
                        px='100px'
                        tabIndex="3"
                        type='submit'
                        variant="solid"
                        bgColor="#38E569"
                        color="white"
                    >
                        Coba sekarang
                    </Button>
                </div>
                {/* <img src={bgLap} alt="asa" /> */}
            </section>
            {/* Contact */}
            <section className="px-16 py-16 w-full flex justify-center">
                <div className="text-left pb-12 w-1/4">
                    <div className="font-medium text-2xl pb-3">
                        <p>NEED HELP?</p>
                    </div>
                    <div className="text-gray-400 text-xl">
                        <p>Call Us :</p>
                    </div>
                    <div className="flex justify-start py-6">
                        <PhoneIcon boxSize={10} pt='2' />
                        <div className="pl-10">
                            <p className="text-xl font-medium">Phone  :</p>
                            <p className="text-gray-400 text-md">+62 813-1328-8050</p>
                        </div>
                    </div>
                    <div className="flex justify-start py-6">
                        <EmailIcon boxSize={10} pt='2' />
                        <div className="pl-10">
                            <p className="text-xl font-medium">Email  :</p>
                            <p className="text-gray-400 text-md">rizziqibarahim@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-start py-6">
                        <Icon as={MdLocationOn} boxSize={10} pt='2' />
                        <div className="pl-10">
                            <p className="text-xl font-medium">Address  :</p>
                            <p className="text-gray-400 text-md">Cikarang</p>
                        </div>
                    </div>
                </div>
                <div className=" w-2/4">
                    <div className="font-medium text-2xl pb-3 text-center">
                        <p>OVERVIEW</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-3/4 flex justify-around shadow-md text-white p-3 bg-blues rounded-3xl my-14">
                            <div onClick={handleColor} className={color === true ? " rounded-full py-1 px-10 bg-hijau" : " py-1 px-10"}>Home</div>
                            <div onClick={handleColor2} className={color1 === true ? " rounded-full py-1 px-10 bg-hijau" : " py-1 px-10"}>Explanation</div>
                            <div onClick={handleColor3} className={color2 === true ? " rounded-full py-1 px-10 bg-hijau" : "py-1 px-10 "}>Contact</div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={Cs} alt="cs" />
                    </div>
                </div>
                <div className="w-1/4">
                    <div className="font-medium text-2xl pb-3">
                        <p>CONNECT WITH US</p>
                    </div>
                    <div className="pt-6 flex justify-start">
                        <Image boxSize='60px' src={Instagram} alt="instagram" />
                        <p className="font-medium text-md p-4">Instagram</p>
                    </div>
                    <div className="pt-6 flex justify-start">
                        <Image boxSize='60px' src={Telegram} alt="telegram" />
                        <p className="font-medium text-md p-4">Telegram</p>
                    </div>
                    <div className="pt-6 flex justify-start">
                        <Image boxSize='60px' src={Twitter} alt="twitter" />
                        <p className="font-medium text-md p-4">Twitter</p>
                    </div>
                    <div className="pt-6 flex justify-start">
                        <Image boxSize='60px' src={Whatsapp} alt="whatsapp" />
                        <p className="font-medium text-md p-4">Whatsapp</p>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <section className="flex justify-center bg-gradient-to-r to-blue-500 from-blue-800 p-24">
                <Image src={Logo} alt="akhir" height='100px' />
            </section>
        </div>
    )
}