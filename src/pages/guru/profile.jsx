import React from "react";
import Layout from "../../layouts/gurulayout"
import { BsPersonCircle } from 'react-icons/bs';
import { getProfile, updateGuru } from '../../api/guru';
import { useQuery } from "react-query";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
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

export default function Profile() {
    const [edit, setEdit] = React.useState(false)
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
                <div className="bg-white h-full w-10/12 p-8 justify-center flex items-center shadow-lg">
                    <Spinner
                        thickness='5px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>) :
                (<div className="bg-white h-full w-10/12 p-8 shadow-lg">
                    <Formik
                        initialValues={data}
                        validationSchema={editGuruSchema}
                        enableReinitialize
                        onSubmit={onSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
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
                                                <BsPersonCircle className="h-32 w-32 decoration-white text-white" />
                                            </div>
                                        </div>
                                        <div className="font-bold text-lg py-4 px-8">
                                            <div className="">
                                                <p>My Account</p>
                                                <div className=" border-b-8 border-hijau w-1/4 rounded-md"></div>
                                            </div>
                                            <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2">
                                                <p className={edit === false ? "hidden" : ""}>{data.nama_guru}</p>
                                                <div className={edit === false ? "" : "hidden"}>
                                                    <Input
                                                        placeholder='Masukkan Nama Anda'
                                                        id='nama_guru'
                                                        type='nama_guru'
                                                        value={values.nama_guru}
                                                        onBlur={handleBlur}
                                                        error={errors.nama_guru && touched.nama_guru}
                                                        onChange={handleChange}
                                                        disabled={isSubmitting}
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-right text-gray-500 text-lg py-2">
                                                <p>{data.nomor_telp}</p>
                                            </div>
                                            <div className="w-full border-b-2 border-gray-500 mt-4 text-gray-500 text-lg py-2">
                                                <p>{data.email}</p>
                                            </div>
                                            <div className="justify-center flex pt-8">
                                                {edit === false ? (
                                                    <div>
                                                        <Button
                                                            size='xl'
                                                            height='50px'
                                                            borderRadius='3xl'
                                                            px='70px'
                                                            type='submit'
                                                            variant="solid"
                                                            bgGradient='linear(to-r, #19DF51, #18B444)'
                                                            color="white"
                                                            onClick={() => setEdit()}
                                                        >
                                                            Simpan
                                                        </Button>
                                                        <Button
                                                            size='xl'
                                                            height='50px'
                                                            borderRadius='3xl'
                                                            px='70px'
                                                            type='submit'
                                                            variant="solid"
                                                            bgGradient='linear(to-r, #19DF51, #18B444)'
                                                            color="white"
                                                            onClick={() => setEdit(true)}
                                                        >
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <Button
                                                        size='xl'
                                                        height='50px'
                                                        borderRadius='3xl'
                                                        px='70px'
                                                        type='submit'
                                                        variant="solid"
                                                        bgGradient='linear(to-r, #1F8AC6, #104D6F)'
                                                        color="white"
                                                        onClick={() => setEdit(false)}
                                                    >
                                                        Edit
                                                    </Button>
                                                )}
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
                                                    <p className={edit === false ? "hidden" : ""}>{data.npsn}</p>
                                                    <div className={edit === false ? "" : "hidden"}>
                                                        <Input
                                                            placeholder='Masukkan NPSN'
                                                            id='npsn'
                                                            type='npsn'
                                                            value={values.npsn}
                                                            onBlur={handleBlur}
                                                            error={errors.npsn && touched.npsn}
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                                    <p>Nama Sekolah</p>
                                                    <p className={edit === false ? "hidden" : ""}>{data.sekolah}</p>
                                                    <div className={edit === false ? "" : "hidden"}>
                                                        <Input
                                                            placeholder='Masukkan Nama Sekolah'
                                                            id='sekolah'
                                                            type='sekolah'
                                                            value={values.sekolah}
                                                            onBlur={handleBlur}
                                                            error={errors.sekolah && touched.sekolah}
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
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
                                                    <p>{data.alamat}</p>
                                                    <div className={edit === false ? "" : "hidden"}>
                                                        <textarea
                                                            placeholder='Masukkan Alamat'
                                                            id='alamat'
                                                            type='alamat'
                                                            value={values.alamat}
                                                            onBlur={handleBlur}
                                                            error={errors.alamat && touched.alamat}
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
                                                            className="  focus:border-2 border-blue-300 rounded-lg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                                    <p>Tempat Lahir</p>
                                                    <p >{data.tempat_lahir}</p>
                                                    <div className={edit === false ? "" : "hidden"}>
                                                        <Input
                                                            placeholder='Masukkan Tempat Lahir'
                                                            id='tempat_lahir'
                                                            type='tempat_lahir'
                                                            value={values.tempat_lahir}
                                                            onBlur={handleBlur}
                                                            error={errors.tempat_lahir && touched.tempat_lahir}
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full border-b-2 border-gray-500 mt-6 text-gray-500 text-lg py-2 flex justify-between">
                                                    <p>Tanggal lahir</p>
                                                    <p>{data.tanggal_lahir}</p>
                                                    <div className={edit === false ? "" : "hidden"}>
                                                        <input
                                                            placeholder='Masukkan NPSN'
                                                            id='tanggal_lahir'
                                                            type='date'
                                                            value={values.tanggal_lahir}
                                                            onBlur={handleBlur}
                                                            error={errors.tanggal_lahir && touched.tanggal_lahir}
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>)
            }
        </Layout>
    );
}