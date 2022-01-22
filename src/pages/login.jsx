import React from 'react';
import Bg from '../assets/bgb.png';
import { Formik } from 'formik';
import { FormLabel, Input, Button, useMediaQuery } from '@chakra-ui/react';
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
    const [button] = useMediaQuery('(min-width: 1024px)');
    var Bground = {
        // width: "100%",
        height: "100%",
        backgroundImage: `url(${Bg})`
    };
    return (
        <React.Fragment>
            <div className="flex h-screen w-screen">
                <div className="w-6/10 md-max:w-full lg:flex items-center h-full md-max:h-4/10 md-max:absolute" style={Bground}>
                    <div className='lg:absolute lg:p-20 md-max:m-10'>
                        <div className='text-white font-bahnschrift tracking-wider lg:mb-10 md-max:mb-2 text-6xl font-bold md-max:text-2xl'>WELCOME BACK!</div>
                        <div className='text-white font font-sans text-2xl w-4/6 lg:mb-44 md-max:mb-6 font-semibold md-max:font-light md-max:text-sm'>Hi, selamat datang di Ruang-BK sampaikan masalahmu kepada kami.</div>
                        <div className='text-white text-2xl font-light hover:text-blue-400 md-max:text-md md-max:mb-8'>
                            <Link to="/reg">
                                {button ?
                                    <Button
                                        borderRadius='30'
                                        size='lg'
                                        variant='ghost'
                                        border='2px'
                                        height='50px'
                                        borderColor='#FFFFFF'
                                    >
                                        Belum mempunyai akun?
                                    </Button> : <Button
                                        borderRadius='30'
                                        size='sm'
                                        variant='ghost'
                                        border='2px'
                                        height='35px'
                                        borderColor='#FFFFFF'
                                    >
                                        Belum mempunyai akun?
                                    </Button>
                                }

                            </Link>
                        </div>
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg md:hidden bg-white">
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
                                            <div className='text-xl font-sans text-center m-5 mx-28 font-semibold border-b-4 border-blue-500'>
                                                Login
                                            </div>
                                            <div>
                                                <div className='m-5'>
                                                    <FormLabel htmlFor='email' className='text-sm'>Email</FormLabel>
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
                                                        size='sm'
                                                        borderRadius='10px'
                                                    />
                                                    {errors.email && touched.email && errors.email}
                                                </div>
                                                <div className='m-5'>
                                                    <FormLabel htmlFor='password' className='text-sm'>Password</FormLabel>
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
                                                        size='sm'
                                                        borderRadius='10px'
                                                    />
                                                    {errors.password && touched.password && errors.password}
                                                </div>
                                                <div className="m-5">
                                                    <div className="flex items-center">
                                                        <input type="checkbox" onClick={handleShow} />
                                                        <FormLabel className="font-light text-xs text-blue-500  ml-1">
                                                            Menggunakan nomor WhatsApp
                                                        </FormLabel>
                                                    </div>
                                                </div>
                                                <div className='m-5'>
                                                    <Button
                                                        size='sm'
                                                        isFullWidth
                                                        tabIndex="3"
                                                        type='submit'
                                                        variant="solid"
                                                        bgColor="#1F8AC6"
                                                        color="white"
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <span className="font-semibold text-sm">{isLoading ? "Process ..." : "Login"}</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            ) : (
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
                                            <div className='text-xl font-sans text-center m-5 font-semibold'>
                                                Login
                                            </div>
                                            <div>
                                                <div className='m-5'>
                                                    <FormLabel htmlFor='nomor_telp' className='text-sm'>Nomor Whatsapp</FormLabel>
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
                                                        size='sm'
                                                        borderRadius='10px'
                                                    />
                                                    {errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}
                                                </div>
                                                <div className='m-5'>
                                                    <FormLabel htmlFor='password' className='text-sm'>Password</FormLabel>
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
                                                        size='sm'
                                                        borderRadius='10px'
                                                    />
                                                    {errors.password && touched.password && errors.password}
                                                </div>
                                                <div className="m-5">
                                                    <div className="flex items-center">
                                                        <input type="checkbox" onClick={handleShow} />
                                                        <FormLabel className="font-light text-xs text-blue-500  ml-1">
                                                            Menggunakan Email
                                                        </FormLabel>
                                                    </div>
                                                </div>
                                                <div className='m-5'>
                                                    <Button
                                                        size='sm'
                                                        isFullWidth
                                                        tabIndex="3"
                                                        type='submit'
                                                        variant="solid"
                                                        bgColor="#1F8AC6"
                                                        color="white"
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <span className="font-semibold text-sm">{isLoading ? "Process ..." : "Login"}</span>
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
                    {/* <img src={Bg} alt="Background" className="h-full w-full" /> */}
                </div>
                <div className="w-4/10 items-center flex h-full md-max:w-full md-max:h-6/10 md-max:pt-80 md-max:hidden">
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
                                            {errors.email && touched.email && errors.email}
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
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                        <div className="m-10">
                                            <div className="flex items-center">
                                                <input type="checkbox" onClick={handleShow} />
                                                <FormLabel className="font-medium text-blue-500  ml-1">
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
                                            {errors.nomor_telp && touched.nomor_telp && errors.nomor_telp}
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
                                            {errors.password && touched.password && errors.password}
                                        </div>
                                        <div className="m-10">
                                            <div className="flex items-center">
                                                <input type="checkbox" onClick={handleShow} />
                                                <FormLabel className="font-medium text-blue-500  ml-1">
                                                    Menggunakan email
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
                    )

                    }

                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;