import React from "react";
import Layout from "../../layouts/gurulayout"
import { BsPersonCircle } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { getProfile, updateGuru } from '../../api/guru';
import { useQuery } from "react-query";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { Center, Box, Circle, Avatar, position, Button, Image, List, ListItem, ListIcon, Icon, Input, useToast, Spinner } from '@chakra-ui/react';
import BgProfile from "../../assets/bgprofile.png"
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
                (<div className="h-full w-10/12 px-20">
                    <div className="w-full mt-10 rounded-3xl flex h-2/10 shadow-md mb-3">
                        <div className="flex relative rounded-3xl h-full w-full">
                            <div className="flex w-full h-full rounded-3xl justify-end">
                                <img src={BgProfile} alt="" className="rounded-3xl absolute h-full w-full" />
                                <div className="border-r-2 relative text-sky-900 border-sky-600 w-1/3 text-5xl capitalize pr-5 font-bahnschrift font-semibold h-full flex justify-end items-center">
                                    {data.nama_guru}
                                </div>
                                <div className=" w-1/3 h-full pl-5 backdrop-hue-rotate-90 rounded-r-2xl bg-blue-50 bg-opacity-60 backdrop-blur-sm py-10">
                                    <div className=" font-semibold text-sky-800 text-xl mb-3">{data.email}</div>
                                    <div className="text-sky-700 text-lg">{data.nomor_telp}</div>
                                </div>
                            </div>
                            <div className="flex absolute -bottom-1/2 left-5">
                                {data.foto === null ? (
                                    <div className="bg-black p-10 rounded-full">
                                        <BsPersonCircle className="h-32 w-32 decoration-white text-white" />
                                    </div>
                                ) : (
                                    <div className="rounded-full border-4 shadow-md border-white">
                                        <img src={data.foto} className="w-32 h-32 rounded-full" alt="" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-5 h-6/10 shadow-md">
                        <div className="w-full flex mb-3 justify-center">
                            <div className="border-b-4 text-2xl font-semibold border-hijau">
                                Data Diri
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center p-5">
                            <div className="w-1/2 pr-3 h-max text-center rounded-sm">
                                <div className="w-full border-b-2 border-sky-700  py-2 flex justify-between">
                                    <p>NPSN</p>
                                    <p className="text-lg font-semibold">{data.npsn}</p>
                                </div>
                                <div className="w-full border-b-2 border-sky-700 mt-6  py-2 flex justify-between">
                                    <p>Nama Sekolah</p>
                                    <p className="text-lg font-semibold">{data.sekolah}</p>
                                </div>
                            </div>
                            <div className="w-1/2 border-l-4 text-center pl-3 rounded-sm">
                                <div className="w-full border-b-2 border-sky-700  py-2 flex justify-between">
                                    <p>Alamat</p>
                                    <p className="text-lg font-semibold">{data.alamat}</p>
                                </div>
                                <div className="w-full border-b-2 border-sky-700 mt-6  py-2 flex justify-between">
                                    <p>Tempat Lahir</p>
                                    <p className="text-lg font-semibold">{data.tempat_lahir}</p>
                                </div>
                                <div className="w-full border-b-2 border-sky-700 mt-6  py-2 flex justify-between">
                                    <p>Tanggal lahir</p>
                                    <p className="text-lg font-semibold">{data.tanggal_lahir}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="justify-center flex pt-8">
                                <Button
                                    size='lg'
                                    colorScheme='facebook' 
                                    leftIcon={<MdEdit />}
                                    onClick={() => navigate("/dash-guru/edit-profile")}
                                >
                                    Edit
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="h-full w-full rounded-2xl py-10 px-4 justify-center flex shadow-lg">
                        <div className="w-1/2 h-full mr-2">
                            <div className=" rounded-xl h-full shadow-lg shadow-sky-100">
                                <div className="flex rounded-t-2xl p-1 shadow-inner shadow-sky-100 border-b-4 justify-center items-center border-sky-600">
                                    <img src={BgProfile} alt="" className=" rounded-t-2xl w-full" />
                                    <div className="flex absolute ">
                                        {data.foto === null ? (
                                            <div className="bg-black rounded-full">
                                                <BsPersonCircle className="h-32 w-32 decoration-white text-white" />
                                            </div>
                                        ) : (
                                            <div className=" rounded-full border-4 shadow-md border-white">
                                                <img src={data.foto} className="w-32 h-32 rounded-full" alt="" />
                                            </div>
                                        )}
                                    </div>
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
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 py-1 bg-white rounded-xl shadow-lg shadow-sky-100 h-full">
                            <div className="h-full">
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
                            </div>
                        </div>
                    </div> */}
                </div>)
            }
        </Layout>
    );
}