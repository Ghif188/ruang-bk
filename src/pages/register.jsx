import React from 'react';
import Bg from '../assets/bg.png';
import { Formik } from 'formik';
import { FormLabel, Input, FormHelperText, FormErrorMessage, Button, Select } from '@chakra-ui/react';

const Register = () => {
    const initialValues = {
        username: "",
        whatshapp: "",
        email: "",
        Title: "",
        password: "",
    };
    var Bground = {
        width: "60%",
        height: "100%",
        backgroundImage: `url(${Bg})`
      };
    return (
        <React.Fragment>
            <div className="flex h-screen w-screen">
                <section className="w-6/10 h-full items-center flex" style={Bground}>
                    <div className="px-20">
                        <h1 className='text-7xl text-white pt-20 font-medium'>WELCOME</h1>
                        <div className="py-20"><p className='text-xl text-white'>Hii, daftarkan dirimu dan sampaikan masalahmu bersama Ruang-BK : )</p></div>
                        <div className="py-36">
                            <Button
                                borderRadius='30'
                                size='lg'
                                height='70'
                                tabIndex="3"
                                htmlType="submit"
                                block
                                variant="solid"
                                bgColor="#2EBF91"
                                color="white"
                                colorScheme='white'
                                variant='outline'
                            >
                                <span className='font-normal text-2xl'>Sudah mempunyai akun ?</span>
                            </Button>
                        </div>
                    </div>
                </section>
                <section className="w-4/10 h-full items-center flex px-10">
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
                                    Register
                                </div>
                                <div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='username'>Username</FormLabel>
                                        <Input
                                            placeholder='Enter your Username'
                                            borderColor='#2EBF91'
                                            id='username'
                                            type='username'
                                            value={values.username}
                                            onChange={handleChange}
                                        />
                                        {errors.username && touched.username && errors.username}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                        <Input
                                            placeholder='Enter your Email'
                                            borderColor='#2EBF91'
                                            id='email'
                                            type='email'
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && touched.email && errors.email}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='whatsapp'>Whatsapp Number</FormLabel>
                                        <Input
                                            placeholder='Enter your Whatsapp number'
                                            borderColor='#2EBF91'
                                            id='whatsapp'
                                            type='whatsapp'
                                            value={values.whatshapp}
                                            onChange={handleChange}
                                        />
                                        {errors.whatsapp && touched.whatsapp && errors.whatsapp}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='role'>Title</FormLabel>
                                        <Select 
                                            placeholder='Choose your Title'
                                            borderColor='#2EBF91'
                                        >
                                            <option value='admin'>Admin</option>
                                            <option value='guru'>Guru</option>
                                            <option value='siswa'>Siswa</option>
                                        </Select>
                                        {errors.role && touched.role && errors.role}
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <Input
                                            placeholder='Enter your Password'
                                            borderColor='#2EBF91'
                                            id='password'
                                            type='password'
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && touched.password && errors.password}
                                    </div>
                                    <div className='mx-10 my-10'>
                                        <Button
                                            size='md'
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
                                            <span className="font-semibold text-xl">Register</span>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </section>
            </div>
        </React.Fragment>
    )
}

export default Register;