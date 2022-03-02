import React from "react";
import Jempol from "../../assets/bouken.png"
import Layout from "../../layouts/gurulayout"
import { Table, Th, Td, Thead, Tr, Tbody, Box, Button,Img, Icon } from "@chakra-ui/react";
export default function Angket() {
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
                                    <p>My Account</p>
                                    <div className=" border-b-8 border-hijau w-1/4 rounded-md"></div>
                                </div>
                                <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-xl py-2">
                                    <p>Fulan</p>
                                </div>
                                <div className="text-right text-gray-500 text-xl py-2">
                                    <p>+62-812-0005-5606</p>
                                </div>
                                <div className="w-full border-b-2 border-gray-500 mt-4 text-gray-500 text-xl py-2">
                                    <p>Fulan@gmail.com</p>
                                </div>
                                <div className="justify-center flex pt-8">
                                    <Button
                                        size='xl'
                                        height='50px'
                                        borderRadius='3xl'
                                        px='70px'
                                        type='submit'
                                        variant="solid"
                                        bgGradient='linear(to-r, #1F8AC6, #104D6F)'
                                        color="white"
                                    >
                                        Edit
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