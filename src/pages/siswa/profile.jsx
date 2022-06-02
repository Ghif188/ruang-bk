import React from "react";
import Layout from "../../layouts/muridlayout"
import { BsPersonCircle } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { getProfileSiswa, changePass, getDetailProfile } from '../../api/siswa';
import { useQuery } from "react-query";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigate } from "react-router";
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
    useMediaQuery,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormLabel
} from '@chakra-ui/react';
import BgProfile from "../../assets/bg-profil.jpg"

const NpsnSchema = Yup.object().shape({
    password: Yup.string().min(8, "Minimal 8 Digit").required("Wajib terisi *"),
});

export default function ProfileSiswa() {
    const initialValues = {
        password: "",
    };
    const [edit, setEdit] = React.useState(true)
    const [buka, setBuka] = React.useState(false)
    const [MediaQ] = useMediaQuery('(min-width: 1024px)');
    const onTutup1 = () => setBuka(false)
    const onSubmit = async (values) => {
        const result = await changePass(values);
        if (result.data.status === "success") {
            onTutup1();
            toast({
                title: 'Berhasil',
                status: 'success',
                position: 'top',
                description: 'Berhasil ubah password anda.',
                variant: 'left-accent',
                duration: 9000,
                isClosable: true,
            })
        } else {
            onTutup1();
            toast({
                title: 'Gagal',
                status: 'error',
                position: 'top',
                description: 'Gagal merubah password.',
                variant: 'left-accent',
                duration: 9000,
                isClosable: true,
            })
        };
        console.log(result);
    };
    const { isLoading, isError, data, isFetching } = useQuery(
        [
            "profile-siswa",
            {
            },
        ],

        () =>
            getProfileSiswa({
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    let id = data?.user_id
    const {data:datadetail} = useQuery(
        [
            "detail",
            {
            },
        ],

        () =>
            getDetailProfile({
                id: id
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data.data[0],
        }
    );
    const toast = useToast();
    const navigate = useNavigate();
    console.log(data)
    console.log(datadetail)
    console.log(id)
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
                (
                    <div className="h-full w-10/12 px-20">
                        <div className="w-full mt-10 rounded-3xl flex h-2/10 shadow-md mb-3 shadow-green-200">
                            <div className="flex relative rounded-3xl h-full w-full">
                                <div className="flex w-full h-full rounded-3xl bg-cover justify-end" style={{ backgroundImage: `url(${BgProfile})` }}>
                                    <div className="border-r-2 relative text-white border-sky-600 w-1/3 text-5xl capitalize pr-5 font-bahnschrift font-semibold h-full flex justify-end items-center">
                                        {data.nama_siswa == null ? (<div className="text-red-500">Belum Terisi</div>) : data.nama_siswa}
                                    </div>
                                    <div className=" w-1/3 h-full pl-5 backdrop-hue-rotate-90 rounded-r-2xl bg-blue-50 bg-opacity-60 backdrop-blur-sm py-10">
                                        <div className=" font-semibold text-sky-800 text-xl mb-3">{data.email}</div>
                                        <div className="text-sky-700 text-lg">{data.nomor_telp}</div>
                                    </div>
                                </div>
                                <div className="flex absolute -bottom-1/2 left-5">
                                    {data.foto === null ? (
                                        <div className="bg-black rounded-full shadow-xl">
                                            <BsPersonCircle className="h-32 w-32 decoration-white text-white" />
                                        </div>
                                    ) : (
                                        <div className="rounded-full shadow-xl">
                                            <img src={data.foto} className="w-32 h-32 rounded-full" alt="" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-5 rounded-b-lg h-6/10 shadow-md">
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
                                        <p className="text-lg font-semibold">{data?.alamat == null ? datadetail?.alamat : data?.alamat}</p>
                                    </div>
                                    <div className="w-full border-b-2 border-sky-700 mt-6  py-2 flex justify-between">
                                        <p>Tempat Lahir</p>
                                        <p className="text-lg font-semibold">{data?.tempat_lahir == null ? datadetail?.tempat_lahir : data?.tempat_lahir}</p>
                                    </div>
                                    <div className="w-full border-b-2 border-sky-700 mt-6  py-2 flex justify-between">
                                        <p>Tanggal lahir</p>
                                        <p className="text-lg font-semibold">{data?.tanggal_lahir == null ? datadetail?.tanggal_lahir : data?.tanggal_lahir}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="justify-center flex pt-8">
                                    <Button
                                        size='lg'
                                        colorScheme='facebook'
                                        leftIcon={<MdEdit />}
                                        onClick={() => navigate(`/dash-siswa/edit-profile/${id}`)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        size={MediaQ ? 'lg' : 'md'}
                                        colorScheme='yellow'
                                        marginLeft={'5'}
                                        leftIcon={<MdEdit />}
                                        onClick={() => setBuka(true)}
                                    >
                                        Ubah Password
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Modal onClose={onTutup1} isOpen={buka} size='xl' isCentered>
                            <ModalOverlay bg='blackAlpha.200'
                                backdropFilter='auto'
                                backdropBlur='1px' />
                            <Formik
                                initialValues={initialValues}
                                validationSchema={NpsnSchema}
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
                                    <form onSubmit={handleSubmit} className='w-full'>
                                        <ModalContent >
                                            <ModalHeader></ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody>
                                                <div className='text-3xl font-sans flex font-semibold'>
                                                    <div className='text-center mx-10 mb-5 w-full'>
                                                        Ubah Password
                                                    </div>
                                                </div>
                                                <div className="border-b-8 border-blue-300 rounded-md mx-10" />
                                                <div>
                                                    <div className='mx-10 my-4'>
                                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                                        <Input
                                                            placeholder='Enter your password'
                                                            borderColor='#1F8AC6'
                                                            id='password'
                                                            type='password'
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={errors.password && touched.password}
                                                            disabled={isSubmitting}
                                                        />
                                                        <div className=' text-red-400 text-sm mt-2'>{errors.password && touched.password && errors.password}</div>
                                                    </div>
                                                    <div className='mx-10 mt-5'>

                                                    </div>
                                                </div>
                                            </ModalBody>
                                            <ModalFooter><Button
                                                size='md'
                                                isFullWidth
                                                tabIndex="3"
                                                htmlType="submit"
                                                disabled={isSubmitting}
                                                block
                                                variant="solid"
                                                bgColor="#1F8AC6"
                                                color="white"
                                                loading={isSubmitting}
                                                type='submit'
                                                onSubmit={handleSubmit}
                                            >
                                                <span className="font-semibold text-xl">{isLoading ? "Process ..." : "Simpan"}</span>
                                            </Button></ModalFooter>
                                        </ModalContent>
                                    </form>
                                )}
                            </Formik>
                        </Modal>
                    </div>
                )
            }
        </Layout>
    );
}