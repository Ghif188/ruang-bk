import React from "react";
import Layout from "../../layouts/gurulayout"
import { Table, Th, Td, Thead, Tr, Tbody } from "@chakra-ui/react";
import { IoMdPersonAdd } from "react-icons/io"
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import { AiFillFileAdd } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    FormLabel,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useToast,
    Spinner,
    Collapse
} from "@chakra-ui/react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { registerSiswa, getSiswa, deleteSiswa, showSiswa } from "../../api/guru";
import { useQuery, useQueryClient } from "react-query";
const RegisterSchema = Yup.object().shape({
    nisn: Yup.number().required("Wajib di Isi").positive().integer(),
    nama_user: Yup.string().required("Wajib di Isi"),
    alamat: Yup.string().required("Wajib di Isi"),
    sekolah: Yup.string().required("Wajib di Isi"),
    nomor_telp: Yup.number().required("Wajib di Isi").positive().integer(),
    email: Yup.string().email().required("Wajib di isi"),
    role: Yup.number().integer(),
    status: Yup.number().integer(),
    password: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .required("wajib di isi"),
    password_confirmation: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .oneOf([Yup.ref("password")], "Password dan Konfirmasi Password wajib sama")
        .required("wajib di isi"),
});

export default function Murid() {
    const initialValues = {
        nama_user: "",
        nomor_telp: "",
        email: "",
        password: "",
        password_confirmation: "",
    };
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [open, setOpen] = React.useState(false)
    const onTutup = () => setOpen(false)

    const [buka, setBuka] = React.useState(false)
    const onTutup1 = () => setBuka(false)

    let queryClient = useQueryClient();
    const navigate = useNavigate();
    const toast = useToast()
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.isLoading);
    const [page, setPage] = React.useState(1)
    const [perpage, setPerpage] = React.useState(5)
    const [userid, setUserid] = React.useState()
    const [siswa, setSiswa] = React.useState([])

    const handleNextPage = () => {
        setPage(page + 1)
    }
    const handleBeforePage = () => {
        if (page === 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }
    const onSubmit = async (values) => {
        try {
            await registerSiswa(values);
            queryClient.invalidateQueries("siswa")
            toast({
                title: 'Account created.',
                status: 'success',
                position: 'top',
                description: 'Akun Siswa Telah Terbuat.',
                variant: 'left-accent',
                duration: 1000,
                isClosable: true,
            });
            onClose();
            navigate("/dash-guru/murid")
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
    const multiFunc = async (id) => {
        setOpen(true);
        setEditid(id);
        console.log(id)
    }
    const multiFuncti = async () => {
        onDelete(editid);
        onTutup()
    }
    const multiFunct = async (id) => {
        onShow(id);
        setBuka(true);
    }
    const [editid, setEditid] = React.useState();
    const onDelete = async (id) => {
        const result = await deleteSiswa(id);
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
    };
    const onShow = async (id) => {
        const result = await showSiswa(id);
        setSiswa(result.data.data)
    };
    let params = {
        page,
        perpage
    }
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "siswa",
            params
        ],

        () =>
            getSiswa(params),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    console.log(data)
    const pageakhir = data?.last_page

    return (
        <Layout>
            <div className=" bg-transparent h-full w-10/12 px-20 ">
                <div className="mx-10 h-full shadow-lg shadow-cyan-100 py-10 p-5">
                    <div className=" flex items-center justify-between shadow-green-500 shadow-inner bg-hijau rounded-lg p-5 mb-5  text-white">
                        <div className="flex justify-around text-lg font-bahnschrift font-bold w-1/5 items-center">
                            <IoMdPersonAdd className="w-10 h-10" />
                            Tambah Siswa
                        </div>
                        <div className="flex w-1/4 justify-evenly">
                            <Button colorScheme='twitter' color='white' shadow='md'>
                                <div className="flex items-center">
                                    Export
                                    <AiFillFileAdd />
                                </div>
                            </Button>
                            <Button colorScheme='messenger' shadow='md' onClick={onOpen}>
                                Tambah +
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
                                            Buat Akun Siswa
                                        </DrawerHeader>
                                        <form onSubmit={handleSubmit} className='w-full h-full'>
                                            <DrawerBody>
                                                <div>
                                                    <div className='my-2'>
                                                        <FormLabel htmlFor='nisn'>NISN</FormLabel>
                                                        <Input
                                                            placeholder='Isi NISN Siswa'
                                                            id='nisn'
                                                            type='text'
                                                            value={values.nisn}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={errors.nisn && touched.nisn}
                                                            disabled={isSubmitting}
                                                        />
                                                        <div className=' text-red-400 text-xs mt-2'>{errors.nisn && touched.nisn && errors.nisn}</div>
                                                    </div>
                                                    <div className='my-2'>
                                                        <FormLabel htmlFor='nama_user'>Username</FormLabel>
                                                        <Input
                                                            placeholder='Enter your name'
                                                            id='nama_user'
                                                            type='text'
                                                            value={values.nama_user}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={errors.nama_user && touched.nama_user}
                                                            disabled={isSubmitting}
                                                        />
                                                        <div className=' text-red-400 text-xs mt-2'>{errors.nama_user && touched.nama_user && errors.nama_user}</div>
                                                    </div>
                                                    <div className='my-2'>
                                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                                        <Input
                                                            placeholder='Enter your Email'
                                                            id='email'
                                                            type='email'
                                                            value={values.email}
                                                            onBlur={handleBlur}
                                                            error={errors.email && touched.email}
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
                                                        />
                                                        <div className=' text-red-400 text-xs mt-2'>{errors.email && touched.email && errors.email}</div>
                                                    </div>
                                                    <div className='my-2'>
                                                        <FormLabel htmlFor='alamat'>Alamat</FormLabel>
                                                        <Input
                                                            placeholder='isi Alamat Siswa'
                                                            id='alamat'
                                                            type='text'
                                                            value={values.alamat}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={errors.alamat && touched.alamat}
                                                            disabled={isSubmitting}
                                                        />
                                                        <div className=' text-red-400 text-xs mt-2'>{errors.alamat && touched.alamat && errors.alamat}</div>
                                                    </div>
                                                    <div className='my-2'>
                                                        <FormLabel htmlFor='sekolah'>Asal Sekolah</FormLabel>
                                                        <Input
                                                            placeholder='Asal Sekolah Siswa'
                                                            id='sekolah'
                                                            type='text'
                                                            value={values.sekolah}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={errors.sekolah && touched.sekolah}
                                                            disabled={isSubmitting}
                                                        />
                                                        <div className=' text-red-400 text-xs mt-2'>{errors.sekolah && touched.sekolah && errors.sekolah}</div>
                                                    </div>
                                                    <div className='my-2'>
                                                        <FormLabel htmlFor='nomor_telp'>Whatsapp</FormLabel>
                                                        <Input
                                                            placeholder='Enter your Whatsapp number'
                                                            id='nomor_telp'
                                                            type='number'
                                                            value={values.nomor_telp}
                                                            onBlur={handleBlur}
                                                            error={errors.nomor_telp && touched.nomor_telp}
                                                            onChange={handleChange}
                                                            disabled={isSubmitting}
                                                        />
                                                        <div className=' text-red-400 text-xs mt-2'>{errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}</div>
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
                                                            size='xl'
                                                        />) : "Save"}
                                                </Button>
                                            </DrawerFooter>
                                        </form>
                                    </DrawerContent>
                                )}
                            </Formik>
                        </Drawer>
                    </div>
                    <div className="h-2/3 m-10">
                        <Table variant='striped' shadow='xl' rounded='xl' size='sm' colorScheme='whatsapp'>
                            <Thead>
                                <Tr>
                                    <Th padding='3'>
                                        <div className="text-center text-blue-600">
                                            Nama User
                                        </div>
                                    </Th>
                                    <Th>
                                        <div className="text-center text-blue-600">
                                            Email
                                        </div>
                                    </Th>
                                    <Th>
                                        <div className="text-center text-blue-600">
                                            Nomor Whatsapp
                                        </div>
                                    </Th>
                                    <Th>
                                        <div className="text-center text-blue-600">
                                            Action
                                        </div>
                                    </Th>
                                </Tr>
                            </Thead>
                            {isLoading ? ''
                                : (
                                    <Tbody>
                                        {data?.data.map((row, index) => (
                                            <Tr key={index}>
                                                <Td className=" text-amber-800 font-semibold">
                                                    <div className="ml-5 my-3 uppercase">
                                                        {row.nama_siswa}
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <div className="text-center">
                                                        {row.email}
                                                    </div></Td>
                                                <Td>
                                                    <div className="text-center">
                                                        {row.nomor_telp}
                                                    </div></Td>
                                                <Td>
                                                    <div className="flex justify-center">
                                                        <Button
                                                            colorScheme='facebook'
                                                            className="mr-5"
                                                            size='sm'
                                                            shadow='md'
                                                            onClick={() => multiFunct(row.user_id)}
                                                        >
                                                            Show
                                                        </Button>
                                                        <Modal onClose={onTutup1} isOpen={buka} isCentered>
                                                            <ModalOverlay />
                                                            <ModalContent>
                                                                <ModalHeader>Info Akun Siswa</ModalHeader>
                                                                <ModalCloseButton />
                                                                <ModalBody>
                                                                    <div>
                                                                        <div className='my-5'>
                                                                            <div className="text-sky-600 p-2 font-bold font-bahnschrift text-xl">Nama Siswa</div>
                                                                            <div className="bg-pink-200 text-right px-5 py-2 uppercase text-lg rounded-md">{siswa.nama_siswa}</div>
                                                                        </div>
                                                                        <div className='my-5'>
                                                                            <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">NISN</div>
                                                                            <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.nisn}</div>
                                                                        </div>
                                                                        <div className='my-5'>
                                                                            <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Tanggal Lahir</div>
                                                                            <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.tanggal_lahir}</div>
                                                                        </div>
                                                                        <div className='my-5'>
                                                                            <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Tempat Lahir</div>
                                                                            <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.tempat_lahir}</div>
                                                                        </div>
                                                                        <div className='my-5'>
                                                                            <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Alamat</div>
                                                                            <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.alamat}</div>
                                                                        </div>
                                                                        <div className='my-5'>
                                                                            <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Email</div>
                                                                            <div className="bg-pink-200 text-right px-5 py-2 text-md rounded-md">{siswa.email}</div>
                                                                        </div>
                                                                        <div className='my-5'>
                                                                            <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Whatsapp</div>
                                                                            <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.nomor_telp}</div>
                                                                        </div>
                                                                    </div>
                                                                </ModalBody>
                                                                <ModalFooter>
                                                                    <Button onClick={onTutup1}>Close</Button>
                                                                </ModalFooter>
                                                            </ModalContent>
                                                        </Modal>
                                                        <Button
                                                            colorScheme='red'
                                                            size='sm'
                                                            shadow='md'
                                                            onClick={
                                                                () => multiFunc(row.id)
                                                            }
                                                        >
                                                            Delete
                                                        </Button>
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
                                                </Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                )}
                        </Table>
                        {isLoading ? (
                            <div className="flex mt-10 justify-center">
                                <Spinner
                                    thickness='5px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                />
                            </div>
                        ) : ''}
                    </div>
                    {(() => {
                        if (pageakhir === 1) {
                            return (
                                <div className="flex mt-10 justify-center items-center">
                                    <div className="text-2xl text-gray-400 mx-3">
                                        <MdOutlineNavigateBefore />
                                    </div>
                                    <div className="bg-gray-200 p-3 w-12 h-12 text-center shadow-inner shadow-slate-300 font-bahnschrift rounded-md">{page}</div>
                                    <div className="text-2xl text-gray-400 font-bold mx-3">
                                        <MdOutlineNavigateNext />
                                    </div>
                                </div>
                            )

                        } else {
                            return (
                                <div className="flex mt-10 justify-center items-center">
                                    {page === 1 ? (
                                        <div className="text-2xl text-gray-400 mx-3" onClick={handleBeforePage}>
                                            <MdOutlineNavigateBefore />
                                        </div>
                                    ) : (
                                        <div className="text-2xl text-blue-400 mx-3" onClick={handleBeforePage}>
                                            <MdOutlineNavigateBefore />
                                        </div>
                                    )}
                                    <div className="bg-gray-200 p-3 w-12 h-12 text-center  font-bahnschrift rounded-md">{page}</div>
                                    {pageakhir === page ? (
                                        <div className="text-2xl text-gray-400 font-bold mx-3">
                                            <MdOutlineNavigateNext />
                                        </div>
                                    ) : (
                                        <div className="text-2xl text-blue-400 font-bold mx-3" onClick={handleNextPage}>
                                            <MdOutlineNavigateNext />
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    })()}
                </div>
            </div>
        </Layout >
    );
}