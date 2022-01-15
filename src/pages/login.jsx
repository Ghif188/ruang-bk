import React from 'react';
import Bg from '../assets/bg.png';
import { Formik } from 'formik';
import { FormLabel, Input, FormHelperText, FormErrorMessage, Button} from '@chakra-ui/react';

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
    };

    return (
        <React.Fragment>
            <div className="flex h-screen w-screen">
                <div className="w-6/10 h-full">
                    <img src={Bg} alt="Background" className="h-full w-full" />
                </div>
                <div className="w-4/10 items-center flex h-full">
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize
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
                                    LOGIN
                                </div>
                                <div>
                                    <div className='m-10'>
                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                        <Input
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
                                    <div className="grid m-10 grid-cols-2">
                                        <div className="flex items-center">
                                            <input type="checkbox" />
                                            <label className="font-medium text-green-500  ml-1">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className='m-10'>
                                        <Button
                                            tabIndex="3"
                                            htmlType="submit"
                                            disabled={isSubmitting}
                                            block
                                            variant="solid"
                                            color="green"
                                            loading={isSubmitting}
                                            onSubmit={handleSubmit}
                                        >
                                            <span className="font-semibold">Sign In</span>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;