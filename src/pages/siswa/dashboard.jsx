import React from "react";
import Jempol from "../../assets/bouken.png"
import Layout from "../../layouts/muridlayout"
import { Table, Th, Td, Thead, Tr, Tbody, Box, Button,Img, Icon } from "@chakra-ui/react";
export default function Dashboard() {
    return (
        <Layout>
            <div className="bg-white bg-opacity-50 h-full w-9/12 px-10 py-2">
                <div className="bg-gray-200 h-full w-full rounded-2xl p-5 justify-center flex">
                    <div className="h-full w-full">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                            height='100%'
                        >
                            {/* atas */}
                            <div className=" rounded-t-2xl bg-gradient-to-r from-sky-500 to-sky-800 py-10 px-20 text-white">
                                <div className="text-2xl flex">
                                    <p className="pr-2">Give Your Best</p><img src={Jempol} className="w-9 h-9" alt="" />
                                </div>
                                <div className="w-1/3 py-5">
                                    <p>The more we are grateful, the more happiness we get.</p>
                                </div>
                                <div className="">
                                    <Button
                                        size='sm'
                                        height='40px'
                                        rounded='lg'
                                        px='25px'
                                        type='submit'
                                        variant="solid"
                                        bgColor='#F0BF12'
                                        color="white"
                                    >
                                        Tambah Angket
                                    </Button>
                                </div>
                            </div>
                            {/* bawah */}
                            <div className="font-bold text-xl py-4 px-8">
                                <div className="">
                                    <p>iini dashboard</p>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    );
}