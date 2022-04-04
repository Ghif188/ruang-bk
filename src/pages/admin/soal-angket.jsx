import React from "react"
import { useParams } from "react-router"
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { getSoalAngket, tambahSoal, deleteSoal, updateSoal, showSoal } from "../../api/admin";
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
    TableCaption,
    Icon,
    FormLabel,
} from '@chakra-ui/react'
import { Formik } from "formik";
import { FiEdit } from 'react-icons/fi'
import { IoMdArrowRoundBack, IoMdAddCircle } from 'react-icons/io'
import { Link } from "react-router-dom";
const SoalSchema = Yup.object().shape({
    soal: Yup.string().required("Wajib di Isi"),
});
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
    // console.log(data)
    const [open, setOpen] = React.useState(false)
    const onTutup = () => setOpen(false)
    const onDelete = async (id) => {
        const result = await deleteSoal(id);
        queryClient.invalidateQueries("soal-angket")
        toast({
            title: 'Hapus Soal',
            status: 'success',
            position: 'top',
            description: 'Soal Telah Dihapus.',
            variant: 'left-accent',
            duration: 9000,
            isClosable: true,
        })
    };
    console.log(data)
    const [editid, setEditid] = React.useState();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const multiFuncti = async () => {
        onDelete(editid);
        onTutup()
    }
    const multiFunc = async (id) => {
        setOpen(true);
        setEditid(id);
    }
    const multiButton = async (id) => {
        onOpen();
        onShow(id);
    }
    const [getDetail, setGetDetail] = React.useState([])
    const onShow = async (id) => {
        const result = await showSoal(id);
        setGetDetail(result.data.data);
    };
    const [errors, setErrors] = React.useState(false);
    const onUpdate = async (values) => {
        console.log("ok")
        console.log(values)
        try {
            await updateSoal(values);
            queryClient.invalidateQueries("saol-angket");
            toast({
                position: "top-right",
                title: "Berhasil",
                description: "berhasil",
                status: "success",
                duration: 4000,
                isClosable: true,
            });
        } catch (err) {
            console.log(err.response.errors)
        }
    };
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
                        <div className="h-2/10 px-10 flex items-center rounded-t-xl bg-amber-300">
                            <div className="w-full">
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
                                        <Th>Soal</Th>
                                        <Th textAlign={'center'}>
                                            Aksi
                                        </Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data?.data.map((row, index) => (
                                        <Tr key={index}>
                                            <Td>
                                                {index + 1} .
                                            </Td>
                                            <Td>
                                                {row.soal}
                                            </Td>
                                            <Td display={'flex'} justifyContent='center'>
                                                <Button
                                                    colorScheme='blue'
                                                    htmlType="submit"
                                                    block
                                                    variant="solid"
                                                    bgColor="#1F8AC6"
                                                    color="white"
                                                    type='submit'
                                                    onClick={() => multiButton(row.id)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    colorScheme='red'
                                                    shadow='md'
                                                    marginLeft={'5'}
                                                    onClick={() => multiFunc(row.id)}
                                                >
                                                    Delete
                                                </Button>
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
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='sm'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader
                        borderBottomWidth='1px'
                    >
                        <p className="md-max:text-sm">Update Soal</p>
                    </DrawerHeader>
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
                            <form onSubmit={onUpdate} className='w-full h-full'>
                                <DrawerBody>
                                    <div>
                                        <div className='my-2'>
                                            <FormLabel htmlFor='soal'>Soal</FormLabel>
                                            <Input
                                                name="soal"
                                                disabled={isSubmitting}
                                                id="soal"
                                                type="text"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.soal}
                                                placeholder="Soal"
                                                tabIndex="1"
                                                size="lg"
                                            ></Input>
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
                                        block
                                        variant="solid"
                                        bgColor="#1F8AC6"
                                        color="white"
                                        type='submit'
                                    >
                                        Save
                                    </Button>
                                </DrawerFooter>
                            </form>
                        )}
                    </Formik>
                </DrawerContent>
            </Drawer>
        </div >
    )
}