import React from "react";
import Bg from "../assets/bg-bagus.png"
import Logo from "../assets/logo3.png"
import Bgm from "../assets/bglogin2.png"
import Profile from "../pages/siswa/dashboard";
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { RiMenu4Line, RiLockPasswordLine } from "react-icons/ri"
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { getProfileSiswa } from '../api/siswa';
import { useQuery } from "react-query";
import { NavLink, Link } from "react-router-dom";
import { border, color, Menu, MenuButton, MenuList, MenuItem, Avatar } from "@chakra-ui/react";

export default function MuridLayout({ children }) {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(true);
    const [show1, setShow1] = React.useState(false);
    const handleShow = () => {
        console.log("halo");
        navigate("/dash-siswa/profile");
    };
    const logClear = () => {
        localStorage.clear()
        navigate("/login")
    }
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
        </React.Fragment>
    );
}
