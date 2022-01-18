import React from 'react';
import Bg from '../assets/bg.png';
import { Formik } from 'formik';
import { FormLabel, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { authLoginWa, authLoginEmail } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const LoginEmailSchema = Yup.object().shape({
    email: Yup.string().email().required("Wajib di isi"),
    password: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .required("wajib di isi"),
});
const LoginWaSchema = Yup.object().shape({
    nomor: Yup.string().email().required("Wajib di isi"),
    password: Yup.string()
        .min(8, "Password minimal 8 Karakter")
        .required("wajib di isi"),
});
const Login = () => {
    const initialValuesEmail = {
        email: "",
        password: "",
    };
    const initialValuesWa = {
        nomor: "",
        password: "",
    };
    const [loginNum, setLoginNum] = React.useState(false);
    const handleShow = () => {
        setLoginNum(!loginNum);
    };
    const isLoading = useSelector((state) => state.auth.isLoading);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmitEmail = async (values) => {
        const result = await dispatch(authLoginEmail(values));
        console.log("result", result);
        if (result.status === "fail") {
            alert(result?.msg)
        }
        if (result.status === "Success") return navigate("/dashboard");
    };

    const onSubmitNomor = async (values) => {
        const result = await dispatch(authLoginWa(values));
        console.log("result", result);
        if (result.status === "fail") {
            alert(result?.msg)
        }
        if (result.status === "Success") return navigate("/dashboard");
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
                {loginNum === false ? (
                    <div className="w-4/10 items-center flex h-full">
                        <Formik
                            initialValues={initialValuesEmail}
                            validationSchema={RegisterSchema}
                            enableReinitialize
                            onSubmit={onSubmitEmail}
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
                                                value={values.email}
                                                onChange={handleChange}
                                            />
                                            {errors.email && touched.email && errors.email}
                                        </div>
                                        <div className='m-10'>
                                            <FormLabel htmlFor='password'>Password</FormLabel>
                                            <Input
                                                id='password'
                                                type='password'
                                                value={values.password}
                                                onChange={handleChange}
                                            />
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                        <div className="m-10">
                                            <div className="flex items-center">
                                                <input type="checkbox" onClick={handleShow} />
                                                <label className="font-medium text-green-500  ml-1">
                                                    Menggunakan nomor WhatsApp
                                                </label>
                                            </div>
                                        </div>
                                        <div className='m-10'>
                                            <Button
                                                size='lg'
                                                isFullWidth
                                                tabIndex="3"
                                                htmlType="submit"
                                                disabled={isSubmitting}
                                                block
                                                variant="solid"
                                                bgColor="#2EBF91"
                                                color="white"
                                                loading={isSubmitting}
                                                onSubmit={handleSubmit}
                                            >
                                                <span className="font-semibold text-xl">login</span>
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                ) : <div className="w-4/10 items-center flex h-full">
                    <Formik
                        initialValues={initialValuesWa}
                        enableReinitialize
                        onSubmit={onSubmitNomor}
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
                                <div className='text-3xl font-sans text-center m-10 font-semibold'>
                                    Login
                                </div>
                                <div>
                                    <div className='m-10'>
                                        <FormLabel htmlFor='nomor'>Nomor WA</FormLabel>
                                        <Input
                                            focusBorderColor='pink.400'
                                            id='nomor'
                                            type='number'
                                            value={values.nomor}
                                            onChange={handleChange}
                                        />
                                        {errors.nomor && touched.nomor && errors.nomor}
                                    </div>
                                    <div className='m-10'>
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Input
                                            id='password'
                                            type='password'
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                    <div className="m-10">
                                        <div className="flex items-center">
                                            <input type="checkbox" onClick={handleShow} />
                                            <label className="font-medium text-green-500  ml-1">
                                                Menggunakan nomor WhatsApp
                                            </label>
                                        </div>
                                    </div>
                                    <div className='m-10'>
                                        <Button
                                            size='lg'
                                            isFullWidth
                                            tabIndex="3"
                                            htmlType="submit"
                                            disabled={isSubmitting}
                                            block
                                            variant="solid"
                                            bgColor="#2EBF91"
                                            color="white"
                                            loading={isSubmitting}
                                            onSubmit={handleSubmit}
                                        >
                                            <span className="font-semibold text-xl">login</span>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>}
            </div>
        </React.Fragment>
    )
}

export default Login;