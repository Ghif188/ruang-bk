import React from "react";
import Jempol from "../../assets/bouken.png"
import Hei from "../../assets/Hey.png"
import { getProfileSiswa } from "../../api/siswa"
import { useQuery } from "react-query";
import Layout from "../../layouts/muridlayout"
import { Table, Th, Td, Thead, Tr, Tbody, Box, Button, Img, Icon, useMediaQuery } from "@chakra-ui/react";
import Gambar from "../../assets/landing-page.jpg"
export default function Dashboard() {
    const { isLoading, isError, data, isFetching } = useQuery(
        [
            "profile",
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
    console.log(localStorage)
    const [MediaQ] = useMediaQuery('(min-width: 766px)');
    return (
        <Layout>
            <div className="bg-white bg-opacity-50 h-full w-9/12 px-10 py-2 md-max:w-full md-max:px-0">
                <div className="bg-gray-200 h-full w-full rounded-2xl p-5 justify-center flex md-max:p-1">
                    <div className="h-full w-full">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                            height='100%'
                        >
                            {/* atas */}
                            <div className=" h-1/4 rounded-t-2xl flex items-center bg-gradient-to-r from-sky-500 to-sky-800 px-20 text-white md-max:px-4">
                                <div className="w-full">
                                    <div className="text-2xl justify-between flex md-max:text-lg">
                                        <div className="flex">
                                            <p className="pr-2">Never Give Up</p><img src={Jempol} className="w-9 h-9 md-max:h-6 md-max:w-6" alt="" />
                                        </div>
                                        {/* <div className="flex w-2/3">
                                            <div className="mr-3">Bpk. / Ibu</div>
                                            <div className=" capitalize font-semibold text-sky-700">{isLoading ? "------" : data.nama_guru}</div>
                                            <div className="ml-3">Sebagai Pengampu</div>
                                        </div> */}
                                    </div>
                                    <div className="py-5 items-center flex md-max:text-xs">
                                        <div className="w-full flex items-center">
                                            <div className="w-2/3">
                                                <p>Be strong enough to let go and wise enough to wait for what you deserve.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="w-full px-5 py-3 flex rounded-lg items-center text-white bg-oren md-max:p-2 md-max:text-xs">

                                </div> */}
                            </div>
                            {/* bawah */}
                            <div className="h-3/4 bg-cover rounded-b-2xl md-max:hidden" style={{ backgroundImage: `url(${Gambar})` }}>
                            </div>
                            <div className="h-3/4 bg-cover rounded-b-2xl md:hidden" style={{ backgroundImage: `url(${Hei})` }}>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    );
}