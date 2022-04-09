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
    const handleProfile = () => {
        // console.log("halo");
        navigate("/dash-admin/profile");
    };
    const handleHome = () => {
        // console.log("halo");
        navigate("/dash-admin/home");
    };
    const handleMurid = () => {
        // console.log("halo");
        navigate("/dash-admin/murid");
    };
    const handleAngket = () => {
        // console.log("halo");
        navigate("/dash-admin/angket");
    };
    const logClear = () => {
        localStorage.clear()
        navigate("/login")
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
            <div className="">
                <div className="sm-max:hidden">
                    <div className="w-screen sm-max:hidden h-screen flex absolute">
                        <img src={Bg} alt="" className="w-screen h-screen" />
                    </div>
                    <div className="h-screen w-screen relative">
                        <div className="flex h-full pt-20 w-screen absolute justify-center">
                            {children}
                        </div>
                        <div className="relative flex items-center justify-center pt-7">
                            <div className="bg-gradient-to-r rounded-full h-16 relative w-5/6 flex shadow-md shadow-slate-300 justify-between items-center from-sky-500 to-sky-800">
                                <img src={Logo} alt="" className="h-10" />
                                <div className="w-full h-16 m-0 flex justify-center">
                                    <NavLink
                                        to="/dash-admin/home"
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
                                        to="/dash-admin/angket"
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
                                <div className="flex px-10 h-full rounded-r-full">
                                    <Menu>
                                        <MenuButton>
                                            <MenuIcon className="h-10 w-10 text-white" />
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem icon={<BiLogOut />} onClick={logClear}>Logout</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden">
                    <div className="w-screen sm-max:hidden h-screen flex absolute">
                        <img src={Bg} alt="" className="w-screen h-screen" />
                    </div>
                    <div className="h-screen w-screen relative">
                        <div className="flex h-full pt-5 w-screen absolute justify-center">
                            {children}
                        </div>
                        <div className="flex justify-between bg-gradient-to-r from-sky-500 to-sky-700 relative">
                            <Menu>
                                <MenuButton>
                                    <MenuIcon className="h-10 w-10 text-white" />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem icon={< CgProfile />} onClick={handleHome}>Home</MenuItem>
                                    <MenuItem icon={<BsFillFileTextFill />} onClick={handleAngket}>Angket</MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuButton>
                                    <BsPersonCircle className="h-10 w-10 decoration-white text-white" />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem icon={<BiLogOut />} onClick={logClear}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
