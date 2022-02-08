import React from "react";
import BgLogin from '../../assets/bglogin2.png';
import { Formik } from 'formik';
import { FormLabel, Input, Button, Select, useMediaQuery } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { formNpsn } from "../../api/guru";

const NpsnSchema = Yup.object().shape({
    npsn: Yup.string().min(8, "Minimal 8 Digit").max(8, "Maximal 8 Digit").required("Wajib terisi *"),
    nama_sekolah: Yup.string().required("Wajib terisi *")
});

const FormNpsn = () => {
    const initialValues = {
        npsn: "",
        nama_sekolah: "",
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const onSubmit = async (values) => {
        const result = await dispatch(formNpsn(values));
        if (result.status === "success") return navigate("/dash-guru");
        console.log("hasil", result);
    };
    return (
        <React.Fragment>
            <div className="flex">
                <img src={BgLogin} alt="" className="w-screen max-h-screen min-h-fit" />
                <div className="absolute text-white font-bahnschrift text-2xl text-center mt-20 w-full">
                    Daftar NPSN terlebih dahulu untuk Menggunakan
                </div>
                <div className="justify-center items-center flex absolute w-full h-full">
                    <div className=" w-1/4 h-max">
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
                                        <div className='text-3xl font-sans flex font-semibold'>
                                            <div className='text-center mx-10 mb-5 w-full'>
                                                Register NPSN
                                            </div>
                                        </div>
                                        <div className="border-b-8 border-blue-300 rounded-md mx-10" />
                                        <div>
                                            <div className='mx-10 my-4'>
                                                <FormLabel htmlFor='npsn'>NPSN</FormLabel>
                                                <Input
                                                    placeholder='Enter your NPSN'
                                                    borderColor='#1F8AC6'
                                                    id='npsn'
                                                    type='text'
                                                    value={values.npsn}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.npsn && touched.npsn}
                                                    disabled={isSubmitting}
                                                />
                                                <div className=' text-red-400 text-sm mt-2'>{errors.npsn && touched.npsn && errors.npsn}</div>
                                            </div>
                                            <div className='mx-10 my-4'>
                                                <FormLabel htmlFor='nama_sekolah'>School Name</FormLabel>
                                                <Input
                                                    placeholder='Enter your nama_sekolah'
                                                    borderColor='#1F8AC6'
                                                    id='nama_sekolah'
                                                    type='nama_sekolah'
                                                    value={values.nama_sekolah}
                                                    onBlur={handleBlur}
                                                    error={errors.nama_sekolah && touched.nama_sekolah}
                                                    onChange={handleChange}
                                                    disabled={isSubmitting}
                                                />
                                                <div className=' text-red-400 text-sm mt-2'>{errors.nama_sekolah && touched.nama_sekolah && errors.nama_sekolah}</div>
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
                                            <div className='underline text-sm text-blue-400 mx-10 mt-3' onClick={() => navigate("/log")}>
                                                Sudah Mempunyai Akun
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormNpsn;