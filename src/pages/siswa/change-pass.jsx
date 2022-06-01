import React from "react";
import BgLogin from '../../assets/bglogin2.png';
import { Formik } from 'formik';
import { FormLabel, Input, Button, Select, useMediaQuery } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { changePass } from "../../api/siswa";

const NpsnSchema = Yup.object().shape({
    password: Yup.string().min(8, "Minimal 8 Digit").required("Wajib terisi *"),
});

const ChangePass = () => {
    const initialValues = {
        password: "",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const onSubmit = async (values) => {
        const result = await changePass(values);
        if (result.data.status === "success") return navigate("/dash-siswa/home");
        console.log(result);
    };
    console.log(localStorage.getItem("token"))
    return (
        <React.Fragment>
            <div style={{ backgroundImage: `url(${BgLogin})` }} className="flex h-screen bg-cover w-full">
                <div className="justify-center items-center flex absolute w-full h-full">
                    <div className="">
                        <div className="text-white font-bahnschrift text-3xl text-center w-full md-max:text-lg">
                            Ganti password terlebih dahulu untuk menggunakan
                        </div>
                        <div className="w-full mt-10 p-5 h-max md-max:mt-4 md-max:p-2">
                            <div className='bg-white rounded-xl pt-5 pb-5 shadow-xl'>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={NpsnSchema}
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
                                            <div className='text-3xl font-sans flex font-semibold md-max:text-lg md-max:font-normal'>
                                                <div className='text-center mx-10 mb-5 w-full md-max:mx-5 md-max:mb-1'>
                                                    Ubah Password
                                                </div>
                                            </div>
                                            <div className="border-b-8 border-blue-300 rounded-md mx-10 md-max:mx-5" />
                                            <div>
                                                <div className='mx-10 my-4 md-max:mx-5 md-max:my-2'>
                                                    <FormLabel htmlFor='password'>Password</FormLabel>
                                                    <Input
                                                        placeholder='Enter your password'
                                                        borderColor='#1F8AC6'
                                                        id='password'
                                                        type='password'
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        error={errors.password && touched.password}
                                                        disabled={isSubmitting}
                                                    />
                                                    <div className=' text-red-400 text-sm mt-2 md-max:mt-0 md-max:text-xs'>{errors.password && touched.password && errors.password}</div>
                                                </div>
                                                <div className='mx-10 mt-5 md-max:mx-5 md-max:mt-2'>
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
                                                        <span className="font-semibold text-xl md-max:text-base">{isLoading ? "Process ..." : "Simpan"}</span>
                                                    </Button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChangePass;