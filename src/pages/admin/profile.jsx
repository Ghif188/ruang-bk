import React from "react";
import Layout from "../dashboard"
import {BsPersonCircle} from "react-icons/bs"
import { Icon } from "@chakra-ui/icons";

export default function Profile() {
    const nama = localStorage.getItem('username');
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');
    return (
        <Layout>
            <div className="p-10 w-full">
                <div className="flex w-full justify-between">
                    <div className="border-b-4 w-2/12 font-bold tracking-wider font-bahnschrift text-lg text-center mb-10 border-red-500">My Profile</div>
                    <div className="w-1/10 rounded-lg text-center h-min py-1 px-3 font-bahnschrift tracking-wider font-semibold text-white bg-gradient-to-b to-green-400 from-green-500">
                        Logout
                    </div>
                </div>
                <div className="flex">
                    <div className="rounded-full">
                        <Icon as={BsPersonCircle} w={28} h={28}  />
                    </div>
                    <div className="ml-6 mt-1">
                        <div className="text-xl mb-1 font-bold">{nama}</div>
                        <div className="text-lg mb-1">{email}</div>
                        <div className="bg-gradient-to-b rounded-lg to-red-500 from-red-700 border-2 border-red-500 text-white py-1 px-3 w-min">{role === "1" ? "Administrator" : ""}</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}