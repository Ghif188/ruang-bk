import React from "react";
import Jempol from "../../assets/bouken.png"
import Layout from "../../layouts/adminlayout"
import * as Yup from 'yup';
import { tambahAngket, getAngket, deleteAngket } from "../../api/admin";
import { useQuery, useQueryClient } from "react-query";
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
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Spinner,
    FormLabel,
    DrawerCloseButton,
    useMediaQuery
} from "@chakra-ui/react";
import { Formik } from "formik";
import { useNavigate } from 'react-router-dom';
import { Media } from "react-data-table-component";
const RegisterSchema = Yup.object().shape({
    nama_angket: Yup.string().required("Wajib di Isi"),
    keterangan: Yup.string().required("Wajib di Isi"),
});

export default function Angket() {
    const initialValues = {
        nama_angket: "",
        keterangan: "",
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
    console.log(data)
    const [editId, setEditId] = React.useState()
    let queryClient = useQueryClient();
    const toast = useToast()
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onSubmit = async (values) => {
        try {
            await tambahAngket(values);
            queryClient.invalidateQueries("angket")
            toast({
                title: 'Account created.',
                status: 'success',
                position: 'top',
                description: 'Akun Angket Telah Terbuat.',
                variant: 'left-accent',
                duration: 1000,
                isClosable: true,
            });
            onClose();
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
    const multiFuncti = async () => {
        onDelete(editId);
        onTutup()
    }
    const multiFunct = async (id) => {
        setOpen(true)
        setEditId(id)
    }
    const [open, setOpen] = React.useState(false)
    const onTutup = () => setOpen(false)
    const onDelete = async (id) => {
        const result = await deleteAngket(id);
        queryClient.invalidateQueries("angket")
        toast({
            title: 'Delete Account',
            status: 'success',
            position: 'top',
            description: 'Akun Angket Telah Dihapus.',
            variant: 'left-accent',
            duration: 9000,
            isClosable: true,
        })
    };
    const [MediaQ] = useMediaQuery('(min-width: 766px)');

    return (
        <Layout>
            <div className="bg-white antialiased bg-opacity-50 h-full w-9/12 px-10 md-max:px-0 pt-2 md-max:w-full">
                <div className="bg-gray-200 h-full w-full p-2 md-max:p-0 justify-center flex">
                    <div className="h-full w-full scroll-smooth overflow-y-scroll snap-y">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            height='100%'
                        >
                            {/* atas */}
                            <div className="h-2/10 bg-gradient-to-r flex justify-center items-center from-sky-500 to-sky-800  text-white md-max:px-4 md-max:pt-6 md-max:h-3/10">
                                <div className="w-7/10 h-7/10 md-max:h-full">
                                    <div className="text-2xl pb-5 flex md-max:text-base">
                                        <p className="pr-2">Give Your Best</p><img src={Jempol} className="w-9 h-9 md-max:w-6 md-max:h-6" alt="" />
                                    </div>
                                    <p className="md-max:text-sm">The more we are grateful, the more happiness we get.</p>
                                </div>
                                <div className="h-7/10 flex items-end">
                                    <Button
                                        size='sm'
                                        height={MediaQ ? '40px' : '30px'}
                                        rounded='lg'
                                        px={MediaQ ? '25px' : '10px'}
                                        type='submit'
                                        variant="solid"
                                        bgColor='#F0BF12'
                                        color="white"
                                        _hover={{ bg: 'orange.500' }}
                                        onClick={onOpen}
                                    >
                                        <p className="text-xs md:text-base">
                                            Tambah Angket
                                        </p>
                                    </Button>
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
                                                    Buat Angket
                                                </DrawerHeader>
                                                <form onSubmit={handleSubmit} className='w-full h-full'>
                                                    <DrawerBody>
                                                        <div>
                                                            <div className='my-2'>
                                                                <FormLabel htmlFor='nama_angket'>Nama Angket</FormLabel>
                                                                <Input
                                                                    placeholder='Isi Nama Angket'
                                                                    id='nama_angket'
                                                                    type='text'
                                                                    value={values.nama_angket}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    error={errors.nama_angket && touched.nama_angket}
                                                                    disabled={isSubmitting}
                                                                />
                                                                <div className=' text-red-400 text-xs mt-2'>{errors.nama_angket && touched.nama_angket && errors.nama_angket}</div>
                                                            </div>
                                                            <div className='my-2'>
                                                                <FormLabel htmlFor='keterangan'>Keterangan</FormLabel>
                                                                <Input
                                                                    placeholder='Masukkan Keterangan'
                                                                    id='keterangan'
                                                                    type='text'
                                                                    value={values.keterangan}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    error={errors.keterangan && touched.keterangan}
                                                                    disabled={isSubmitting}
                                                                />
                                                                <div className=' text-red-400 text-xs mt-2'>{errors.nama_user && touched.nama_user && errors.nama_user}</div>
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
                            </div>
                            {/* bawah */}
                            <div className="h-full p-5 mt-5 bg-white md-max:w-full">
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
                                        <div >
                                            {
                                                data?.data.length === 0 ? (
                                                    <div className="w-full flex justify-center">Belum Ada Angket</div>
                                                ) : (
                                                    <div className="">{data?.data.map((angket, index) => (
                                                        <div key={index} className="flex items-center px-5 mb-7  justify-between border-b-2 border-hijau pb-3 md-max:px-1">
                                                            <div className="w-full px-5 py-3 flex rounded-lg text-white items-center justify-between bg-blue-400 md-max:py-2 md-max:px-2">
                                                                <div className="w-8/10">
                                                                    <p className="font-semibold pb-3 text-lg border-b-2 md-max:text-sm md-max:pb-1">{angket.nama_angket}</p>
                                                                    <div className="flex pt-3 justify-between items-center md-max:pt-1">
                                                                        <p className="text-sm md-max:text-xs">{angket.keterangan}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="w-2/10 md:flex justify-around items-center md-max:px-2">
                                                                    <Button
                                                                        shadow='md'
                                                                        rounded='lg'
                                                                        width={MediaQ ? '20' : '16'}
                                                                        size={MediaQ ? 'md' : 'sm'}
                                                                        _hover={{ bg: '#0369A1' }}
                                                                        bgColor='blue.200'
                                                                        onClick={() => navigate(`/dash-admin/angket/${angket.id}`)}
                                                                    >
                                                                        <p className="text-xs md:text-base">
                                                                            Soal
                                                                        </p>
                                                                    </Button>
                                                                    <Button
                                                                        shadow='md'
                                                                        rounded='lg'
                                                                        width={MediaQ ? '20' : '16'}
                                                                        size={MediaQ ? 'md' : 'sm'}
                                                                        _hover={{ bg: 'red.700' }}
                                                                        bgColor='red.600'
                                                                        onClick={() => multiFunct(angket.id)}
                                                                    >
                                                                        <p className="text-xs md:text-base">
                                                                            Delete
                                                                        </p>
                                                                    </Button>
                                                                </div>
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
                <AlertDialog
                    isOpen={open}
                    onClose={onTutup}
                >
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Hapus Akun Siswa
                            </AlertDialogHeader>
                            <AlertDialogBody>
                                Apakah kamu yakin untuk menghapus akun siswa ?.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button onClick={onTutup}>
                                    Cancel
                                </Button>
                                <Button colorScheme='red' onClick={() => multiFuncti()} ml={3}>
                                    Delete
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </div>
        </Layout>
    );
}