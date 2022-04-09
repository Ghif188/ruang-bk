import React from "react";
import Jempol from "../../assets/bouken.png"
import Layout from "../../layouts/gurulayout"
import * as Yup from 'yup';
import { getAngket, getSiswa, } from "../../api/guru";
import { useQuery, useQueryClient } from "react-query";
import axios from "../../api/axiosClient";
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
const RegisterSchema = Yup.object().shape({
    nama_angket: Yup.string().required("Wajib di Isi"),
    keterangan: Yup.string().required("Wajib di Isi"),
    batas_waktu: Yup.date().required("Wajib di Isi"),
});

export default function Angket() {
    const initialValues = {
        nama_angket: "",
        keterangan: "",
        batas_waktu: "",
    };
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "angket",
        ],

        () =>
            getAngket(),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    const { data: datauser } = useQuery(
        [
            "siswa",
        ],
        () =>
            getSiswa(),
        {
            keepPreviousData: true,
            select: (response) => response.data,
        }
    );
    const [editId, setEditId] = React.useState()
    let queryClient = useQueryClient();
    const toast = useToast()
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const multiFuncti = async () => {
        onTutup()
    }
    const multiFunct = async (id) => {
        setOpen(true)
        setEditId(id)
    }
    const [open, setOpen] = React.useState(false)
    const onTutup = () => setOpen(false)
    const [checked, setCheked] = React.useState([])
    const handleCheckbox = (e) => {
        e.persist();
        setCheked({ ...checked, [e.target.name]: e.target.value });
    }
    const haloPro = () => {
        const halo = checked.toString()
        console.log(halo)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append("angket_id", '1');
        formData.append("time", '3600');
        formData.append("start_at", '3600');
        formData.append("finish_at", '3600');
        for (let index = 0; index < checked.length; index++) {
            formData.append("user_id[" + [index] + "]", checked[index]);
        }
        for (let pair of formData.entries()) {
            console.log(pair[0] + ',' + pair[1])
        }
        const res = await axios.post(`/akses`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log(res)
        if (res.data.status === "success") {
            toast({
                title: 'Berhasil',
                status: 'success',
                position: 'top',
                description: 'Anda berhasil edit akun',
                variant: 'left-accent',
                duration: 9000,
                isClosable: true,
            })
        } else if (res.data.status === "failed") {
            console.log('error')
        }
    }
    console.log(data)
    return (
        <Layout>
            <div className="bg-white antialiased bg-opacity-50 h-full sm-max:w-max w-9/12 px-10 pt-2">
                <div className="bg-gray-200 h-full w-full p-5 justify-center flex">
                    <div className="h-full w-full scroll-smooth overflow-y-scroll snap-y">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                            height='100%'
                        >
                            {/* atas */}
                            <div className="rounded-t-2xl h-2/10 bg-gradient-to-r px-10 flex items-center from-sky-500 to-sky-800  text-white">
                                <div className="">
                                    <div className="text-2xl pb-5 flex">
                                        <p className="pr-2">Give Your Best</p><img src={Jempol} className="w-9 h-9" alt="" />
                                    </div>
                                    <p>The more we are grateful, the more happiness we get.</p>
                                </div>
                            </div>
                            {/* bawah */}
                            <div className="h-3/4 p-5 mt-5">
                                <Accordion allowToggle>
                                    {data?.data.map((row, index) => (
                                        <AccordionItem key={index} p='3'>
                                            <AccordionButton fontWeight='semibold' color='blue.700' _expanded={{ bg: '#0369A1', color: 'white' }}>
                                                <div className="w-full flex text-left justify-between">
                                                    {row.nama_angket}
                                                    <AccordionIcon />
                                                </div>
                                            </AccordionButton>
                                            <AccordionPanel py={4}>
                                                <form onSubmit={onSubmit} className="">
                                                    <div className="flex justify-between">
                                                        <div>
                                                            <FormLabel htmlFor='durasi'>Durasi Pengerjaan</FormLabel>
                                                            <Input
                                                                placeholder='Durasi'
                                                                id='durasi'
                                                                type='number'
                                                            />
                                                        </div>
                                                        <div>
                                                            <FormLabel htmlFor='durasi'>Awal Pengerjaan</FormLabel>
                                                            <Input
                                                                placeholder='Durasi'
                                                                id='durasi'
                                                                type='date'
                                                            />
                                                        </div>
                                                        <div>
                                                            <FormLabel htmlFor='durasi'>Tenggat Pengerjaan</FormLabel>
                                                            <Input
                                                                placeholder='Durasi'
                                                                id='durasi'
                                                                type='date'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-5">
                                                        <FormLabel>Siswa</FormLabel>
                                                        <div className="grid w-full gap-3 mb-3 h-full grid-cols-5">
                                                            {datauser?.data.data.map((siswa, index) => (
                                                                <div key={index} className="col-span-1">
                                                                    <Checkbox value={siswa.id} onChange={handleCheckbox} name={'user[' + index + ']'} size='md'>{siswa.nama_siswa}</Checkbox>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="w-full flex justify-end">
                                                        <Button
                                                            rounded='lg'
                                                            size='md'
                                                            colorScheme='whatsapp'
                                                            onClick={() => setCheked(checked => [])}
                                                        >
                                                            <div className="flex items-center">
                                                                Aktifkan Angket
                                                                <span className="ml-3">
                                                                    <FiEdit />
                                                                </span>
                                                            </div>
                                                        </Button>
                                                    </div>
                                                </form>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
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
        </Layout>
    );
}