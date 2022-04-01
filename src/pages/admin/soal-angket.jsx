import React from "react"
import { useParams } from "react-router"
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { getSoalAngket, tambahSoal } from "../../api/admin";
import {
    Button,
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Spinner,
    Th,
    Td,
    useToast,
    TableCaption,
    Icon
} from '@chakra-ui/react'
import { Formik } from "formik";
import { FiEdit } from 'react-icons/fi'
import { IoMdArrowRoundBack, IoMdAddCircle } from 'react-icons/io'
import { Link } from "react-router-dom";
export default function Soalangket() {
    const navigate = useNavigate();
    let queryClient = useQueryClient();
    let id = useParams().id
    const toast = useToast()
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "soal-angket",
            {
                id: id
            }
        ],

        () =>
            getSoalAngket({
                id: id
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    const initialValues = {
        soal: "",
        angket_id: id
    };
    const onSubmit = async (values) => {
        try {
            await tambahSoal(values);
            queryClient.invalidateQueries("soal-angket")
            toast({
                title: 'Soal Terbuat.',
                status: 'success',
                position: 'top',
                description: 'Pertanyaan Soal Telah Terbuat.',
                variant: 'left-accent',
                duration: 1000,
                isClosable: true,
            });
        } catch (err) {
            let halo = (err.response.data.message)
            toast({
                title: 'Failed',
                status: 'error',
                position: 'top',
                variant: 'left-accent',
                duration: 1000,
                isClosable: true,
                description: `${halo}`,
            })
        }
    };
    console.log(data)
    let hasil = data?.data[0].soal
    console.log(hasil)
    return (
        <div className="h-screen relative">
            <div className="h-1/10 w-full text-white px-10 fixed shadow-md flex items-center z-20 bg-sky-700">
                <Link to='/dash-admin/angket'>
                    <IoMdArrowRoundBack className="text-2xl" />
                </Link>
            </div>
            <div className="w-full h-full">
                <div className="h-1/10" />
                <div className="w-full h-8/10 mt-10 justify-center flex ">
                    <div className="w-3/4">
                        <div className="h-2/10 px-10 flex items-center rounded-t-xl bg-amber-200">
                            <div className="w-full">
                                <p className="text-xl text-white font-semibold mb-5">
                                    Angket Bahasa Inggris
                                </p>
                                <div className="font-light flex justify-between items-center w-full">
                                    <div className=" z-0">
                                        <Button
                                            rounded='lg'
                                            size='md'
                                            colorScheme='twitter'
                                            onClick={() => navigate(`dash-admin/angket/edit/${id}`)}
                                        >
                                            <div className="flex items-center">
                                                Simpan Soal
                                                <span className="ml-3">
                                                    <FiEdit />
                                                </span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 rounded sky-xl">
                            <Table variant='striped' colorScheme='twitter'>
                                <Thead>
                                    <Tr>
                                        <Th w='min'>No.</Th>
                                        <Th>Soal</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data?.data.map((row, index) => (
                                        <Tr key={index}>
                                            <Td>
                                                {index + 1}
                                            </Td>
                                            <Td>
                                                {row.soal}
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            {data?.data.length === 0 ? (
                                <div className="text-center">Belum ada Soal</div>
                            ) : ''}

                            <div className="flex text-xl items-center mt-10 font-semibold">
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
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}