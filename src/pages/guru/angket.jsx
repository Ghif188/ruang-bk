import React from "react";
import Jempol from "../../assets/bouken.png"
import Layout from "../../layouts/gurulayout"
import * as Yup from 'yup';
import { aktivasiAngket } from "../../api/guru";
import { getAngket, getAktifasi, importJawaban } from "../../api/guru";
import { useQuery, useQueryClient } from "react-query";
import { saveAs } from "file-saver";
import axios from "../../api/axiosClient";
import {
    useDisclosure,
    Tbody,
    Box,
    Button,
    useToast,
    Img,
    Icon,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Input,
    Checkbox,
    Spinner,
    FormLabel,
    DrawerCloseButton,
    Select,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { FiEdit } from "react-icons/fi"
import { IoMdAddCircle } from "react-icons/io"
import { IoArrowBackCircle } from "react-icons/io5"
import { useNavigate } from 'react-router-dom';
const RegisterSchema = Yup.object().shape({
    angket_id: Yup.string().required("Wajib di Isi"),
    finish_at: Yup.string().required("Wajib di Isi"),
});

export default function Angket() {
    const initialValues = {
        angket_id: "",
        time: "36000",
        start_at: "1111",
        finish_at: "",
    };
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "angket-aktif",
        ],

        () =>
            getAktifasi(),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    const { data: datangket } = useQuery(
        [
            "angket",
        ],

        () =>
            getAngket(),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    console.log(data)
    const [editId, setEditId] = React.useState()
    let queryClient = useQueryClient();
    const toast = useToast()
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const multiFuncti = async () => {
        onTutup()
    }
    const multiFunct = async (id) => {
        setOpen(true)
        setEditId(id)
    }
    const [open, setOpen] = React.useState(false)
    const onTutup = () => setOpen(false)
    const onSubmit = async (values) => {
        try {
            await aktivasiAngket(values);
            queryClient.invalidateQueries("angket-aktif")
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
    // const onImport = async (id) => {
    //     try {
    //         await importJawaban(id);
    //         toast({
    //             title: 'Jawaban Terdownload.',
    //             status: 'success',
    //             position: 'top',
    //             description: 'Pertanyaan Soal Telah Terbuat.',
    //             variant: 'left-accent',
    //             duration: 1000,
    //             isClosable: true,
    //         });
    //     } catch (err) {
    //         let halo = (err.response.data.message)
    //         toast({
    //             title: 'Failed',
    //             status: 'error',
    //             position: 'top',
    //             variant: 'left-accent',
    //             duration: 1000,
    //             isClosable: true,
    //             description: `${halo}`,
    //         })
    //     }
    // };
    const onImport = async (id) => {
        const result = await importJawaban(id);
        console.log(result)
        queryClient.invalidateQueries("siswa")
        toast({
            title: 'Delete Account',
            status: 'success',
            position: 'top',
            description: 'Akun Siswa Telah Dihapus.',
            variant: 'left-accent',
            duration: 9000,
            isClosable: true,
        })
        let url = window.URL.createObjectURL(new Blob([result.data]));
        saveAs(url, "jawaban-angket.xlsx");

    };
    return (
        <Layout>
            <div className="bg-white antialiased bg-opacity-50 h-full sm-max:w-max w-9/12 px-10 pt-2">
                <div className="bg-gray-200 h-full w-full p-5 justify-center flex">
                    <div className="h-full w-full ">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                            height='100%'
                        >
                            {/* atas */}
                            <div className="rounded-t-2xl h-2/10 bg-gradient-to-r px-10 justify-between flex items-center from-sky-500 to-sky-800  text-white">
                                <div className="">
                                    <div className="text-2xl pb-5 flex">
                                        Aktifkan Siswa pada Akses
                                    </div>
                                    <p>The more we are grateful, the more happiness we get.</p>
                                </div>
                                <div className=" space-x-3 ">
                                    <Button
                                        colorScheme={"whatsapp"}
                                        onClick={() => onOpen()}
                                        size={"sm"}
                                    >
                                        <IoMdAddCircle /> Aktifkan Angket
                                    </Button>
                                </div>
                            </div>
                            {/* bawah */}
                            <div className="h-3/4 p-5 flex justify-center scroll-smooth overflow-y-scroll snap-y mt-5">
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
                                        <div className="w-full" >
                                            {
                                                data?.data.length === 0 ? (
                                                    <div className="w-full flex justify-center">Belum Ada Angket Yang Aktif</div>
                                                ) : (
                                                    <div className="">{data?.data.map((angket, index) => (
                                                        <div key={index} className="flex w-full items-center px-5 mb-7 justify-between border-b-2 border-hijau pb-3 md-max:px-1">
                                                            <div className=" capitalize text-lg">
                                                                {angket.nama_angket}
                                                            </div>
                                                            <div className=" space-x-5">
                                                                <Button
                                                                    shadow='md'
                                                                    rounded='lg'
                                                                    size={'md'}
                                                                    _hover={{ bg: '#0369A1' }}
                                                                    bgColor='blue.200'
                                                                    onClick={() => navigate(`/dash-guru/angket/akses/${angket.id}`)}
                                                                >
                                                                    Akses Siswa
                                                                </Button>
                                                                <Button
                                                                    onClick={()=>onImport(angket.angket_id)}
                                                                >
                                                                    Jawaban Siswa
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='sm'
            >
                <DrawerOverlay />
                <Formik
                    initialValues={initialValues}
                    validationSchema={RegisterSchema}
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
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader
                                borderBottomWidth='1px'
                            >
                                <p className="md-max:text-sm">Buat Akses Angket</p>
                            </DrawerHeader>
                            <form
                                onSubmit={handleSubmit}
                                className='w-full h-full'>
                                <DrawerBody>
                                    <div>
                                        <div className='my-2'>
                                            <FormLabel htmlFor='nama_angket'>Angket</FormLabel>
                                            <Select
                                                placeholder='Nama Angket'
                                                id='angket_id'
                                                value={values.angket_id}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.angket_id && touched.angket_id}
                                                disabled={isSubmitting}
                                            >
                                                {datangket?.data.map((angket, index) => (
                                                    <option key={index} value={angket.id}>{angket.nama_angket}</option>
                                                ))}
                                            </Select>
                                            <div className=' text-red-400 text-xs'>{errors.angket_id && touched.angket_id && errors.angket_id}</div>
                                        </div>
                                        <div className='my-2'>
                                            <FormLabel htmlFor='batas_waktu'>Batas Waktu</FormLabel>
                                            <Input
                                                placeholder='Batas Waktu'
                                                id='finish_at'
                                                type='text'
                                                value={values.finish_at}
                                                onBlur={handleBlur}
                                                error={errors.finish_at && touched.finish_at}
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                            />
                                            <div className=' text-red-400 text-xs'>{errors.finish_at && touched.finish_at && errors.finish_at}</div>
                                        </div>
                                    </div>
                                </DrawerBody>
                                <DrawerFooter>
                                    <Button variant='outline' mr={3} onClick={onClose}>
                                        Cancel
                                    </Button>
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
                                </DrawerFooter>
                            </form>
                        </DrawerContent>
                    )}
                </Formik>
            </Drawer>
        </Layout>
    );
}