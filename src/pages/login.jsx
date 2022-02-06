import React from 'react';
import Bg from '../assets/bgb.png';
import { Formik } from 'formik';
import { FormLabel, Input, Button, useMediaQuery, Icon } from '@chakra-ui/react';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, authLoginWa } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import BgLogin from "../assets/bglogin2.png"
import { IoMdArrowRoundBack } from "react-icons/io"
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
                return navigate("/dash-guru");
            }
            if (result.user.role === 3) {
                return navigate("/dash-siswa");
            }
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
                return navigate("/dash-guru")
            }
            if (result.user.role === 3) {
                return navigate("/dash-siswa")
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
        return navigate("/reg");
    };
    return (
        <React.Fragment>
            <div className="flex items-center justify-center">
                <img src={BgLogin} alt="" className="w-screen h-screen" />
                <div className="absolute w-1/4 h-max">
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
                                        <div className='text-3xl font-sans flex font-semibold'>
                                            <div className='text-center mx-10 mt-10 mb-5 w-full'>
                                                Login
                                            </div>
                                            <div className='absolute mt-5 ml-10'>
                                                <IoMdArrowRoundBack />
                                            </div>
                                        </div>
                                        <div className="border-b-8 border-blue-300 rounded-md mx-10" />
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
                                            <div className="mx-10 my-5">
                                                <div className="flex items-center" onClick={handleShow}>
                                                    <FormLabel className="font-medium text-blue-500 underline  ml-1">
                                                        Sign in with Whatsapp
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <div className='mx-10 my-5'>
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
                                                    <span className="font-semibold text-xl">{isLoading ? "Process ..." : "Login"}</span>
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
                                        <div className='text-3xl font-sans text-center m-10 font-semibold'>
                                            Login
                                        </div>
                                        <div>
                                            <div className='m-10'>
                                                <FormLabel htmlFor='nomor_telp'>Nomor WhatsApp</FormLabel>
                                                <Input
                                                    borderColor='#1F8AC6'
                                                    id='nomor_telp'
                                                    type=''
                                                    error={errors.nomor_telp && touched.nomor_telp}
                                                    value={values.nomor_telp}
                                                    onBlur={handleBlur}
                                                    name='nomor_telp'
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <div className=' text-red-400 text-sm mt-2'>{errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}</div>
                                            </div>
                                            <div className='m-10'>
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
                                            <div className="m-10">
                                                <div className="flex items-center">
                                                    <input type="checkbox" onClick={handleShow} />
                                                    <FormLabel className="font-medium text-blue-500  ml-1">
                                                        Sign in with Email
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <div className='m-10'>
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
                                                    <span className="font-semibold text-xl">{isLoading ? "Process ..." : "Login"}</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        )}
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='mt-5 w-3/5 p-2 border-white border-2 self-center text-white text-lg rounded-full bg-transparent' onClick={handleNavigate}>
                            Belum Mempunyai Akun ?
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;