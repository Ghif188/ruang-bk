import React from 'react';
import Bg from '../assets/bgb.png';
import { Formik } from 'formik';
import { FormLabel, Input, Button, useMediaQuery, Icon, useToast } from '@chakra-ui/react';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, authLoginWa } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import BgLogin from "../assets/bglogin2.png"
import { IoMdArrowRoundBack } from "react-icons/io"
import { Spinner } from '@chakra-ui/react';
import { Link } from "react-router-dom";
const LoginEmailSchema = Yup.object().shape({
    email: Yup.string().email().required("Wajib terisi *"),
    password: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .required("Wajib terisi *"),
});
const LoginWaSchema = Yup.object().shape({
    nomor_telp: Yup.number().required("Wajib terisi *").integer(),
    password: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .required("Wajib terisi *"),
});
const Login = () => {
    const [show, setShow] = React.useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    const initialEmailState = {
        email: "",
        password: "",
    };
    const initialWaState = {
        nomor_telp: "",
        password: "",
    };
    const isLoading = useSelector((state) => state.auth.isLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast()
    const onSubmit = async (values) => {
        const result = await dispatch(authLogin(values));
        console.log(result);
        if (result.message === "fail") {
            alert(result?.msg)
        }
        if (result.message === "Success") {
            if (result.user.role === 1) {
                return navigate("/dash");
            }
            if (result.user.role === 2) {
                if (result.npsn === "terisi") {
                    return navigate("/dash-guru/home");
                    window.location.reload()
                } else {
                    return navigate("/dash-guru/npsn")
                    window.location.reload()
                }
            }
            if (result.user.role === 3) {
                return navigate("/dash-siswa/home");
            }
        } else {
            toast({
                title: 'Failed',
                status: 'error',
                position: 'top',
                variant: 'left-accent',
                duration: 10000,
                isClosable: true,
                description: `${result.message}`,
            })
        }
    };

    const onSubmitWa = async (values) => {
        const result = await dispatch(authLoginWa(values));
        console.log(result);
        if (result.message === "fail") {
            alert(result?.msg)
        }
        if (result.message === "Success") {
            if (result.user.role === 1) {
                return navigate("/dash");
            }
            if (result.user.role === 2) {
                if (result.npsn === "terisi") {
                    return navigate("/dash-guru/home");
                } else {
                    return navigate("/dash-guru/npsn")
                }
            }
            if (result.user.role === 3) {
                return navigate("/dash-siswa/home")
            }
        }
    };
    const [button] = useMediaQuery('(min-width: 1024px)');
    var Bground = {
        // width: "100%",
        height: "100%",
        backgroundImage: `url(${Bg})`
    };
    const handleNavigate = () => {
        return navigate("/register");
    };
    console.log(localStorage)
    return (
        <React.Fragment>
            <div className="flex items-center justify-center">
                <img src={BgLogin} alt="" className="w-screen h-screen" />
                <div className="absolute w-1/4 h-max sm-max:w-full sm-max:px-6">
                    <div className='bg-white rounded-xl pb-5 shadow-xl'>
                        {show === false ? (
                            <Formik
                                initialValues={initialEmailState}
                                validationSchema={LoginEmailSchema}
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
                                    setFieldValue,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit} className='w-full'>
                                        <div className='text-3xl font-sans flex font-semibold sm-max:text-xl'>
                                            <div className='text-center mx-10 mt-10 mb-5 w-full sm-max:mt-5 sm-max:mb-2 sm-max:mx-5'>
                                                Login
                                            </div>
                                            <div className='absolute mt-5 ml-10 sm-max:mt-2 sm-max:ml-2'>
                                                <Link to='/home'>
                                                    <IoMdArrowRoundBack />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="border-b-8 border-blue-300 rounded-md mx-10 sm-max:mx-12" />
                                        <div>
                                            <div className='mx-10 my-5'>
                                                <FormLabel htmlFor='email'>Email</FormLabel>
                                                <Input
                                                    borderColor='#1F8AC6'
                                                    id='email'
                                                    type='email'
                                                    error={errors.email && touched.email}
                                                    value={values.email}
                                                    onBlur={handleBlur}
                                                    name='email'
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <div className=' text-red-400 text-sm mt-2'>{errors.email && touched.email && errors.email}</div>
                                            </div>
                                            <div className='mx-10'>
                                                <FormLabel htmlFor='password'>Password</FormLabel>
                                                <Input
                                                    borderColor='#1F8AC6'
                                                    id='password'
                                                    type='password'
                                                    error={errors.password && touched.password}
                                                    value={values.password}
                                                    onBlur={handleBlur}
                                                    name='password'
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <div className=' text-red-400 text-sm mt-2'>{errors.password && touched.password && errors.password}</div>
                                            </div>
                                            <div className="mx-10 my-5 sm-max:my-1">
                                                <div className="flex items-center" onClick={handleShow}>
                                                    <FormLabel fontSize='sm' className="font-medium text-blue-500 underline ml-1">
                                                        Sign in with Whatsapp
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <div className='mx-10 my-5 sm-max:px-5 sm-max:my-0 sm-max:mx-5'>
                                                <Button
                                                    size='lg'
                                                    isFullWidth
                                                    tabIndex="3"
                                                    type='submit'
                                                    variant="solid"
                                                    bgColor="#1F8AC6"
                                                    color="white"
                                                    onSubmit={handleSubmit}
                                                >
                                                    <span className="font-semibold text-xl">
                                                        {isLoading ? (<Spinner
                                                            thickness='5px'
                                                            speed='0.65s'
                                                            emptyColor='gray.200'
                                                            color='blue.500'
                                                            size='xl'
                                                        />) : "Login"}
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        ) : (
                            <Formik
                                initialValues={initialWaState}
                                validationSchema={LoginWaSchema}
                                enableReinitialize
                                onSubmit={onSubmitWa}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    setFieldValue,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit} className='w-full'>
                                        <div className='text-3xl font-sans flex font-semibold sm-max:text-xl'>
                                            <div className='text-center mx-10 mt-10 mb-5 w-full sm-max:mt-5 sm-max:mb-2 sm-max:mx-5'>
                                                Login
                                            </div>
                                            <div className='absolute mt-5 ml-10 sm-max:mt-2 sm-max:ml-2'>
                                                <Link to='/home'>
                                                    <IoMdArrowRoundBack />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="border-b-8 border-blue-300 rounded-md mx-10 sm-max:mx-12" />
                                        <div>
                                            <div className='mx-10 my-5'>
                                                <FormLabel htmlFor='nomor_telp'>Nomor Whatsapp</FormLabel>
                                                <Input
                                                    borderColor='#1F8AC6'
                                                    id='nomor_telp'
                                                    type='nomor_telp'
                                                    error={errors.nomor_telp && touched.nomor_telp}
                                                    value={values.nomor_telp}
                                                    onBlur={handleBlur}
                                                    name='nomor_telp'
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <div className=' text-red-400 text-sm mt-2'>{errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}</div>
                                            </div>
                                            <div className='mx-10'>
                                                <FormLabel htmlFor='password'>Password</FormLabel>
                                                <Input
                                                    borderColor='#1F8AC6'
                                                    id='password'
                                                    type='password'
                                                    error={errors.password && touched.password}
                                                    value={values.password}
                                                    onBlur={handleBlur}
                                                    name='password'
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <div className=' text-red-400 text-sm mt-2'>{errors.password && touched.password && errors.password}</div>
                                            </div>
                                            <div className="mx-10 my-5 sm-max:my-1">
                                                <div className="flex items-center" onClick={handleShow}>
                                                    <FormLabel fontSize='sm' className="font-medium text-blue-500 underline ml-1">
                                                        Sign in with Email
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <div className='mx-10 my-5 sm-max:px-5 sm-max:my-0 sm-max:mx-5'>
                                                <Button
                                                    size='lg'
                                                    isFullWidth
                                                    tabIndex="3"
                                                    type='submit'
                                                    variant="solid"
                                                    bgColor="#1F8AC6"
                                                    color="white"
                                                    onSubmit={handleSubmit}
                                                >
                                                    <span className="font-semibold text-xl">
                                                        {isLoading ? (<Spinner
                                                            thickness='5px'
                                                            speed='0.65s'
                                                            emptyColor='gray.200'
                                                            color='blue.500'
                                                            size='xl'
                                                        />) : "Login"}
                                                    </span>
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        )}
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='mt-5 w-3/5 sm-max:w-2/3 text-center p-2 border-white border-2 self-center text-white text-base sm-max:text-sm rounded-full bg-transparent' onClick={handleNavigate}>
                            Belum Mempunyai Akun ?
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;