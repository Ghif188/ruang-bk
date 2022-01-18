import React from 'react';
import Bg from '../assets/bg.png';
import { Formik } from 'formik';
import { FormLabel, Input, FormHelperText, FormErrorMessage, Button, Select } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { authRegister } from "../redux/actions/authAction";

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

const Register = () => {
    const initialValues = {
        nama_user: "",
        nomor_telp: "",
        email: "",
        role: "",
        status: 1,
        password: "",
        password_confirmation: "",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = async (values) => {
        const result = await dispatch(authRegister(values));
        if (result.status === "Success") return navigate("/dash");

        console.log("hasil", result);
    };
    var Bground = {
        width: "60%",
        height: "100%",
        backgroundImage: `url(${Bg})`
    };
    return (
        <React.Fragment>
            <div className="flex h-screen w-screen">
                <section className="w-6/10 h-full items-center flex" style={Bground}>
                    <div className="px-20">
                        <h1 className='text-7xl text-white pt-20 font-medium'>WELCOME</h1>
                        <div className="py-20"><p className='text-xl text-white'>Hii, daftarkan dirimu dan sampaikan masalahmu bersama Ruang-BK : )</p></div>
                        <div className="my-36 text-white font-light hover:text-green-500 text-2xl">
                            <Link to="/">
                                <Button
                                    borderRadius='30'
                                    size='lg'
                                    variant='ghost'
                                    border='2px'
                                    height='50px'
                                    borderColor='#FFFFFF'
                                >
                                    Sudah mempunyai akun ?
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-4/10 h-full items-center flex px-10">
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
                            <form onSubmit={handleSubmit} className='w-full'>
                                <div className='text-2xl text-center m-10 font-bold '>
                                    Register
                                </div>
                                <div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='nama_user'>username</FormLabel>
                                        <Input
                                            placeholder='Enter your name'
                                            borderColor='#2EBF91'
                                            id='nama_user'
                                            type='text'
                                            value={values.nama_user}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        {errors.nama_user && touched.nama_user && errors.nama_user}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                        <Input
                                            placeholder='Enter your Email'
                                            borderColor='#2EBF91'
                                            id='email'
                                            type='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        {errors.email && touched.email && errors.email}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='nomor_telp'>Whatsapp</FormLabel>
                                        <Input
                                            placeholder='Enter your Whatsapp number'
                                            borderColor='#2EBF91'
                                            id='nomor_telp'
                                            type='number'
                                            value={values.nomor_telp}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        {errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='role'>Title</FormLabel>
                                        <Select
                                            placeholder='Choose your Title'
                                            borderColor='#2EBF91'
                                            name='role'
                                            id='role'

                                        >
                                            <option value='0'>Admin</option>
                                            <option value='1'>Guru</option>
                                            <option value='2'>Siswa</option>
                                        </Select>
                                        {errors.role && touched.role && errors.role}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Input
                                            placeholder='Enter your Password'
                                            borderColor='#2EBF91'
                                            id='password'
                                            type='password'
                                            value={values.password}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='password_confirmation'>Password Confirmation</FormLabel>
                                        <Input
                                            placeholder='Enter your Password Confirmation'
                                            borderColor='#2EBF91'
                                            id='password_confirmation'
                                            type='password'
                                            value={values.password_confirmation}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        {errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}
                                    </div>
                                    <div className='mx-10 my-10'>
                                        <Button
                                            size='md'
                                            isFullWidth
                                            tabIndex="3"
                                            htmlType="submit"
                                            disabled={isSubmitting}
                                            block
                                            variant="solid"
                                            bgColor="#2EBF91"
                                            color="white"
                                            loading={isSubmitting}
                                            type='submit'
                                            onSubmit={handleSubmit}
                                        >
                                            <span className="font-semibold text-xl">Register</span>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Register;