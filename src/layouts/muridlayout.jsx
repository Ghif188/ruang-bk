import React from "react";
import Bg from "../assets/bg-bagus.png"
import Logo from "../assets/logo3.png"
import Bgm from "../assets/bglogin2.png"
import Profile from "../pages/siswa/dashboard";
import { BsPersonCircle, BsFillFileTextFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { RiMenu4Line, RiLockPasswordLine } from "react-icons/ri"
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { getProfileSiswa } from '../api/siswa';
import { useQuery } from "react-query";
import { NavLink, Link } from "react-router-dom";
import { border, color, Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";
import { MenuIcon } from '@heroicons/react/solid'

export default function MuridLayout({ children }) {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(true);
    const [show1, setShow1] = React.useState(false);
    const handleShow = () => {
        console.log("halo");
        navigate("/dash-siswa/profile");
    };
    const logClear = () => {
        window.localStorage.clear();
        navigate("/login");
        window.location.reload();
    }
    const handleProfile = () => {
        // console.log("halo");
        navigate("/dash-siswa/profile");
    };
    const handleHome = () => {
        // console.log("halo");
        navigate("/dash-siswa/home");
    };
    const handleAngket = () => {
        // console.log("halo");
        navigate("/dash-siswa/angket");
    };
    const { isLoading, isError, data, isFetching } = useQuery(
        [
            "profile-siswa",
            {
            },
        ],

        () =>
            getProfileSiswa({
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    return (
        <React.Fragment>
            <div className="">
                <div className="sm-max:hidden">
                    <div className="w-screen h-screen flex absolute">
                        <img src={Bg} alt="" className="w-screen h-screen" />
                    </div>
                    <div className="h-screen w-screen relative">
                        <div className="flex h-full pt-20 w-screen absolute justify-center">
                            {children}
                        </div>
                        <div className="relative flex items-center justify-center pt-7">
                            <div className="bg-gradient-to-r rounded-full h-16 relative w-5/6 flex shadow-md shadow-slate-300 justify-between items-center from-sky-500 to-sky-700">
                                <img src={Logo} alt="" className="h-10" />
                                <div className="w-full h-16 m-0 flex justify-center">
                                    <NavLink
                                        to="/dash-siswa/home"
                                        style={({ isActive }) => {
                                            return {
                                                backgroundColor: isActive ? 'rgb(14, 165, 233)' : '',
                                                padding: '1rem',
                                                height: '100%',
                                                borderBottom: isActive ? '4px solid #38E569' : '',
                                                color: 'white',
                                                fontWeight: '500'
                                            }
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/dash-siswa/angket"
                                        style={({ isActive }) => {
                                            return {
                                                backgroundColor: isActive ? 'rgb(14, 165, 233)' : '',
                                                padding: '1rem',
                                                height: '100%',
                                                borderBottom: isActive ? '4px solid #38E569' : '',
                                                color: 'white',
                                                fontWeight: '500'
                                            }
                                        }}
                                    >
                                        Angket
                                    </NavLink>
                                </div>
                                <div className="flex px-10 h-full rounded-r-full ">
                                    <Menu>
                                        <MenuButton>
                                            <MenuIcon className="h-10 w-10 text-white" />
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem icon={< CgProfile />} onClick={handleShow}>Profil</MenuItem>
                                            <MenuItem icon={< RiLockPasswordLine />}>Change password</MenuItem>
                                            <MenuItem icon={<BiLogOut />} onClick={logClear}>Logout</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden">
                    <div className="w-full sm-max:hidden h-screen flex absolute">
                        <img src={Bg} alt="" className="w-full h-screen" />
                    </div>
                    <div className="h-screen w-full relative">
                        <div className="flex h-full pt-5 w-full absolute justify-center">
                            {children}
                        </div>
                        <div className="flex justify-between bg-gradient-to-r from-sky-500 to-sky-700 relative">
                            <Menu>
                                <MenuButton>
                                    <MenuIcon className="h-10 w-10 text-white" />
                                </MenuButton>
                                <MenuList
                                p='2px'
                                bgColor='gray.100'
                                >
                                    <MenuItem mb='2px' rounded='lg' _hover={{ fontWeight:'semibold', bgColor:'gray.300'}} icon={< CgProfile />} onClick={handleHome}>Home</MenuItem>
                                    <MenuItem rounded='lg' _hover={{ fontWeight:'semibold', bgColor:'gray.300'}} icon={<BsFillFileTextFill />} onClick={handleAngket}>Angket</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton>
                                    {isLoading ? (
                                        <BsPersonCircle className="h-10 w-10 decoration-white text-white" />
                                    ) : (
                                        <div className="bg-white p-0.5 m-1 shadow-inner shadow-gray-300 rounded-full">
                                            <Avatar h={10} w={10} src={data.foto} />
                                        </div>
                                    )}
                                </MenuButton>
                                <MenuList
                                p='2px'
                                bgColor='gray.100'
                                >
                                    <MenuItem mb='2px' rounded='lg' _hover={{ fontWeight:'semibold', bgColor:'gray.300'}} icon={< CgProfile />} onClick={handleProfile}>Profil</MenuItem>
                                    <MenuItem mb='2px' rounded='lg' _hover={{ fontWeight:'semibold', bgColor:'gray.300'}} icon={< RiLockPasswordLine />}>Change password</MenuItem>
                                    <MenuItem rounded='lg' _hover={{ fontWeight:'semibold', bgColor:'gray.300'}} icon={<BiLogOut />} onClick={logClear}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
