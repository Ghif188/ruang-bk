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
import { Center, Box, Circle, Avatar, position, Button, Image, List, ListItem, ListIcon, Icon, useMediaQuery } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
// import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";

export default function Home() {
    const list = [
        "Merencanakan kegiatan penyelesaian studi, perkembangan karier, serta kehidupan peserta didik di masa yang akan datang.",
        "Mengetahui hambatan dan kesulitan yang dihadapi peserta didik dalam studi, penyesuaian dengan lingkungan pendidikan dalam masyarakat.",
        "Menyesuaikan diri dengan lingkungan pendidikan dan lingkungan masyarakat."
    ];
    const numbers = [1, 2, 3, 4, 5];
    const isiBox = list.map((isilist) => {
        return <ListItem>
            <div className="flex my-3 sm-max:my-1">
                <div className="">
                    <ListIcon as={MdCheckCircle} color='green.500' />
                </div>
                <div className="text-center sm-max:text-justify">{isilist}</div>
            </div>
        </ListItem>;
    });
    const [MediaQ] = useMediaQuery('(min-width: 1024px)');
    const [color, setColor] = React.useState(true);
    const [color1, setColor1] = React.useState(false);
    const [color2, setColor2] = React.useState(false);
    const navigate = useNavigate();
    const clearLStoLog = () => {
        localStorage.clear();
        navigate("/login");
    }
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
    var BgMid = {
        height: "100%",
        backgroundImage: `url(${bgLap})`,
    };
    return (
        <div className="h-full scroll-smooth">
            {/* Home page */}
            <section id="home" className="w-full lg:p-12 p-4 h-screen bg-gradient-to-r to-blue-700 from-blue-500">
                <div className="flex h-min justify-between">
                    <img src={Logo} className="w-1/12 sm-max:w-4/12" />
                    <a href="/login">
                        <button className="rounded-full px-7 h-min p-2 text-white shadow-slate-400 bg-hijau sm-max:px-4 sm-max:text-sm sm-max:py-1">
                            <text className="">Login</text>
                        </button>
                    </a>
                </div>
                <div className="w-full flex justify-center py-5 sm-max:hidden">
                    <div className="w-1/2 flex justify-around shadow-md text-white p-3 bg-blues rounded-3xl">
                        <Link smooth={true} duration={500} to="home"><div className="px-7 rounded-full py-1 hover:bg-hijau">Home</div></Link>
                        <Link smooth={true} duration={700} to="bk"><div className="px-7 rounded-full py-1 hover:bg-hijau">Bimbingan Konseling</div></Link>
                        <Link smooth={true} duration={1000} to="contact"><div className="px-7 rounded-full py-1 hover:bg-hijau">Contact</div></Link>
                    </div>
                </div>
                <div className="w-full px-4 md:flex py-10 justify-center sm-max:py-2">
                    <div className="text-white w-6/10 h-1/2 sm-max:w-full sm-max:py-4">
                        <p className="text-5xl py-10 sm-max:text-2xl sm-max:py-2">Ruang BK</p>
                        <p className="w-2/3 text-xl mb-4 sm-max:text-sm sm-max:w-full">Aplikasi Layanan Bimbingan dan Konseling. Mempermudah kerja Konselor/Guru Bimbingan dan Konseling dalam proses Management (Pengelolaan), Delivery (Penyampaian) and Connectivity (Konektivitas).</p>
                        <div className=" border-b-8 border-hijau w-1/2 rounded-md"></div>
                    </div>
                    {/* <div className="w-1/10"></div> */}
                    <div className="w-3/10 sm-max:w-full sm-max:pt-6">
                        <img src={Comment} alt="heart" className="w-full sm-max:w-8/12 sm-max:float-right" />
                        {/* <p className="border-hijau border-b-8 rounded-md "></p> */}
                    </div>
                </div>
            </section>
            {/* Bimbingan konseling */}
            <section id="bk" className="bg-gray-200 py-20 px-10 sm-max:px-4">
                {/* title */}
                <div className="w-full justify-center flex">
                    <div className="text-center">
                        <p className="text-3xl sm-max:text-xl text-blue-700 font-bahnschrift font-medium">Bimbingan Konseling</p>
                        <div className="border-b-8 border-hijau rounded-md"></div>
                    </div>
                </div>
                {/* 3 box */}
                <div className="md:flex h-max justify-center py-10 mx-10 sm-max:py-2 sm-max:mx-2">
                    <div className="w-1/3 sm-max:w-full md:mr-5 bg-white rounded-xl py-5 sm-max:py-3 sm-max:my-3 shadow-lg">
                        <div className="flex justify-center sm-max:hidden">
                            <Circle
                                size='120px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Hand} alt="" className="h-20" />
                            </Circle>
                        </div>
                        <div className="flex justify-center md:hidden">
                            <Circle
                                size='60px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Hand} alt="" className="h-10" />
                            </Circle>
                        </div>
                        <div className="border-b-8 border-hijau rounded-md my-5 mx-32 sm-max:my-2 sm-max:mx-20" />
                        <div className="font-bold text-center text-lg sm-max:text-base">
                            Apa itu Bimbingan Konseling ?
                        </div>
                        <div className="text-lg my-5 sm-max:text-sm text-gray-400 text-center mx-10 sm-max:mx-3 sm-max:my-2">
                            serangkaian kegiatan berupa bantuan yang dilakukan seorang ahli pada konseling dengan cara tatap muka, baik secara individu atau beberapa orang dengan memberikan pengetahuan tambahan.
                        </div>
                    </div>
                    <div className="w-1/3 sm-max:w-full md:mr-5 bg-white rounded-xl py-5 sm-max:py-3 sm-max:my-3 shadow-lg">
                        <div className="flex justify-center sm-max:hidden">
                            <Circle
                                size='120px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Business} alt="" className="h-20" />
                            </Circle>
                        </div>
                        <div className="flex justify-center md:hidden">
                            <Circle
                                size='60px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Business} alt="" className="h-10" />
                            </Circle>
                        </div>
                        <div className="border-b-8 border-hijau rounded-md my-5 mx-32 sm-max:my-2 sm-max:mx-20" />
                        <div className="font-bold text-center text-lg sm-max:text-base">
                            Apa itu Konseling ?
                        </div>
                        <div className="text-lg my-5 sm-max:text-sm text-gray-400 text-center mx-10 sm-max:mx-3 sm-max:my-2">
                            proses pemberian bantuan yang dilakukan oleh seorang ahli (disebut konselor/pembimbing) kepada individu yang mengalami sesuatu masalah (disebut konseli) yang bermuara pada teratasinya masalah yang dihadapi klien.
                        </div>
                    </div>
                    <div className="w-1/3 sm-max:w-full bg-white rounded-xl py-5 sm-max:py-3 sm-max:my-3 sm-max:mb-1 shadow-lg">
                        <div className="flex justify-center sm-max:hidden">
                            <Circle
                                size='120px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Costumer} alt="" className="h-20" />
                            </Circle>
                        </div>
                        <div className="flex justify-center md:hidden">
                            <Circle
                                size='60px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Costumer} alt="" className="h-10" />
                            </Circle>
                        </div>
                        <div className="border-b-8 border-hijau rounded-md my-5 mx-32 sm-max:my-2 sm-max:mx-20" />
                        <div className="font-bold text-center text-lg sm-max:text-base">
                            Bidang Layanan
                        </div>
                        <div className="text-lg my-5 sm-max:text-sm text-gray-400 text-center mx-10 sm-max:mx-3 sm-max:my-2">
                            Konseling bisa dilakukan dalam berbagai bidang kehidupan, seperti di masyarakat, di dunia industri, membantu korban bencana alam, maupun di lingkungan pendidikan.
                        </div>
                    </div>
                </div>
                {/* box */}
                <div className="mx-10 sm-max:mx-2">
                    <Box
                        p='10'
                        boxShadow='lg'
                        bgColor='white'
                        rounded='xl'
                        height='100%'
                    >
                        <div className="h-full flex justify-center sm-max:hidden">
                            <Circle
                                size='120px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Lamp} alt="" className="h-20" />
                            </Circle>
                        </div>
                        <div className="flex justify-center md:hidden">
                            <Circle
                                size='60px'
                                bg='#2776ED'
                                color='white'
                            >
                                <img src={Lamp} alt="" className="h-10" />
                            </Circle>
                        </div>
                        <div className="border-t-8 border-hijau rounded-md my-5 mx-96 sm-max:my-2 sm-max:mx-10"></div>
                        <div className="font-bold text-xl h-full text-center sm-max:text-base">
                            <p>Tujuan Bimbingan Konseling ?</p>
                        </div>
                        <div className="md:flex md:justify-center text-gray-400 pt-3 sm-max:pt-0 text-lg sm-max:text-sm">
                            <List>
                                {isiBox}
                                {/* <div className="flex my-3">
                                    <div className="">
                                        <ListIcon as={MdCheckCircle} color='green.500' />
                                    </div>
                                    {/* <div className="text-center items-center justify-center"></div>
                                </div> */}
                            </List>
                        </div>
                    </Box>
                </div>
            </section>
            {/* Midder */}
            <section id="midder" className="bg-gradient-to-r justify-center flex p-32 sm-max:p-12" style={BgMid}>
                <div className="text-center ">
                    <div className="text-white text-3xl mb-10 sm-max:text-base sm-max:mb-5">
                        <p>Daftar dan gunakan Secara Gratis</p>
                    </div>
                    <Button
                        size={MediaQ ? 'lg' : 'md'}
                        height={MediaQ ? '50px' : '40px'}
                        px={MediaQ ? '100px' : '50px'}
                        tabIndex="3"
                        type='submit'
                        variant="solid"
                        bgColor="#38E569"
                        color="white"
                        onClick={clearLStoLog}
                    >
                        Coba sekarang
                    </Button>
                </div>
                {/* <img src={bgLap} alt="asa" /> */}
            </section>
            {/* Contact */}
            <section id="contact" className="px-16 py-16 w-full flex justify-center sm-max:justify-between sm-max:px-2">
                {/* left */}
                <div className="text-left pb-12 w-1/4 sm-max:w-1/2">
                    <div className="font-medium text-2xl sm-max:text-xl pb-3">
                        <p>NEED HELP?</p>
                    </div>
                    <div className="text-gray-400 text-xl sm-max:text-base">
                        <p>Call Us :</p>
                    </div>
                    <div className="flex justify-start py-6">
                        {MediaQ ? <PhoneIcon boxSize={10} pt='2' /> : <PhoneIcon boxSize={8} pt='2' />}
                        <div className="pl-10 sm-max:pl-2">
                            <p className="text-xl sm-max:text-sm font-medium">Phone  :</p>
                            <p className="text-gray-400 sm-max:text-xs">+62 813-1328-8050</p>
                        </div>
                    </div>
                    <div className="flex justify-start py-6">
                        {MediaQ ? <EmailIcon boxSize={10} pt='2' /> : <EmailIcon boxSize={8} pt='2' />}
                        <div className="pl-10 sm-max:pl-2">
                            <p className="text-xl sm-max:text-sm font-medium">Email  :</p>
                            <p className="text-gray-400 sm-max:text-xs">rizziqibarahim@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-start py-6">
                        {MediaQ ? <Icon as={MdLocationOn} boxSize={10} pt='2' /> : <Icon as={MdLocationOn} boxSize={8} pt='2' />}
                        <div className="pl-10 sm-max:pl-2">
                            <p className="text-xl sm-max:text-sm font-medium">Address  :</p>
                            <p className="text-gray-400 sm-max:text-xs">Cikarang</p>
                        </div>
                    </div>
                </div>
                {/* mid */}
                <div className=" w-2/4 sm-max:hidden">
                    <div className="font-medium text-2xl pb-3 text-center">
                        <p>OVERVIEW</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-3/4 flex justify-around shadow-md text-white p-3 bg-blues rounded-3xl my-14">
                            <Link smooth={true} duration={1000} to="home"><div className="px-8 rounded-full py-1 hover:bg-hijau">Home</div></Link>
                            <Link smooth={true} duration={800} to="bk"><div className="px-8 rounded-full py-1 hover:bg-hijau">Bimbingan Konseling</div></Link>
                            <Link smooth={true} duration={400} to="contact"><div className="px-8 rounded-full py-1 hover:bg-hijau">Contact</div></Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src={Cs} alt="cs" />
                    </div>
                </div>
                {/* right */}
                <div className="w-1/4 sm-max:w-1/2">
                    <div className="font-medium text-2xl pb-3 sm-max:hidden">
                        <p>CONNECT WITH US</p>
                    </div>
                    <div className="pt-6 flex justify-start sm-max:justify-center">
                        {MediaQ ? <Image boxSize='60px' src={Instagram} alt="instagram" /> : <Image boxSize='50px' src={Instagram} alt="instagram" />}
                        <p className="font-medium text-md p-4 sm-max:hidden">Instagram</p>
                    </div>
                    <div className="pt-6 flex justify-start sm-max:justify-center">
                        {MediaQ ? <Image boxSize='60px' src={Telegram} alt="telegram" /> : <Image boxSize='50px' src={Telegram} alt="telegram" />}
                        <p className="font-medium text-md p-4 sm-max:hidden">Telegram</p>
                    </div>
                    <div className="pt-6 flex justify-start sm-max:justify-center">
                        {MediaQ ? <Image boxSize='60px' src={Twitter} alt="twitter" /> : <Image boxSize='50px' src={Twitter} alt="twitter" />}
                        <p className="font-medium text-md p-4 sm-max:hidden">Twitter</p>
                    </div>
                    <div className="pt-6 flex justify-start sm-max:justify-center">
                        {MediaQ ? <Image boxSize='60px' src={Whatsapp} alt="whatsapp" /> : <Image boxSize='50px' src={Whatsapp} alt="whatsapp" />}
                        <p className="font-medium text-md p-4 sm-max:hidden">Whatsapp</p>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <section id="footer" className="flex justify-center bg-gradient-to-r to-blue-500 from-blue-800 p-24 sm-max:p-12">
                {MediaQ ? <Image src={Logo} alt="akhir" height='100px' /> : <Image src={Logo} alt="akhir" height='50px' />}
            </section>
        </div>
    )
}