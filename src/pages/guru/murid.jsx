import React from "react";
import Layout from "../../layouts/gurulayout"
import { Table, Th, Td, Thead, Tr, Tbody } from "@chakra-ui/react";
import { IoMdPersonAdd } from "react-icons/io"
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
    Input,
    FormLabel
} from "@chakra-ui/react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../redux/actions/authAction";

const RegisterSchema = Yup.object().shape({
    nama_user: Yup.string().required("Wajib di Isi"),
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

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const onSubmit = async (values) => {
        const result = await dispatch(authRegister(values));
        if (result.status === "Success") return navigate("/log");

        console.log("hasil", result);
    };
    return (
        <Layout>
            <div className="bg-white h-full w-10/12 px-20 py-10 shadow-lg">
                <div className=" flex items-center justify-between bg-hijau rounded-md p-5 mb-5  text-white">
                    <div className="flex justify-around text-lg font-bahnschrift font-bold w-1/5 items-center">
                        <IoMdPersonAdd className="w-10 h-10" />
                        Tambah Siswa
                    </div>
                    <Button colorScheme='messenger' onClick={onOpen}>
                        Add +
                    </Button>
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
                                    <DrawerHeader>Buat Akun Siswa</DrawerHeader>
                                    <DrawerBody>
                                        <form onSubmit={handleSubmit} className='w-full'>
                                            <div>
                                                <div className='my-5'>
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
                                                    <div className=' text-red-400 text-sm mt-2'>{errors.nama_user && touched.nama_user && errors.nama_user}</div>
                                                </div>
                                                <div className='my-5'>
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
                                                    <div className=' text-red-400 text-sm mt-2'>{errors.email && touched.email && errors.email}</div>
                                                </div>
                                                <div className='my-5'>
                                                    <FormLabel htmlFor='nomor_telp'>Whatsapp</FormLabel>
                                                    <Input
                                                        placeholder='Enter your Whatsapp number'
                                                        id='nomor_telp'
                                                        type=''
                                                        value={values.nomor_telp}
                                                        onBlur={handleBlur}
                                                        error={errors.nomor_telp && touched.nomor_telp}
                                                        onChange={handleChange}
                                                        disabled={isSubmitting}
                                                    />
                                                    <div className=' text-red-400 text-sm mt-2'>{errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}</div>
                                                </div>
                                                <div className='my-5'>
                                                    <FormLabel htmlFor='password'>Password</FormLabel>
                                                    <Input
                                                        placeholder='Enter your Password'
                                                        id='password'
                                                        type='password'
                                                        value={values.password}
                                                        onBlur={handleBlur}
                                                        error={errors.password && touched.password}
                                                        onChange={handleChange}
                                                        disabled={isSubmitting}
                                                    />
                                                    <div className=' text-red-400 text-sm mt-2'>{errors.password && touched.password && errors.password}</div>
                                                </div>
                                                <div className='my-5'>
                                                    <FormLabel htmlFor='password_confirmation'>Password Confirmation</FormLabel>
                                                    <Input
                                                        placeholder='Enter your Password Confirmation'
                                                        id='password_confirmation'
                                                        type='password'
                                                        onBlur={handleBlur}
                                                        value={values.password_confirmation}
                                                        error={errors.password_confirmation && touched.password_confirmation}
                                                        onChange={handleChange}
                                                        disabled={isSubmitting}
                                                    />
                                                    <div className=' text-red-400 text-sm mt-2'>{errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}</div>
                                                </div>
                                            </div>
                                        </form>
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
                                        >{isLoading ? "Process" : "Save"}</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            )}
                        </Formik>
                    </Drawer>
                </div>
                <Table variant='striped' colorScheme='red'>
                    <Thead>
                        <Tr>
                            <Th>Nama User</Th>
                            <Th>Email</Th>
                            <Th>Nomor Whatsapp</Th>
                            <Th>Role</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr >
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        </Layout>
    );
}