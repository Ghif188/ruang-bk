import React from "react";
import Layout from "../../layouts/gurulayout"
import { BsPersonCircle } from 'react-icons/bs';
import { getProfile, updateGuru } from '../../api/guru';
import { useQuery } from "react-query";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { Center, Box, Circle, Avatar, position, Button, Image, List, ListItem, ListIcon, Icon, Input, useToast, Spinner } from '@chakra-ui/react';

export default function Profile() {
    const [edit, setEdit] = React.useState(true)
    const { isLoading, isError, data, isFetching } = useQuery(
        [
            "profile",
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

    const toast = useToast();
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        try {
            await updateGuru(values);
            toast({
                position: "top-right",
                title: "Berhasil",
                description: "berhasil",
                status: "success",
                duration: 4000,
                isClosable: true,
            });
            navigate("/dash-guru/profile");
        } catch (err) {
            console.log(err.response.errors);
        }
        console.log("ok")
    };
    console.log(data)
    // const handleEdit = () => {
    //     setEdit(true)
    // }
    return (
        <Layout>
            {isLoading ? (
                <div className=" h-full w-10/12 p-8 justify-center flex items-center">
                    <Spinner
                        thickness='5px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>) :
                (<div className=" h-full w-10/12 p-8">
                    <div className="bg-gray-400 bg-opacity-50 h-full w-full rounded-2xl py-10 px-4 justify-center flex shadow-lg">
                        <div className="w-1/2 h-full p-1">
                            <Box
                                boxShadow='lg'
                                bgColor='white'
                                rounded='xl'
                                height='100%'
                            >
                                <div className="flex rounded-t-2xl bg-sky-600 justify-center p-10">
                                    {data.foto === null ? (
                                        <div className="bg-black rounded-full">
                                            <BsPersonCircle className="h-32 w-32 decoration-white text-white" />
                                        </div>
                                    ) : (
                                        <img src={data.foto} className="w-1/3 rounded-full" alt="" />
                                    )}
                                </div>
                                <div className="font-bold text-lg py-4 px-8">
                                    <div className="">
                                        <p>My Account</p>
                                        <div className=" border-b-8 border-hijau w-1/4 rounded-md"></div>
                                    </div>
                                    <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2">
                                        <p>{data.nama_guru}</p>
                                    </div>
                                    <div className="text-right text-gray-500 text-lg py-2">
                                        <p>{data.nomor_telp}</p>
                                    </div>
                                    <div className="w-full border-b-2 border-gray-500 mt-4 text-gray-500 text-lg py-2">
                                        <p>{data.email}</p>
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
                                            onClick={() => navigate("/dash-guru/edit-profile")}
                                        >
                                            Edit
                                        </Button>
                                    </div>
                                </div>
                            </Box>
                        </div>
                        <div className="w-1/2 h-full">
                            <div className="h-5/10 p-2">
                                <Box
                                    boxShadow='lg'
                                    bgColor='white'
                                    rounded='xl'
                                    height='100%'
                                >
                                    <div className="font-bold text-lg py-4 px-8">
                                        <div className="pb-6">
                                            <p>My data</p>
                                            <div className=" border-b-8 border-hijau w-1/4 rounded-md"></div>
                                        </div>
                                        <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                            <p>NPSN</p>
                                            <p>{data.npsn}</p>
                                        </div>
                                        <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                            <p>Nama Sekolah</p>
                                            <p>{data.sekolah}</p>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                            <div className="h-5/10 p-2">
                                <Box
                                    boxShadow='lg'
                                    bgColor='white'
                                    rounded='xl'
                                    height='100%'
                                >
                                    <div className="font-bold text-lg py-4 px-8">
                                        <div className="w-full border-b-2 border-gray-500 text-gray-500 text-lg py-2 flex justify-between">
                                            <p>Alamat</p>
                                            <p>{data.alamat}</p>
                                        </div>
                                        <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                            <p>Tempat Lahir</p>
                                            <p>{data.tempat_lahir}</p>
                                        </div>
                                        <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                            <p>Tanggal lahir</p>
                                            <p>{data.tanggal_lahir}</p>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </Layout>
    );
}