import React from 'react';
import Bg from '../assets/bg.png';
import { Formik } from 'formik';
import { FormLabel, Input, Button } from '@chakra-ui/react';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, authLoginWa } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginEmailSchema = Yup.object().shape({
    email: Yup.string().email().required("Wajib di isi"),
    password: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .required("Wajib di isi"),
});
const LoginWaSchema = Yup.object().shape({
    nomor_telp: Yup.number().required("Wajib di isi").integer(),
    password: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .required("Wajib di isi"),
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
    return (
        <React.Fragment>
            <div className="flex h-screen w-screen">
                <div className="w-6/10 flex items-center h-full">
                    <div className='absolute m-20'>
                        <div className='text-white font-bahnschrift tracking-wider mb-10 text-6xl font-bold'>WELCOME BACK!</div>
                        <div className='text-white font font-sans text-2xl w-4/6 mb-44 font-semibold'>Hi, selamat datang di Ruang-BK sampaikan masalahmu kepada kami.</div>
                        <div className='text-white text-2xl font-light hover:text-green-500'>
                            <Link to="/reg">
                                <Button
                                    size='lg'
                                    variant='ghost'
                                    border='2px'
                                    height='50px'
                                    borderColor='#FFFFFF'
                                    rounded='xl'
                                >
                                    Belum mempunyai akun?
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <img src={Bg} alt="Background" className="h-full w-full" />
                </div>
                <div className="w-4/10 items-center flex h-full">
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
                                    <div className='text-3xl font-sans text-center m-10 font-semibold'>
                                        Login
                                    </div>
                                    <div>
                                        <div className='m-10'>
                                            <FormLabel htmlFor='email'>Email</FormLabel>
                                            <Input
                                                focusBorderColor='pink.400'
                                                id='email'
                                                type='email'
                                                error={errors.email && touched.email}
                                                value={values.email}
                                                onBlur={handleBlur}
                                                name='email'
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                            />
                                            {errors.email && touched.email && errors.email}
                                        </div>
                                        <div className='m-10'>
                                            <FormLabel htmlFor='password'>Password</FormLabel>
                                            <Input
                                                focusBorderColor='pink.400'
                                                id='password'
                                                type='password'
                                                error={errors.password && touched.password}
                                                value={values.password}
                                                onBlur={handleBlur}
                                                name='password'
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                            />
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                        <div className="m-10">
                                            <div className="flex items-center">
                                                <input type="checkbox" onClick={handleShow} />
                                                <FormLabel className="font-medium text-green-500  ml-1">
                                                    Menggunakan nomor WhatsApp
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
                                                bgColor="#2EBF91"
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
                                                focusBorderColor='pink.400'
                                                id='nomor_telp'
                                                type=''
                                                error={errors.nomor_telp && touched.nomor_telp}
                                                value={values.nomor_telp}
                                                onBlur={handleBlur}
                                                name='nomor_telp'
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                            />
                                            {errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}
                                        </div>
                                        <div className='m-10'>
                                            <FormLabel htmlFor='password'>Password</FormLabel>
                                            <Input
                                                focusBorderColor='pink.400'
                                                id='password'
                                                type='password'
                                                error={errors.password && touched.password}
                                                value={values.password}
                                                onBlur={handleBlur}
                                                name='password'
                                                onChange={handleChange}
                                                disabled={isSubmitting}
                                            />
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                        <div className="m-10">
                                            <div className="flex items-center">
                                                <input type="checkbox" onClick={handleShow} />
                                                <FormLabel className="font-medium text-green-500  ml-1">
                                                    Menggunakan nomor WhatsApp
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
                                                bgColor="#2EBF91"
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
                    )

                    }

                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;