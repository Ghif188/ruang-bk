import React from "react";
import Bg from "../assets/bg-bagus.png"
import Logo from "../assets/logo3.png"
import Bgm from "../assets/bglogin2.png"
import Profile from "../pages/guru/dashboard";
import { BsPersonCircle } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { border, color, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function GuruLayout({ children }) {
    const navigate = useNavigate();
    const [show, setShow] = React.useState(true);
    const [show1, setShow1] = React.useState(false);
    const handleShow = () => {
        console.log("halo");
        navigate("/dash-guru/profile");
    };
    const logClear = () => {
        localStorage.clear()
        navigate("/log")
    }
    return (
        <React.Fragment>
            <div className="">
                <div className="w-screen h-screen flex absolute">
                    <img src={Bg} alt="" className="w-screen h-screen" />
                </div>
                <div className="h-screen w-screen relative">
                    <div className="flex h-full pt-16 w-screen absolute justify-center">
                        {children}
                    </div>
                    <div className="bg-gradient-to-r h-16 relative flex justify-between items-center from-sky-500 to-sky-700 w-full">
                        <img src={Logo} alt="" className="h-14" />
                        <div className="w-full h-16 m-0 flex justify-center">
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
                        <div className="flex mr-10 rounded-full bg-black">
                            <Menu>
                                <MenuButton>
                                    <BsPersonCircle className="h-12 w-12 decoration-white text-white"/>
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={handleShow}>Profil</MenuItem>
                                    <MenuItem>Change password</MenuItem>
                                    <MenuItem onClick={logClear}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
