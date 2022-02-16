import React from 'react';
import BgLogin from '../assets/bglogin2.png';
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
        password: "",
        password_confirmation: "",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const onSubmit = async (values) => {
        const result = await dispatch(authRegister(values));
        if (result.message === "Success") return navigate("/dash-guru/npsn");

        console.log("hasil", result);
    };
    return (
        <React.Fragment>
            <div className="flex items-center justify-center">
                <img src={BgLogin} alt="" className="w-screen max-h-screen min-h-fit" />
                <div className="absolute w-1/4 h-max">
                    <div className='bg-white rounded-xl pt-5 pb-5 shadow-xl'>
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
                                    <div className='text-3xl font-sans flex font-semibold'>
                                        <div className='text-center mx-10 mb-5 w-full'>
                                            Register
                                        </div>
                                    </div>
                                    <div className="border-b-8 border-blue-300 rounded-md mx-10" />
                                    <div>
                                        <div className='mx-10 my-4'>
                                            <FormLabel htmlFor='nama_user'>Username</FormLabel>
                                            <Input
                                                placeholder='Enter your name'
                                                borderColor='#1F8AC6'
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
                                        <div className='mx-10 my-4'>
                                            <FormLabel htmlFor='email'>Email</FormLabel>
                                            <Input
                                                placeholder='Enter your Email'
                                                borderColor='#1F8AC6'
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
                                        <div className='mx-10 my-4'>
                                            <FormLabel htmlFor='nomor_telp'>Whatsapp</FormLabel>
                                            <Input
                                                placeholder='Enter your Whatsapp number'
                                                borderColor='#1F8AC6'
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
                                        <div className='mx-10 my-4'>
                                            <FormLabel htmlFor='password'>Password</FormLabel>
                                            <Input
                                                placeholder='Enter your Password'
                                                borderColor='#1F8AC6'
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
                                        <div className='mx-10 my-4'>
                                            <FormLabel htmlFor='password_confirmation'>Password Confirmation</FormLabel>
                                            <Input
                                                placeholder='Enter your Password Confirmation'
                                                borderColor='#1F8AC6'
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
                                        <div className='mx-10 mt-5'>
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
                                        <div className='underline text-sm text-blue-400 mx-10 mt-3' onClick={()=>navigate("/log")}>
                                            Sudah Mempunyai Akun
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Register;