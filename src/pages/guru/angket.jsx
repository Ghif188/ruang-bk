import React from "react";
import Jempol from "../../assets/bouken.png"
import Layout from "../../layouts/gurulayout"
import * as Yup from 'yup';
import { getAngket, getSiswa, } from "../../api/guru";
import { useQuery, useQueryClient } from "react-query";
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
    nama_angket: Yup.string().required("Wajib di Isi"),
    keterangan: Yup.string().required("Wajib di Isi"),
    batas_waktu: Yup.date().required("Wajib di Isi"),
});

export default function Angket() {
    const initialValues = {
        nama_angket: "",
        keterangan: "",
        batas_waktu: "",
    };
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
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
    const { data: datauser } = useQuery(
        [
            "siswa",
        ],
        () =>
            getSiswa(),
        {
            keepPreviousData: true,
            select: (response) => response.data,
        }
    );
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
                                        colorScheme={"red"}
                                        onClick={()=>navigate("/dash-guru/angket")}
                                        size={"sm"}
                                    >
                                        <IoArrowBackCircle /> lihat aktifasi
                                    </Button>
                                    <Button
                                        colorScheme={"whatsapp"}
                                        onClick={()=>onOpen()}
                                        size={"sm"}
                                    >
                                        <IoMdAddCircle /> Tambah Akses
                                    </Button>
                                </div>
                            </div>
                            {/* bawah */}
                            <div className="h-3/4 p-5 flex justify-center scroll-smooth overflow-y-scroll snap-y mt-5">
                                belum ada akses
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
                    // onSubmit={onSubmit}
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
                                // onSubmit={handleSubmit} 
                                className='w-full h-full'>
                                <DrawerBody>
                                    <div>
                                        <div className='my-2'>
                                            <FormLabel htmlFor='nama_angket'>Angket</FormLabel>
                                            <Select
                                                placeholder='Nama Angket'
                                                id='nama_angket'
                                                value={values.nama_angket}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.nama_angket && touched.nama_angket}
                                                disabled={isSubmitting}
                                            />
                                            <div className=' text-red-400 text-xs'>{errors.nama_angket && touched.nama_angket && errors.nama_angket}</div>
                                        </div>
                                        <div className='my-2'>
                                            <FormLabel htmlFor='keterangan'>Keterangan</FormLabel>
                                            <Input
                                                placeholder='Keterangan'
                                                id='keterangan'
                                                type='text'
                                                value={values.keterangan}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={errors.keterangan && touched.keterangan}
                                                disabled={isSubmitting}
                                            />
                                            <div className=' text-red-400 text-xs'>{errors.keterangan && touched.keterangan && errors.keterangan}</div>
                                        </div>
                                        <div className='my-2'>
                                            <FormLabel htmlFor='batas_waktu'>Batas Waktu</FormLabel>
                                            <Input
                                                placeholder='Enter your batas_waktu'
                                                id='batas_waktu'
                                                type='date'
                                                value={values.batas_waktu}
                                                onBlur={handleBlur}
                                                error={errors.batas_waktu && touched.batas_waktu}
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                            />
                                            <div className=' text-red-400 text-xs'>{errors.batas_waktu && touched.batas_waktu && errors.batas_waktu}</div>
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
                                        // onSubmit={handleSubmit}
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