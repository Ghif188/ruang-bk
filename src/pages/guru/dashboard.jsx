import React from "react"
import Layout from "../../layouts/gurulayout"
import { useNavigate } from "react-router";
import { getJumlah } from "../../api/guru";
import { FiUsers, FiList } from "react-icons/fi"
import { border, color, Menu, Box, MenuList, MenuItem } from "@chakra-ui/react";
import { useQuery } from "react-query";

export default function Profile() {
    const navigate = useNavigate();
    const { isLoading, isError, data } = useQuery(
        [
            "jumlah",
            {
            },
        ],

        () =>
            getJumlah({
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data,
        }
    );
    console.log(data)
    // const { isLoading, isError, data, isFetching, status, error, } = useQuery(
    //     [
    //         "jadwal",
    //         {
    //         },
    //     ],

    //     () =>
    //         getProfile({
    //         }),

    //     {
    //         keepPreviousData: true,
    //         select: (response) => response.data.data,
    //     }
    // );
    // if (status === 'error') {
    //     console.log(error.message)
    // } if (status === 'loading') {
    //     console.log('loading')
    // } else {
    //     console.log('berdata')
    // }
    // console.log(data)
    console.log(localStorage.getItem("token"))
    return (
        <Layout>
            <div className="bg-white h-full w-10/12 p-10 shadow-lg">
                <div className=" text-3xl underline px-2 pt-10 font font-semibold text-sky-900 mb-20">
                    Kilas Data
                </div>
                <div className="flex items-center ">
                    <div className="w-full my-10 space-y-5">
                        <div className="w-full flex justify-between mx-2 px-20 py-3 shadow-md bg-hijau text-purple-900 items-center rounded-md">
                            <div className="w-1/3 flex justify-center items-center">
                                <FiUsers className="text-5xl"></FiUsers>
                            </div>
                            <div className="w-1/3 flex justify-center items-center">
                                <div className="text-center font-semibold text-xl"><p>Jumlah Murid</p></div>
                            </div>
                            <div className="w-1/3 flex justify-center items-center">
                                <div className="text-center text-7xl">{data?.siswa}</div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between mx-2 px-20 py-3 shadow-md bg-purple-800 text-white items-center rounded-md">
                            <div className="w-1/3 flex justify-center items-center">
                                <div className="text-center text-7xl">{data?.angket}</div>
                            </div>
                            <div className="w-1/3 flex justify-center items-center">
                                <div className="text-center font-semibold text-xl"><p>Jumlah Angket</p></div>
                            </div>
                            <div className="w-1/3 flex justify-center items-center">
                                <FiList className="text-5xl"></FiList>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}