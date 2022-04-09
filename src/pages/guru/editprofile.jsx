import React from "react";
import Layout from "../../layouts/gurulayout"
import { BiHelpCircle } from 'react-icons/bi';
import { getProfile } from '../../api/guru';
import { useQuery } from "react-query";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import BgProfile from "../../assets/bg-profil.jpg"
import { MdEdit } from 'react-icons/md';
import axios from "../../api/axiosClient";
import {
    Center,
    Box,
    Circle,
    Avatar,
    position,
    Button,
    Image,
    List,
    ListItem,
    ListIcon,
    Icon,
    Input,
    useToast,
    Spinner,
    Tooltip
} from '@chakra-ui/react';

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
    console.log(values)
    const [image, setImage] = React.useState(values.foto === null ? 'null' : values.foto);
    const [error, setError] = React.useState(false);
    const toast = useToast();
    const navigate = useNavigate();
    const updateProfile = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append("nama_guru", values.nama_guru);
        formData.append("npsn", values.npsn);
        formData.append("tanggal_lahir", values.tanggal_lahir);
        formData.append("tempat_lahir", values.tempat_lahir);
        formData.append("alamat", values.alamat);
        formData.append("foto", image);
        formData.append("sekolah", values.sekolah);
        formData.append("_method", "put")

        for (let pair of formData.entries()) {
            console.log(pair[0] + ',' + pair[1])
        }
        const res = await axios.post(`/guru/update`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
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
        setImage(e.currentTarget.files[0]);
    }
    console.log(image)
    const handleInput = (e) => {
        e.persist();
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    // React.useEffect(() => {
    //     console.log(image.foto)
    // })
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
                <form onSubmit={updateProfile} className="h-full w-10/12 px-20">
                    <div className="w-full mt-10 rounded-3xl flex h-1/6 mb-3">
                        <div className="flex relative rounded-3xl shadow-sm h-full w-full">
                            <div style={{ backgroundImage: `url(${BgProfile})` }} className="flex w-full h-full rounded-3xl bg-cover">
                                <div className=" w-full flex justify-between h-full pl-10 rounded-3xl">
                                    <div className="font-semibold font-bahnschrift flex items-center text-gray-800 text-3xl">
                                        Edit Profile
                                    </div>
                                    <div className="w-2/4 pr-5 h-full bg-gray-300 flex items-center bg-opacity-30">
                                        <div className="w-full  pl-3">
                                            <div className="w-full flex mb-3  justify-between">
                                                <div className="font-semibold text-lg text-white">
                                                    Foto Profile
                                                </div>
                                                <div className="rounded-full">
                                                    <input
                                                        accept="image/*"
                                                        type="file"
                                                        id="foto"
                                                        name='foto'
                                                        className="bg-white outline-blue-300 focus:outline-sky-600 rounded-full shadow-md"
                                                        onChange={handleImage}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full flex items-center justify-between">
                                                <div className="font-semibold text-lg text-white">
                                                    Username
                                                </div>
                                                <div className="rounded-full bg-white">
                                                    <Input
                                                        placeholder='Masukkan Nama Anda'
                                                        id='nama_guru'
                                                        name='nama_guru'
                                                        value={values.nama_guru}
                                                        required
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-5 pb-5 h-6/10 shadow-md">
                        <div className="w-full flex mb-3 justify-center">
                            <div className="border-b-4 text-2xl font-semibold border-hijau">
                                Data Diri
                            </div>
                        </div>
                        <div className="w-full flex justify-between items-center p-5">
                            <div className="w-1/2 pr-3 h-max text-center rounded-sm">
                                <div className="w-full border-b-2 border-sky-700 items-center py-2 flex justify-between">
                                    <p>NPSN</p>
                                    <div>
                                        <Input
                                            placeholder='Masukkan NPSN'
                                            id='npsn'
                                            name='npsn'
                                            value={values.npsn}
                                            onChange={handleInput}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full border-b-2 border-sky-700 mt-6  py-2 flex justify-between">
                                    <p>Nama Sekolah</p>
                                    <div>
                                        <Input
                                            placeholder='Masukkan Nama Sekolah'
                                            id='sekolah'
                                            name='sekolah'
                                            value={values.sekolah}
                                            required
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 border-l-4 text-center pl-3 rounded-sm">
                                <div className="w-full border-b-2 border-sky-700  py-2 flex justify-between">
                                    <p>Alamat</p>
                                    <div className="w-2/3 border focus:border-blue-300 rounded-lg">
                                        <textarea
                                            placeholder='Masukkan Alamat'
                                            id='alamat'
                                            name='alamat'
                                            value={values.alamat}
                                            onChange={handleInput}
                                            required
                                            className="w-full focus:outline-sky-600 rounded-lg outline-inherit h-full"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                                <div className="w-full border-b-2 border-sky-700 mt-6  py-2 flex justify-between">
                                    <p>Tempat Lahir</p>
                                    <div>
                                        <Input
                                            placeholder='Masukkan Tempat Lahir'
                                            id='tempat_lahir'
                                            name='tempat_lahir'
                                            value={values.tempat_lahir}
                                            required
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                                <div className="w-full border-b-2 border-sky-700 mt-6  py-2 flex justify-between">
                                    <p>Tanggal lahir</p>
                                    <div>
                                        <input
                                            placeholder='Masukkan Tanggal Lahir'
                                            id='tanggal_lahir'
                                            type='date'
                                            name='tanggal_lahir'
                                            value={values.tanggal_lahir}
                                            required
                                            onChange={handleInput}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="justify-center flex pt-8">
                                <Button
                                    size='lg'
                                    colorScheme='facebook'
                                    leftIcon={<MdEdit />}
                                    type='submit'
                                    loadingText="tunggu"
                                    marginRight={5}
                                >
                                    Save
                                </Button>
                                <Button
                                    size='lg'
                                    colorScheme='green'
                                    onClick={() => navigate("/dash-guru/profile")}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Layout >
    );
}

{/* <form onSubmit={updateProfile} className="bg-white h-full w-10/12 p-8 justify-center flex items-center shadow-lg">
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
                                                    placeholder='Masukkan Tanggal Lahir'
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
                </form> */}