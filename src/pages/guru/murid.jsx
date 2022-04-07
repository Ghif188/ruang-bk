import React from "react";
import Layout from "../../layouts/gurulayout"
import { Table, Th, Td, Thead, Tr, Tbody, useMediaQuery } from "@chakra-ui/react";
import { IoMdPersonAdd } from "react-icons/io"
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import { AiFillFileAdd } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../api/axiosClient";
import DataTable from "react-data-table-component";
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
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
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
});

export default function Murid() {
    const initialValues = {
        nisn: "",
        nama_user: "",
        alamat: "",
        sekolah: "",
        nomor_telp: "",
        email: "",
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
    const customStyles = {
        header: {
            style: {
                minHeight: '10px',
                borderTopStyle: 'hidden',
                borderTopWidth: '0',
                borderTopsColor: 'ffffff',

            },
        },
        rows: {
            style: {
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: '000000',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBottomColor: '000000',
                minWidth: '98%',
                marginLeft: '7px', // override the cell padding for head cells
                //paddingRight: '3px',
                width: '98%',
                minHeight: '30px', // override the row height

            },

        },
        headRow: {
            style: {
                borderTopStyle: 'solid',
                borderTopWidth: '1px',
                borderTopColor: '000000',
                //alignItems: 'center',
                borderBottomStyle: 'solid',
                borderBottomWidth: '1px',
                borderBott0mColor: '000000',
                width: '98%',

                marginLeft: '7px', // override the cell padding for head cells
                //paddingRight: '3px',

                minHeight: '30px', // override the row height

            },
            //height: '30px',
        },
        headCells: {
            style: {
                '&:not(:last-of-type)': {

                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1px',
                    borderLeftColor: '000000',
                    //marginLeft: '3px', // override the cell padding for head cells
                    //          marginRight: '3px',
                    minHeight: '30px', // override the row heigh
                },

                ':last-of-type': {
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1px',
                    borderLeftColor: '000000',

                    borderRightStyle: 'solid',
                    borderRightWidth: '1px',
                    borderRightColor: '000000',
                    minHeight: '30px', // override the row heigh

                },
                //textAlign: 'center',
                justifyContent: 'center',

                //alignItems: 'center',


            },

        },
        cells: {
            style: {
                '&:not(:last-of-type)': {

                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1px',
                    borderLeftColor: '000000',
                    //marginLeft: '3px', // override the cell padding for head cells
                    //          marginRight: '3px',
                    minHeight: '30px', // override the row heigh
                },

                ':last-of-type': {
                    borderLeftStyle: 'solid',
                    borderLeftWidth: '1px',
                    borderLeftColor: '000000',

                    borderRightStyle: 'solid',
                    borderRightWidth: '1px',
                    borderRightColor: '000000',
                    minHeight: '30px', // override the row heigh

                }




            },

        },
    };
    const columns = [
        {
            name: 'Nama Siswa',
            selector: 'nama_siswa',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Nomor Whatsapp',
            selector: 'nomor_telp',
            sortable: true,
        },
        {
            name: 'Aksi',
            sortable: true,
            button: true,
            cell: row =>
                <Button
                    colorScheme='facebook'
                    className="m-2"
                    size='sm'
                    shadow='md'
                    onClick={() => multiFunct(row.user_id)}
                >
                    Show
                </Button>
            ,
        },
        {
            name: 'Aksi',
            sortable: true,
            button: true,
            cell: row =>
                <Button
                    colorScheme='red'
                    className="m-2"
                    size='sm'
                    shadow='md'
                    onClick={() => multiFunc(row.id)}
                >
                    Delete
                </Button>
            ,
        },
    ];
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
    const [MediaQ] = useMediaQuery('(min-width: 1024px)');
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
    const pageakhir = data?.last_page
    const dataakhir = data?.data
    console.log(data)
    const handleFile = (e) => {
        e.persist();
        setValues(e.currentTarget.files[0]);
    }
    const [values, setValues] = React.useState({ user: '' })
    const onImport = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append("user", values);
        for (let pair of formData.entries()) {
            console.log(pair[0] + ',' + pair[1])
        }
        const res = await axios.post(`/import-users`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        queryClient.invalidateQueries("siswa");
        console.log(res)
        if (res.status === 200) {
            toast({
                title: 'Berhasil',
                status: 'success',
                position: 'top',
                description: 'Berhasil Import Soal',
                variant: 'left-accent',
                duration: 9000,
                isClosable: true,
            })
        } else if (res.data.status === "failed") {
            console.log('error')
        }
    }
    return (
        <React.Fragment>
            <Layout>
                <div className="bg-transparent sm-max:h-screen h-full w-10/12 px-20 sm-max:px-2">
                    <div className="mx-10 h-full shadow-lg shadow-cyan-100 py-10 p-5 sm-max:w-full sm-max:mx-2 sm-max:px-0">
                        <div className=" flex items-center justify-between shadow-green-500 shadow-inner bg-hijau rounded-lg p-5 mb-5 sm-max:w-full text-white">
                            <div className="flex justify-around text-lg font-bahnschrift font-bold w-1/4 items-center sm-max:w-1/3 sm-max:text-xs">
                                <IoMdPersonAdd className="w-10 sm-max:w-6 sm-max:h-6 h-10" />
                                Tambah Siswa
                            </div>
                            <div className="w-1/4 sm-max:hidden"></div>
                            <div className="flex w-1/4 justify-evenly sm-max:w-2/3">
                                <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            size={MediaQ ? 'md' : 'xs'}
                                            colorScheme='twitter'
                                            color='white'
                                            shadow='md'>
                                            <div className="flex items-center sm-max:text-xs">
                                                Import
                                                <AiFillFileAdd className="ml-2" />
                                            </div>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverHeader>Put File</PopoverHeader>
                                        <PopoverBody>
                                            <form onSubmit={onImport}>
                                                <div className="">
                                                    <div className="mb-5">
                                                        <input
                                                            name="user"
                                                            id="user"
                                                            type="file"
                                                            onChange={handleFile}
                                                            value={values.user}
                                                            placeholder="user"
                                                            tabIndex="1"
                                                            size="lg"
                                                        ></input>
                                                    </div>
                                                    <Button
                                                        tabIndex="3"
                                                        block
                                                        variant="solid"
                                                        color="green"
                                                        type="submit"
                                                    >
                                                        <span className="font-semibold">Simpan Data</span>
                                                    </Button>
                                                </div>
                                            </form>
                                        </PopoverBody>
                                        <PopoverFooter>
                                        </PopoverFooter>
                                    </PopoverContent>
                                </Popover>
                                <Button size={MediaQ ? 'md' : 'xs'} colorScheme='messenger' shadow='md' onClick={onOpen}>
                                    <p className="sm-max:text-xs">Tambah +</p>
                                </Button>
                            </div>
                            <div>

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
                                                <p className="md-max:text-sm">Buat Akun Siswa</p>
                                            </DrawerHeader>
                                            <form onSubmit={handleSubmit} className='w-full h-full'>
                                                <DrawerBody>
                                                    <div>
                                                        <div className='my-2'>
                                                            <FormLabel htmlFor='nisn'>NISN</FormLabel>
                                                            <Input
                                                                placeholder='Isi NISN Siswa'
                                                                id='nisn'
                                                                type='number'
                                                                value={values.nisn}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                error={errors.nisn && touched.nisn}
                                                                disabled={isSubmitting}
                                                            />
                                                            <div className=' text-red-400 text-xs'>{errors.nisn && touched.nisn && errors.nisn}</div>
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
                                                            <div className=' text-red-400 text-xs'>{errors.nama_user && touched.nama_user && errors.nama_user}</div>
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
                                                            <div className=' text-red-400 text-xs'>{errors.email && touched.email && errors.email}</div>
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
                                                            <div className=' text-red-400 text-xs'>{errors.alamat && touched.alamat && errors.alamat}</div>
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
                                                            <div className=' text-red-400 text-xs'>{errors.sekolah && touched.sekolah && errors.sekolah}</div>
                                                        </div>
                                                        <div className='my-2'>
                                                            <FormLabel htmlFor='nomor_telp'>Whatsapp</FormLabel>
                                                            <Input
                                                                placeholder='Isi nomor Whatsapp' g
                                                                id='nomor_telp'
                                                                type='text'
                                                                value={values.nomor_telp}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                error={errors.nomor_telp && touched.nomor_telp}
                                                                disabled={isSubmitting}
                                                            />
                                                            <div className=' text-red-400 text-xs'>{errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}</div>
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
                        <div className="h-2/3 m-10 sm-max:m-8 sm-max:w-10/12 sm-max:h-6/10">

                            {isLoading ? '' :
                                (
                                    <div>
                                        <DataTable
                                            columns={columns}
                                            data={dataakhir}
                                            customStyles={customStyles}
                                            defaultSortFieldId={1}
                                            pagination
                                            selectableRows
                                        />
                                        <Modal onClose={onTutup1} isOpen={buka} size='xl' isCentered>
                                            <ModalOverlay bg='blackAlpha.200'
                                                backdropFilter='auto'
                                                backdropBlur='1px' />
                                            <ModalContent >
                                                <ModalHeader>Info Akun Siswa</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <div>
                                                        <div className="flex justify-between mb-3 items-center">
                                                            <div className='w-4/10'>
                                                                <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Nama Siswa</div>
                                                                <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.nama_siswa}</div>
                                                            </div>
                                                            <div className='w-4/10 '>
                                                                <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">NISN</div>
                                                                <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.nisn === null ? (<div className=" text-red-400">Belum Terisi</div>) : (siswa.nisn)}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between mb-3 items-center">
                                                            <div className='w-4/10'>
                                                                <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Tanggal Lahir</div>
                                                                <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.tanggal_lahir === null ? (<div className=" text-red-400">Belum Terisi</div>) : (siswa.tanggal_lahir)}</div>
                                                            </div>
                                                            <div className='w-4/10'>
                                                                <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Tempat Lahir</div>
                                                                <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.tempat_lahir === null ? (<div className=" text-red-400">Belum Terisi</div>) : (siswa.tempat_lahir)}</div>
                                                            </div>
                                                        </div>
                                                        <div className='my-5'>
                                                            <div className="text-sky-600 p-2 font-bold font-bahnschrift text-lg">Alamat</div>
                                                            <div className="bg-pink-200 text-right px-5 py-2 uppercase text-md rounded-md">{siswa.alamat === null ? (<div className=" text-red-400">Belum Terisi</div>) : (siswa.alamat)}</div>
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
                                )
                            }
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
                                    <div className="flex mt-10 justify-center items-center sm-max:mt-5">
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
                                    <div className="flex mt-10 justify-center items-center sm-max:mt-5">
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
        </React.Fragment>
    );
}