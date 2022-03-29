import React from "react";
import Jempol from "../../assets/bouken.png"
import Layout from "../../layouts/muridlayout"
import * as Yup from 'yup';
import { useQuery, useQueryClient } from "react-query";
import {
    useDisclosure,
    Tbody,
    Box,
    Button,
    useToast,
    Img,
    Icon,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Input,
    Checkbox,
    Spinner,
    FormLabel,
    DrawerCloseButton,
} from "@chakra-ui/react";
import { Formik } from "formik";
import { FiEdit } from "react-icons/fi"
import { useNavigate } from 'react-router-dom';

export default function Angket() {
    const [id, setId] = React.useState(1)
    let queryClient = useQueryClient();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Layout>
            <div className="bg-white antialiased bg-opacity-50 h-full sm-max:w-max w-9/12 px-10 pt-2">
                <div className="bg-gray-200 h-full w-full p-5 justify-center flex">
                    <div className="h-full w-full scroll-smooth overflow-y-scroll snap-y">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            height='100%'
                        >
                            {/* atas */}
                            <div className="h-2/10 bg-gradient-to-r px-10 flex items-center from-sky-500 to-sky-800  text-white">
                                <div className="">
                                    <div className="text-2xl pb-5 flex">
                                        <p className="pr-2">Give Your Best</p><img src={Jempol} className="w-9 h-9" alt="" />
                                    </div>
                                    <p>The more we are grateful, the more happiness we get.</p>
                                </div>
                            </div>
                            {/* bawah */}
                            <div className="h-3/4 p-5 mt-5">
                                <div className="flex items-center px-5 mb-7  justify-between border-b-2 border-hijau pb-3">
                                    <div className="w-full px-5 py-3 flex rounded-lg text-white items-center bg-blue-300 justify-between ">
                                        <div className="w-8/10">
                                            <p className="font-semibold pb-3 text-lg border-b-2">Angket Pemilihan Jurusan</p>
                                            <div className="flex pt-3 justify-between items-center">
                                                <p className="text-sm">kerjain ya!!!</p>
                                                <div className="text-gray-500">
                                                    <span className="text-sm text-white font-semibold mr-2">tenggat :</span>20-02-2022
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <Button
                                            shadow='md'
                                                rounded='lg'
                                                size='md'
                                                bgColor='#38E569'
                                                onClick={() => onOpen()}
                                            >
                                                Kerjakan
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                {/* {
                                    isLoading ? (
                                        <div className=" h-full w-10/12 p-8 justify-center flex items-center">
                                            <Spinner
                                                thickness='5px'
                                                speed='0.65s'
                                                emptyColor='gray.200'
                                                color='blue.500'
                                                size='xl'
                                            />
                                        </div>
                                    ) : (
                                        <div>
                                            {
                                                data?.data.length === 0 ? (
                                                    <div className="w-full flex justify-center">Belum Ada Angket</div>
                                                ) : (
                                                    <div>{data?.data.map((angket, index) => (
                                                        <div key={index} className="flex items-center px-5 mb-7  justify-between border-b-2 border-hijau pb-3">
                                                            <div className="w-full px-5 py-3 flex rounded-lg text-white items-center justify-between bg-oren">
                                                                <div className="w-2/3">
                                                                    <p className="font-semibold pb-3 text-lg border-b-2">{angket.nama_angket}</p>
                                                                    <div className="flex pt-3 justify-between items-center">
                                                                        <p className="text-sm">{angket.keterangan}</p>
                                                                        <div className="text-gray-500">
                                                                            <span className="text-sm text-white font-semibold mr-2">tenggat :</span>{angket.batas_waktu}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="w-3/10 flex justify-between items-center">
                                                                    <Button
                                                                        rounded='lg'
                                                                        size='md'
                                                                        colorScheme='green'
                                                                    >
                                                                        Edit
                                                                    </Button>
                                                                    <Button
                                                                        rounded='lg'
                                                                        size='md'
                                                                        colorScheme='red'
                                                                        onClick={() => multiFunct(angket.id)}
                                                                    >
                                                                        Delete
                                                                    </Button>
                                                                    <Button
                                                                        rounded='lg'
                                                                        size='md'
                                                                        colorScheme='twitter'
                                                                        onClick={() => navigate(`/dash-guru/angket/${angket.id}`)}
                                                                    >
                                                                        Lihat
                                                                    </Button>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                } */}
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
            <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Kerjakan Soal
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Apakah Anda Siap Untuk Mengerjakan?
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={()=>navigate(`soal/${id}`)} ml={3}>
                                Kerjakan
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Layout>
    );
}