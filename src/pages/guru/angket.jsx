import React from "react";
import Jempol from "../../assets/bouken.png"
import Layout from "../../layouts/gurulayout"
import { Table, Th, Td, Thead, Tr, Tbody, Box, Button, Img, Icon } from "@chakra-ui/react";
export default function Angket() {
    return (
        <Layout>
            <div className="bg-white bg-opacity-50 h-full sm-max:w-max w-9/12 px-10 pt-2">
                <div className="bg-gray-200 h-full w-full p-5 justify-center flex">
                    <div className="h-full w-full">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                            height='100%'
                        >
                            {/* atas */}
                            <div className=" rounded-t-2xl h-1/4 bg-gradient-to-r from-sky-500 to-sky-800 py-10 px-16 text-white">
                                <div className="text-2xl flex">
                                    <p className="pr-2">Give Your Best</p><img src={Jempol} className="w-9 h-9" alt="" />
                                </div>
                                <div className="w-full flex justify-between py-5">
                                    <p>The more we are grateful, the more happiness we get.</p>
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
                            </div>
                            {/* bawah */}
                            <div className="h-7/10 p-5 mt-5 scroll-smooth overflow-y-scroll snap-y">
                                <div className="flex items-center px-5 mb-7  justify-between border-b-2 border-hijau pb-3">
                                    <div className="w-6/10 px-5 py-3 flex rounded-lg text-white justify-between bg-oren">
                                        Bahasa Indonesia
                                        <div className="text-gray-500">
                                            10 days ago
                                        </div>
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='green'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='red'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='twitter'
                                    >
                                        Show
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 justify-between mb-7 border-b-2 border-hijau pb-3">
                                    <div className="w-6/10 px-5 py-3 flex rounded-lg text-white justify-between bg-oren">
                                        Bahasa Indonesia
                                        <div className="text-gray-500">
                                            10 days ago
                                        </div>
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='green'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='red'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='twitter'
                                    >
                                        Show
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 justify-between mb-7 border-b-2 border-hijau pb-3">
                                    <div className="w-6/10 px-5 py-3 flex rounded-lg text-white justify-between bg-oren">
                                        Bahasa Indonesia
                                        <div className="text-gray-500">
                                            10 days ago
                                        </div>
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='green'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='red'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='twitter'
                                    >
                                        Show
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 justify-between mb-7 border-b-2 border-hijau pb-3">
                                    <div className="w-6/10 px-5 py-3 flex rounded-lg text-white justify-between bg-oren">
                                        Bahasa Indonesia
                                        <div className="text-gray-500">
                                            10 days ago
                                        </div>
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='green'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='red'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='twitter'
                                    >
                                        Show
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 justify-between mb-7 border-b-2 border-hijau pb-3">
                                    <div className="w-6/10 px-5 py-3 flex rounded-lg text-white justify-between bg-oren">
                                        Bahasa Indonesia
                                        <div className="text-gray-500">
                                            10 days ago
                                        </div>
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='green'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='red'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='twitter'
                                    >
                                        Show
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 justify-between mb-7 border-b-2 border-hijau pb-3">
                                    <div className="w-6/10 px-5 py-3 flex rounded-lg text-white justify-between bg-oren">
                                        Bahasa Indonesia
                                        <div className="text-gray-500">
                                            10 days ago
                                        </div>
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='green'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='red'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='twitter'
                                    >
                                        Show
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 justify-between mb-7 border-b-2 border-hijau pb-3">
                                    <div className="w-6/10 px-5 py-3 flex rounded-lg text-white justify-between bg-oren">
                                        Bahasa Indonesia
                                        <div className="text-gray-500">
                                            10 days ago
                                        </div>
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='green'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='red'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='twitter'
                                    >
                                        Show
                                    </Button>
                                </div>
                                <div className="flex items-center px-5 justify-between mb-7 border-b-2 border-hijau pb-3">
                                    <div className="w-6/10 px-5 py-3 flex rounded-lg text-white justify-between bg-oren">
                                        Bahasa Indonesia
                                        <div className="text-gray-500">
                                            10 days ago
                                        </div>
                                    </div>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='green'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='red'
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        rounded='lg'
                                        size='md'
                                        width='100px'
                                        colorScheme='twitter'
                                    >
                                        Show
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