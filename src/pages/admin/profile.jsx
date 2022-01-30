import React from "react";
import Layout from "../dashboard"
import { BsPersonCircle } from "react-icons/bs"
import { Icon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { getProfile } from "../../api/admin";
import { useQuery } from "react-query";

export default function Profile() {
    const navigate = useNavigate();
    function logOut() {
        localStorage.clear();
        navigate("/log");
    }
    // const { status, error, isLoading, isError, data, isFetching } = useQuery(
    //     "profile-admin",
    //     getProfile,
    // );
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "jadwal",
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
    if (status === 'error') {
        console.log(error.message)
    } if (status === 'loading') {
        console.log('loading')
    } else {
        console.log('berdata')
    }
    console.log(data)
    return (
        <Layout>
            {isLoading ? (
                <div>loding</div>
            ) : (
                <div className=" p-14 h-full w-full">
                    <div className="flex w-full justify-between" onClick={logOut}>
                        <div className="border-b-4 w-2/12 font-bold tracking-wider font-bahnschrift text-lg text-center mb-10 border-red-500">My Profile</div>
                        <div className="w-1/10 rounded-lg text-center h-min py-1 px-3 font-bahnschrift tracking-wider font-semibold text-white bg-gradient-to-b to-green-400 from-green-500">
                            Logout
                        </div>
                    </div>
                    <div className="flex">
                        <div className="rounded-full">
                            <img src={data.foto} className="rounded-full w-28 h-28" />
                        </div>
                        <div className="ml-6 mt-1">
                            <div className="text-xl mb-1 font-bold">{data.nama_admin}</div>
                            <div className="text-lg mb-1">aktif</div>
                            <div className="bg-gradient-to-b rounded-lg to-red-500 from-red-700 border-2 border-red-500 text-white py-1 px-3 w-min">Administrator</div>
                        </div>
                    </div>
                    <div className="mt-5 bg-gradient-to-b shadow-lg p-10 rounded-3xl from-cyan-500 to-sky-600">
                        <div className="flex justify-between text-white border-2 border-white rounded-xl py-4 px-10">
                            <div>Username</div>
                            <div>{data.nama_admin}</div>
                        </div>
                        <div className="flex justify-between text-white py-4 px-10">
                            <div>Email</div>
                            <div>{data.email}</div>
                        </div>
                        <div className="flex justify-between text-white border-2 border-white rounded-xl py-4 px-10">
                            <div>Nomor Whatsapp</div>
                            <div>{data.nomor_telp}</div>
                        </div>
                        <div className="flex justify-between text-white py-4 px-10">
                            <div>Tempat Lahir</div>
                            <div>{data.tempat_lahir}</div>
                        </div>
                        <div className="flex justify-between text-white border-2 border-white rounded-xl py-4 px-10">
                            <div>Tanggal Lahir</div>
                            <div>{data.tanggal_lahir}</div>
                        </div>
                        <div className="flex justify-between border-b-2 border-sky-300 text-white py-4 px-10">
                            <div>Alamat Rumah</div>
                            <div>{data.alamat}</div>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    )
}