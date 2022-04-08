import React from "react";
import Jempol from "../../assets/bouken.png"
import { getProfile } from "../../api/siswa"
import { useQuery } from "react-query";
import Layout from "../../layouts/muridlayout"
import { Table, Th, Td, Thead, Tr, Tbody, Box, Button, Img, Icon, useMediaQuery } from "@chakra-ui/react";
export default function Dashboard() {
    // const { isLoading, isError, data, isFetching } = useQuery(
    //     [
    //         "profile",
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
    // console.log(data)
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
                            <div className=" rounded-t-2xl bg-gradient-to-r from-sky-500 to-sky-800 py-8 px-20 text-white md-max:px-4">
                                <div className="text-2xl flex md-max:text-lg">
                                    <p className="pr-2">Never Give Up</p><img src={Jempol} className="w-9 h-9 md-max:h-6 md-max:w-6" alt="" />
                                </div>
                                <div className="w-1/3 py-5 md-max:text-xs md-max:w-4/5">
                                    <p>Be strong enough to let go and wise enough to wait for what you deserve.</p>
                                </div>
                                <div className="w-full px-5 py-3 flex rounded-lg items-center text-white bg-oren md-max:p-2 md-max:text-xs">
                                    <div className="mr-3">Bpk. / Ibu</div>
                                    {/* <div className=" capitalize font-semibold text-sky-700">{isLoading ? "------" : data.nama_guru}</div>  */}
                                </div>
                            </div>
                            {/* bawah */}
                            <div className="font-bold text-xl py-4 px-14 md-max:p-2 md-max:px-1 md-max:text-sm md-max:font-medium">
                                <div className="flex items-center px-5 mb-5  justify-between pb-3 md-max:px-2 md-max:mb-2">
                                    <div className="w-8/10 px-5 py-1.5 flex rounded-lg text-white justify-between bg-oren md-max:px-2 md-max:w-7/10">
                                        Bahasa Indonesia
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size={MediaQ ? 'md' : 'sm'}
                                        width={MediaQ ? '140px' : '60px'}
                                        colorScheme='twitter'
                                    >
                                        <p className="text-lg md-max:text-sm">Lihat</p>
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 mb-5  justify-between pb-3 md-max:px-2 md-max:mb-2">
                                    <div className="w-8/10 px-5 py-1.5 flex rounded-lg text-white justify-between bg-oren md-max:px-2 md-max:w-7/10">
                                        Bahasa Indonesia
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size={MediaQ ? 'md' : 'sm'}
                                        width={MediaQ ? '140px' : '60px'}
                                        colorScheme='twitter'
                                    >
                                        <p className="text-lg md-max:text-sm">Lihat</p>
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 mb-5  justify-between pb-3 md-max:px-2 md-max:mb-2">
                                    <div className="w-8/10 px-5 py-1.5 flex rounded-lg text-white justify-between bg-oren md-max:px-2 md-max:w-7/10">
                                        Bahasa Indonesia
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size={MediaQ ? 'md' : 'sm'}
                                        width={MediaQ ? '140px' : '60px'}
                                        colorScheme='twitter'
                                    >
                                        <p className="text-lg md-max:text-sm">Lihat</p>
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 mb-5  justify-between pb-3 md-max:px-2 md-max:mb-2">
                                    <div className="w-8/10 px-5 py-1.5 flex rounded-lg text-white justify-between bg-oren md-max:px-2 md-max:w-7/10">
                                        Bahasa Indonesia
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size={MediaQ ? 'md' : 'sm'}
                                        width={MediaQ ? '140px' : '60px'}
                                        colorScheme='twitter'
                                    >
                                        <p className="text-lg md-max:text-sm">Lihat</p>
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    );
}