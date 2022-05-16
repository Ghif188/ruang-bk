import React from "react"
import { useParams } from "react-router"
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { getUserAktifasi, getSudahAktif } from "../../api/guru";
import axios from "../../api/axiosClient";
import * as Yup from 'yup';
import {
    Button,
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Spinner,
    Th,
    Td,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useToast,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    TableCaption,
    Icon,
    FormLabel,
} from '@chakra-ui/react'
import { Formik } from "formik";
import { FiEdit } from 'react-icons/fi'
import { IoMdArrowRoundBack, IoMdAddCircle } from 'react-icons/io'
import { Link } from "react-router-dom";
export default function Soalangket() {
    const navigate = useNavigate();
    let queryClient = useQueryClient();
    let id = useParams().id;
    const toast = useToast()
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "user-belum",
            {
                id: id
            }
        ],

        () =>
            getUserAktifasi({
                id: id
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    const { data: datauser } = useQuery(
        [
            "user-sudah",
            {
                id: id
            }
        ],

        () =>
            getSudahAktif({
                id: id
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    return (
        <div className="h-screen relative">
            <div className="h-1/10 w-full text-white px-10 fixed shadow-md flex items-center z-20 bg-sky-700">
                <Link to='/dash-guru/angket'>
                    <IoMdArrowRoundBack className="text-2xl" />
                </Link>
            </div>
            <div className="w-full h-full">
                <div className="h-1/10" />
                <div className="w-full h-8/10 mt-10 justify-center flex ">
                    <div className="w-3/4">
                        <div className="h-2/10 px-10 flex items-center rounded-t-xl bg-amber-300">
                            <div className="w-full flex items-center justify-between">
                                <p className="text-xl text-white font-semibold">
                                    Angket Bahasa Inggris
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 rounded sky-xl">
                            <Table variant='striped' colorScheme='twitter'>
                                <Thead>
                                    <Tr>
                                        <Th>No.</Th>
                                        <Th>Nama User</Th>
                                        <Th textAlign={'center'}>
                                            Aksi
                                        </Th>
                                    </Tr>
                                </Thead>
                                {
                                    isLoading ? (
                                        <div className="w-full h-full justify-center items-center flex">
                                            <Spinner
                                                thickness='5px'
                                                speed='0.65s'
                                                emptyColor='gray.200'
                                                color='blue.500'
                                                size='xl'
                                            />
                                        </div>
                                    ) : (
                                        <Tbody>
                                            {data?.data.map((row, index) => (
                                                <Tr key={index}>
                                                    <Td>
                                                        {index + 1} .
                                                    </Td>
                                                    <Td>
                                                        {row.nama_siswa}
                                                    </Td>
                                                    <Td>
                                                        <div className="flex justify-center">
                                                            <Button
                                                                colorScheme='whatsapp'
                                                                htmlType="submit"
                                                                block
                                                                variant="solid"
                                                                bgColor={"greenyellow"}
                                                                color="white"
                                                                shadow='md'
                                                                type='submit'
                                                            >
                                                                Beri Akses
                                                            </Button>
                                                        </div>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    )
                                }
                            </Table>
                            {datauser?.data.length === 0 ? (
                                <div className="text-center">Belum ada Siswa yg diberi akses</div>
                            ) : ''}
                            {/* <div className="flex text-xl items-center mt-10 font-semibold">
                                <IoMdAddCircle className=" text-green-500 mr-2" />
                                Masukkan Soal
                            </div>
                            <Formik
                                initialValues={initialValues}
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
                                    <form onSubmit={handleSubmit}>
                                        <Table variant='' colorScheme='twitter'>
                                            <Tbody>
                                                <Tr>
                                                    <Td>
                                                        <Input
                                                            placeholder='Masukkan Soal'
                                                            id='soal'
                                                            type='text'
                                                            value={values.soal}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            w='full'
                                                            error={errors.nama_user && touched.nama_user}
                                                            disabled={isSubmitting}
                                                        />

                                                    </Td>
                                                    <Td>
                                                        <Button
                                                            colorScheme='blue'
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
                                                            {isSubmitting ?
                                                                (<Spinner
                                                                    thickness='5px'
                                                                    speed='0.65s'
                                                                    emptyColor='gray.200'
                                                                    color='blue.500'
                                                                    size='md'
                                                                />) : "Save"}
                                                        </Button>
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        </Table>
                                    </form>
                                )}
                            </Formik> */}
                        </div>
                        <div className="mt-7 font-semibold">
                            <div className="text-xl">
                                Siswa Yang Sudah Ada Akses
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}