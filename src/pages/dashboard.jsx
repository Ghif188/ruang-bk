import { Link, Navigate } from "react-router-dom";
import { Icon } from "@chakra-ui/icons";
import { BsPersonCircle } from 'react-icons/bs';
import { Children } from "react";

export default function Dashboard({ children }) {
    // const keluar =() =>{
    //     localStorage.clear();
    // }
    const nama = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    return (
        <div className="h-screen flex w-screen">
            <div className=" w-3/12 p-12 float-left bg-gradient-to-b from-sky-900 to-blue-400">
                <Link to="/dash/profile">
                    <div className="flex">
                        <div className="rounded-full  w-14 mb-5 bg-black">
                            <Icon as={BsPersonCircle} w={14} h={14} color="whiteAlpha.900" />
                        </div>
                        <div className="ml-4 mt-1 text-white">
                            <div className="font-bold">{nama}</div>
                            <div>{role === "1" ? "admin" : ""}</div>
                        </div>
                    </div>
                </Link>
                <div className="pt-10 border-white border-t-2">
                    <Link to="/dash/manage-user">
                        <div className="rounded-xl text-lg border-2 text-center p-1 border-white bg-sky-900 text-white">
                            All Profile
                        </div>
                    </Link>
                    <div className="rounded-xl text-lg border-2 text-center p-1 border-white mt-10 bg-sky-900 text-white">
                        Angket Tes E-MBTI
                    </div>
                    <div className="rounded-xl text-lg border-2 text-center p-1 border-white mt-10 bg-sky-900 text-white">
                        Angket Sosiometri
                    </div>
                    <div className="rounded-xl text-lg border-2 text-center p-1 border-white mt-10 bg-sky-900 text-white">
                        Buat Angket
                    </div>
                </div>
            </div>
            <div className="w-9/12">{children}</div>
        </div>
    )
}