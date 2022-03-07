import React from "react";
import Bg from "../assets/bg-bagus.png"
import Logo from "../assets/logo3.png"
import Bgm from "../assets/bglogin2.png"
import Profile from "../pages/guru/dashboard";
import { BsPersonCircle, BsPeopleFill, BsFillFileTextFill } from 'react-icons/bs';
import { RiMenu4Line, RiLockPasswordLine } from "react-icons/ri"
import { BiLogOut, BiHomeCircle } from "react-icons/bi";
import { CgProfile, CgMenuLeftAlt } from "react-icons/cg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getProfile } from "../api/guru"
import { useQuery } from "react-query";
import { border, color, Menu, MenuButton, MenuList, MenuItem, Avatar, Slide, CloseButton, MenuGroup } from "@chakra-ui/react";
import { MenuIcon } from '@heroicons/react/solid'

export default function GuruLayout({ children }) {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(true);
    const [show1, setShow1] = React.useState(false);
    const handleProfile = () => {
        // console.log("halo");
        navigate("/dash-guru/profile");
    };
    const handleHome = () => {
        // console.log("halo");
        navigate("/dash-guru/home");
    };
    const handleMurid = () => {
        // console.log("halo");
        navigate("/dash-guru/murid");
    };
    const handleAngket = () => {
        // console.log("halo");
        navigate("/dash-guru/angket");
    };
    const logClear = () => {
        localStorage.clear()
        navigate("/log")
    }
    const { isLoading, isError, data, isFetching } = useQuery(
        [
            "profile",
            {
            },
        ],

        () =>
            getProfile({
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    const [showMenu, setShowMenu] = React.useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <React.Fragment>
            <div className="sm-max:hidden">
                <div className="w-screen sm-max:hidden h-screen flex absolute">
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
                                    to="/dash-guru/home"
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
                                    to="/dash-guru/murid"
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
                                    Murid
                                </NavLink>
                                <NavLink
                                    to="/dash-guru/angket"
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
                            <div className="flex px-10 h-full rounded-r-full border-l-2 border-white bg-hijau">
                                <Menu>
                                    <MenuButton>
                                        {isLoading ? (
                                            <BsPersonCircle className="h-12 w-12 decoration-white text-white" />
                                        ) : (
                                            <div className="bg-gray-500 p-0.5 shadow-inner shadow-gray-300 rounded-full">
                                                <Avatar src={data.foto} />
                                            </div>
                                        )}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem icon={< CgProfile />} onClick={handleProfile}>Profil</MenuItem>
                                        <MenuItem icon={< RiLockPasswordLine />}>Change password</MenuItem>
                                        <MenuItem icon={<BiLogOut />} onClick={logClear}>Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden h-screen w-screen">
                <div className="flex justify-between bg-gradient-to-r from-sky-500 to-sky-700">
                    <Menu>
                        <MenuButton>
                            <MenuIcon className="h-10 w-10 text-white" />
                        </MenuButton>
                        <MenuList>
                            <MenuItem icon={< CgProfile />} onClick={handleHome}>Home</MenuItem>
                            <MenuItem icon={< BsPeopleFill />} onClick={handleMurid}>Murid</MenuItem>
                            <MenuItem icon={<BsFillFileTextFill />} onClick={handleAngket}>Angket</MenuItem>
                            {/* <MenuGroup title="Akun">
                                <MenuItem icon={< CgProfile />} onClick={handleProfile}>Profil</MenuItem>
                                <MenuItem icon={< RiLockPasswordLine />}>Change password</MenuItem>
                                <MenuItem icon={<BiLogOut />} onClick={logClear}>Logout</MenuItem>
                            </MenuGroup> */}
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
                        <MenuList>
                            <MenuItem icon={< CgProfile />} onClick={handleProfile}>Profil</MenuItem>
                            <MenuItem icon={< RiLockPasswordLine />}>Change password</MenuItem>
                            <MenuItem icon={<BiLogOut />} onClick={logClear}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                {/* <div className="flex h-full w-full">
                    <div className="fixed w-20 h-20 left-0 rounded-br-full bg-opacity-60 bg-blue-500 text-white p-0.5">
                        <CgMenuLeftAlt className="w-14 h-14" onClick={() => {
                            return handleShowMenu();
                        }} />
                    </div>
                    <Slide in={showMenu} direction="left" animateOpacity>
                        <div className="h-screen w-4/10 opa bg-blue-100">
                            <div>
                                <CloseButton bg="white" opacity={0.6} onClick={() => {
                            return handleShowMenu();
                        }}/>
                            </div>
                            <div className="p-5">
                                <NavLink
                                    to="/dash-guru/home"
                                    style={({ isActive }) => {
                                        return {
                                            padding: '1rem',
                                            height: '100%',
                                            width: '100%',
                                            borderBottom: isActive ? '4px solid #38E569' : '',
                                            color: isActive ? 'black' : 'black',
                                            fontWeight: '500'
                                        }
                                    }}
                                >
                                    Home
                                </NavLink>
                            </div>
                            <div className="p-5">
                                <NavLink
                                    to="/dash-guru/murid"
                                    style={({ isActive }) => {
                                        return {
                                            padding: '1rem',
                                            height: '100%',
                                            width: '100%',
                                            borderBottom: isActive ? '4px solid #38E569' : '',
                                            color: isActive ? 'black' : 'black',
                                            fontWeight: '500'
                                        }
                                    }}
                                >
                                    Murid
                                </NavLink>
                            </div>
                            
                            <div className="p-5">
                                <NavLink
                                    to="/dash-guru/angket"
                                    style={({ isActive }) => {
                                        return {
                                            padding: '1rem',
                                            height: '100%',
                                            width: '100%',
                                            borderBottom: isActive ? '4px solid #38E569' : '',
                                            color: isActive ? 'black' : 'black',
                                            fontWeight: '500'
                                        }
                                    }}
                                >
                                    Angket
                                </NavLink>
                            </div>
                        </div>
                    </Slide>
                    <div className=" w-full h-screen">
                        {children}
                    </div>
                </div> */}
            </div>
        </React.Fragment>
    );
}
