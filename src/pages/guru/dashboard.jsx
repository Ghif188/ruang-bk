import React from "react"
import Layout from "../../layouts/gurulayout"
import { useNavigate } from "react-router";
import { getJumlah } from "../../api/guru";
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
            <div className="bg-white h-full w-10/12 p-10  shadow-lg">
                <div className="flex justify-between w-full h-1/3 my-10">
                    <div className="w-1/3">
                        <Box borderRadius='md' bg='whatsapp.600' color='white' mx={5} h={180}>
                            <div className="text-center p-4 text-lg"><p>Jumlah Murid</p></div>
                            <div className="text-center text-8xl">{data?.siswa}</div>
                        </Box>
                    </div>
                    <div className="w-1/3">
                        <Box borderRadius='md' bg='twitter.600' color='white' mx={5} h={180}>
                            <div className="text-center p-4 text-lg"><p>Jumlah Angket</p></div>
                            <div className="text-center text-8xl">{data?.angket}</div>
                        </Box>
                    </div>
                    <div className="w-1/3">
                        <Box borderRadius='md' bg='facebook.600' color='white' mx={5} h={180}>
                            <div className="text-center p-4 text-lg"><p>Jumlah Angket terisi</p></div>
                            <div className="text-center text-8xl">0</div>
                        </Box>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <div className="w-full">
                        <Box borderRadius='md' bg='firebrick' color='white' mx={5} h={300}>
                            <div className="text-center p-4 text-4xl"><p>Untuk Grafik</p></div>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    )
}