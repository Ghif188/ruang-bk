import React from "react";
import Layout from "../../layouts/gurulayout"
import { BsPersonCircle } from 'react-icons/bs';
import { Center, Box, Circle, Avatar, position, Button, Image, List, ListItem, ListIcon, Icon } from '@chakra-ui/react';
export default function Profile() {
    return (
        <Layout>
            <div className="bg-white h-full w-10/12 p-8 shadow-lg">
                <div className="bg-gray-200 h-full w-full rounded-2xl py-10 px-4 justify-center flex">
                    <div className="w-1/2 h-full p-2">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                            height='100%'
                        >
                            <div className="flex rounded-t-2xl bg-sky-600 justify-center p-10">
                                <div className="bg-black rounded-full">
                                    <BsPersonCircle className="h-32 w-32 decoration-white text-white" />
                                </div>
                            </div>
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
                    <div className="w-1/2 h-full">
                        <div className="h-6/10 p-2">
                            <Box
                                boxShadow='lg'
                                bgColor='white'
                                rounded='xl'
                                height='100%'
                            >
                                <div className="font-bold text-xl py-4 px-8">
                                    <div className="pb-6">
                                        <p>My data</p>
                                        <div className=" border-b-8 border-hijau w-1/4 rounded-md"></div>
                                    </div>
                                    <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-xl py-2 flex justify-between">
                                        <p>NPSN</p>
                                        <p>12345678</p>
                                    </div>
                                    <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-xl py-2 flex justify-between">
                                        <p>NIK</p>
                                        <p>12345678</p>
                                    </div>
                                    <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-xl py-2 flex justify-between">
                                        <p>Nama Sekolah</p>
                                        <p>12345678</p>
                                    </div>
                                </div>
                            </Box>
                        </div>
                        <div className="h-4/10 p-2">
                            <Box
                                boxShadow='lg'
                                bgColor='white'
                                rounded='xl'
                                height='100%'
                            >
                                <div className="font-bold text-xl py-4 px-8">
                                    <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-xl py-2 flex justify-between">
                                        <p>Tempat Lahir</p>
                                        <p>jakarta</p>
                                    </div>
                                    <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-xl py-2 flex justify-between">
                                        <p>Tanggal lahir</p>
                                        <p>12, Desember 1985</p>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}