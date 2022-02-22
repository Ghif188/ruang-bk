import React from "react";
import Layout from "../../layouts/gurulayout"
import { BsPersonCircle } from 'react-icons/bs';
import { getProfile } from '../../api/guru';
import { useQuery } from "react-query";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import axios from "../../api/axiosClient";
import { Center, Box, Circle, Avatar, position, Button, Image, List, ListItem, ListIcon, Icon, Input, useToast, Spinner } from '@chakra-ui/react';

const editGuruSchema = Yup.object().shape({
    nama_guru: Yup.string().required("Wajib di Isi"),
    npsn: Yup.number().required("Wajib di Isi").positive().integer(),
    tempat_lahir: Yup.string().required("Wajib di isi"),
    tanggal_lahir: Yup.string().required("Wajib di Isi"),
    foto: Yup.mixed().required("Wajib di Isi"),
    alamat: Yup.string().required("wajib di isi"),
    sekolah: Yup.string().required("wajib di isi"),
});

export default function EditProfile() {
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

    const [values, setValues] = React.useState(data);
    const [image, setImage] = React.useState([]);
    const [error, setError] = React.useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const updateProfile = async (e) => {
        e.preventDefault();
        let formData = new URLSearchParams
        formData.append("nama_guru", values.nama_guru);
        formData.append("npsn", values.npsn);
        formData.append("tanggal_lahir", values.tanggal_lahir);
        formData.append("tempat_lahir", values.tempat_lahir);
        formData.append("alamat", values.alamat);
        formData.append("foto", image.foto);
        formData.append("sekolah", values.sekolah);
        formData.append("_method", "put")

        const res = await axios.post(`/guru/update`, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        console.log(res)
        if (res.data.status === "success") {
            navigate("/dash-guru/profile")
            toast({
                title: 'Berhasil',
                status: 'success',
                position: 'top',
                description: 'Anda berhasil edit akun',
                variant: 'left-accent',
                duration: 9000,
                isClosable: true,
            })
            setError([]);
        } else if (res.data.status === "failed") {
            setError(res.data.errors);
        }

    }
    console.log(data)
    const handleImage = (e) => {
        e.persist();
        setImage({ foto: e.target.files[0] });
    }
    const handleInput = (e) => {
        e.persist();
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    return (
        <Layout>
            {isLoading ? (
                <div className="bg-white h-full w-10/12 p-8 justify-center flex items-center shadow-lg">
                    <Spinner
                        thickness='5px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>
            ) : (
                <form onSubmit={updateProfile} className="bg-white h-full w-10/12 p-8 justify-center flex items-center shadow-lg">
                    <div className="bg-gray-200 h-full w-full rounded-2xl py-10 px-4 justify-center flex">
                        <div className="w-1/2 h-full p-1">
                            <Box
                                boxShadow='lg'
                                bgColor='white'
                                rounded='xl'
                                height='100%'
                            >
                                <div className="flex rounded-t-2xl bg-sky-600 justify-center p-10">
                                    <div className="bg-black rounded-full">
                                        <input
                                            type="file"
                                            id="foto"
                                            name='foto'
                                            onChange={handleImage}
                                        />
                                    </div>
                                </div>
                                <div className="font-bold text-lg py-4 px-8">
                                    <div className="">
                                        <p>My Account</p>
                                        <div className=" border-b-8 border-hijau w-1/4 rounded-md"></div>
                                    </div>
                                    <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2">
                                        <div>
                                            <Input
                                                placeholder='Masukkan Nama Anda'
                                                id='nama_guru'
                                                name='nama_guru'
                                                value={values.nama_guru}
                                                onChange={handleInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="justify-center flex pt-8">
                                        <Button
                                            size='xl'
                                            height='50px'
                                            borderRadius='3xl'
                                            px='70px'
                                            type='submit'
                                            variant="solid"
                                            bgGradient='linear(to-r, #19DF51, #18B444)'
                                            color="white"
                                        >
                                            Simpan
                                        </Button>
                                        <Button
                                            size='xl'
                                            height='50px'
                                            borderRadius='3xl'
                                            px='70px'
                                            variant="solid"
                                            bgGradient='linear(to-r, #19DF51, #18B444)'
                                            color="white"
                                            onClick={() => navigate("/dash-guru/profile")}
                                        >
                                            Cancel
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
                                            <div>
                                                <Input
                                                    placeholder='Masukkan NPSN'
                                                    id='npsn'
                                                    name='npsn'
                                                    value={values.npsn}
                                                    onChange={handleInput}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                            <p>Nama Sekolah</p>
                                            <div>
                                                <Input
                                                    placeholder='Masukkan Nama Sekolah'
                                                    id='sekolah'
                                                    name='sekolah'
                                                    value={values.sekolah}
                                                    onChange={handleInput}
                                                />
                                            </div>
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
                                            <div>
                                                <textarea
                                                    placeholder='Masukkan Alamat'
                                                    id='alamat'
                                                    name='alamat'
                                                    value={values.alamat}
                                                    onChange={handleInput}
                                                    className="  focus:border-2 border-blue-300 rounded-lg"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                            <p>Tempat Lahir</p>
                                            <div>
                                                <Input
                                                    placeholder='Masukkan Tempat Lahir'
                                                    id='tempat_lahir'
                                                    name='tempat_lahir'
                                                    value={values.tempat_lahir}
                                                    onChange={handleInput}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                            <p>Tanggal lahir</p>
                                            <div>
                                                <input
                                                    placeholder='Masukkan NPSN'
                                                    id='tanggal_lahir'
                                                    type='date'
                                                    name='tanggal_lahir'
                                                    value={values.tanggal_lahir}
                                                    onChange={handleInput}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Layout >
    );
}