import React from "react"
import BgLogin from "../assets/bglogin.png";
import { FormLabel, Input, Button, useMediaQuery } from '@chakra-ui/react';
import { Formik } from "formik";

export default function Cobain() {
    return (
        <div className="flex items-center justify-center">
            <img src={BgLogin} alt="" className="w-screen h-screen" />
            <div className="absolute bg-white rounded-xl w-1/4">
                <div>
                    <Formik
                        enableReinitialize
                    // onSubmit={onSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            // handleSubmit,
                            setFieldValue,
                            isSubmitting,
                        }) => (
                            <form className='w-full'>
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
                                            // value={values.email}
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
                                            // value={values.password}
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
                                            {/* <input type="checkbox" onClick={handleShow} /> */}
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
                                        // onSubmit={handleSubmit}
                                        >
                                            {/* <span className="font-semibold text-sm">{isLoading ? "Process ..." : "Login"}</span> */}
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}