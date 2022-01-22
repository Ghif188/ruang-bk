import React from 'react';
import Bg from '../assets/bgb.png';
import { Formik } from 'formik';
import { FormLabel, Input, Button, Select, useMediaQuery } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
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
        role: 3,
        status: 1,
        password: "",
        password_confirmation: "",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const onSubmit = async (values) => {
        const result = await dispatch(authRegister(values));
        if (result.status === "Success") return navigate("/log");

        console.log("hasil", result);
    };
    const [button] = useMediaQuery('(min-width: 1024px)');
    var Bground = {
        height: "100%",
        backgroundImage: `url(${Bg})`
    };
    return (
        <React.Fragment>
            <div className="flex h-screen w-screen">
                <section className="w-6/10 md-max:w-full h-full items-center lg:flex md-max:relative" style={Bground}>
                    <div className="lg:px-20 md-max:px-8">
                        <h1 className='text-7xl md-max:text-xl text-white lg:pt-20 md-max:pt-5 font-medium'>WELCOME</h1>
                        <div className="lg:py-20 md-max:py-2"><p className='lg:text-xl md-max:text-sm text-white'>Hii, daftarkan dirimu dan sampaikan masalahmu bersama Ruang-BK : )</p></div>
                        <div className="lg:my-36 md-max:my-4 text-white font-light hover:text-blue-500 text-2xl">
                            <Link to="/log">
                                {button ?
                                    <Button
                                        borderRadius='30'
                                        size='lg'
                                        variant='ghost'
                                        border='2px'
                                        height='50px'
                                        borderColor='#FFFFFF'
                                    >
                                        Sudah Mempunyai akun?
                                    </Button> : <Button
                                        borderRadius='30'
                                        size='sm'
                                        variant='ghost'
                                        border='2px'
                                        height='35px'
                                        borderColor='#FFFFFF'
                                    >
                                        Sudah Mempunyai akun?
                                    </Button>
                                }
                            </Link>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg md:hidden bg-white">
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
                                        <div className='text-xl font-sans text-center m-5 mx-16 font-semibold border-b-4 border-blue-500'>
                                            Register
                                        </div>
                                        <div>
                                            <div className='mx-10 my-2'>
                                                <FormLabel style={{fontSize: 10}} htmlFor='nama_user'>username</FormLabel>
                                                <Input
                                                    placeholder='Enter your name'
                                                    borderColor='#1F8AC6'
                                                    id='nama_user'
                                                    type='text'
                                                    value={values.nama_user}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                    size='sm'
                                                    borderRadius='10px'
                                                    style={{fontSize: 10}}
                                                />
                                                {errors.nama_user && touched.nama_user && errors.nama_user}
                                            </div>
                                            <div className='mx-10 my-2'>
                                                <FormLabel style={{fontSize: 10}} htmlFor='email'>Email</FormLabel>
                                                <Input
                                                    placeholder='Enter your Email'
                                                    borderColor='#1F8AC6'
                                                    id='email'
                                                    type='email'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                    size='sm'
                                                    borderRadius='10px'
                                                />
                                                {errors.email && touched.email && errors.email}
                                            </div>
                                            <div className='mx-10 my-2'>
                                                <FormLabel style={{fontSize: 10}} htmlFor='nomor_telp'>Whatsapp</FormLabel>
                                                <Input
                                                    placeholder='Enter your Whatsapp number'
                                                    borderColor='#1F8AC6'
                                                    id='nomor_telp'
                                                    type=''
                                                    value={values.nomor_telp}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                    size='sm'
                                                    borderRadius='10px'
                                                />
                                                {errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}
                                            </div>
                                            <div className='mx-10 my-2'>
                                                <FormLabel style={{fontSize: 10}} htmlFor='role'>Title</FormLabel>
                                                <Select
                                                    name="role"
                                                    id="role"
                                                    value={values.role}
                                                    onChange={handleChange}
                                                    borderColor='#1F8AC6'
                                                    size='sm'
                                                    borderRadius='10px'
                                                >
                                                    <option value={1}>Admin</option>
                                                    <option value={2}>Guru</option>
                                                    <option value={3}>Siswa</option>
                                                </Select>
                                                {errors.role && touched.role && errors.role}
                                            </div>
                                            <div className='mx-10 my-2'>
                                                <FormLabel style={{fontSize: 10}} htmlFor='password'>Password</FormLabel>
                                                <Input
                                                    placeholder='Enter your Password'
                                                    borderColor='#1F8AC6'
                                                    id='password'
                                                    type='password'
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                    size='sm'
                                                    borderRadius='10px'
                                                />
                                                {errors.password && touched.password && errors.password}
                                            </div>
                                            <div className='mx-10 my-2'>
                                                <FormLabel style={{fontSize: 10}} htmlFor='password_confirmation'>Password Confirmation</FormLabel>
                                                <Input
                                                    placeholder='Enter your Password Confirmation'
                                                    borderColor='#1F8AC6'
                                                    id='password_confirmation'
                                                    type='password'
                                                    value={values.password_confirmation}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                    size='sm'
                                                    borderRadius='10px'
                                                />
                                                {errors.password_confirmation && touched.password_confirmation && errors.password_confirmation}
                                            </div>
                                            <div className='mx-10 my-4'>
                                                <Button
                                                    size='md'
                                                    isFullWidth
                                                    tabIndex="3"
                                                    htmlType="submit"
                                                    disabled={isSubmitting}
                                                    size='sm'
                                                    borderRadius='10px'
                                                    block
                                                    variant="solid"
                                                    bgColor="#1F8AC6"
                                                    color="white"
                                                    loading={isSubmitting}
                                                    type='submit'
                                                    onSubmit={handleSubmit}
                                                >
                                                    <span className="font-semibold text-xl">{isLoading ? "Process ..." : "Register"}</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </section>
                <section className="w-4/10 h-full items-center flex px-10 md-max:hidden">
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
                                            borderColor='#1F8AC6'
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
                                            borderColor='#1F8AC6'
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
                                            borderColor='#1F8AC6'
                                            id='nomor_telp'
                                            type=''
                                            value={values.nomor_telp}
                                            onChange={handleChange}
                                            disabled={isSubmitting}
                                        />
                                        {errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='role'>Title</FormLabel>
                                        <Select
                                            name="role"
                                            id="role"
                                            value={values.role}
                                            onChange={handleChange}
                                            borderColor='#1F8AC6'
                                        >
                                            <option value={1}>Admin</option>
                                            <option value={2}>Guru</option>
                                            <option value={3}>Siswa</option>
                                        </Select>
                                        {errors.role && touched.role && errors.role}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Input
                                            placeholder='Enter your Password'
                                            borderColor='#1F8AC6'
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
                                            borderColor='#1F8AC6'
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
                                            bgColor="#1F8AC6"
                                            color="white"
                                            loading={isSubmitting}
                                            type='submit'
                                            onSubmit={handleSubmit}
                                        >
                                            <span className="font-semibold text-xl">{isLoading ? "Process ..." : "Register"}</span>
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