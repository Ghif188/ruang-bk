import React from "react"
import { useParams } from "react-router"
import { getSoalAngket } from "../../api/guru";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import {
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
} from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { Link } from "react-router-dom";
export default function Soalangket() {
    const navigate = useNavigate();
    let id = useParams().id
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="h-screen relative">
            <div className=" h-16 w-full text-white px-10 fixed shadow-md text-xl flex items-center z-20 bg-sky-700">
                <Link to='/dash-guru/angket'>
                    <IoMdArrowRoundBack className="text-2xl mr-5" />
                </Link>
                Dashboard
            </div>
            <div className="w-full h-full">
                <div className="h-1/10" />
                <div className="w-full h-8/10 mt-10 justify-center flex ">
                    <div className="w-3/4">
                        <div className="h-1/6 px-10 flex items-center rounded-t-xl bg-cyan-500 bg-opacity-10">
                            <div className="w-full">
                                <p className="text-xl text-sky-700 font-semibold mb-5">
                                    Angket Bahasa Inggris
                                </p>
                                <div className="font-light flex justify-between items-center w-full">
                                    Tenggat: 20-09-2004
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 rounded-xl">
                            <Table variant='striped' colorScheme='twitter'>
                                <Thead textAlign='center'>
                                    <Tr>
                                        <Th>No.</Th>
                                        <Th textAlign='center' >Nama</Th>
                                        <Th textAlign='center' >Status</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>1.</Td>
                                        <Td textAlign='center' >Ghifari</Td>
                                        <Td textAlign='center' >
                                            Sudah Mengerjakan
                                        </Td>
                                        <Td textAlign='center' >
                                            <Button
                                                rounded='lg'
                                                size='md'
                                                colorScheme='whatsapp'
                                                onClick={() => onOpen()}
                                            >
                                                Jawaban
                                            </Button>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    size='sm'
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader
                            borderBottomWidth='1px'
                        >
                            Jawaban Siswa
                        </DrawerHeader>
                        <DrawerBody>
                        </DrawerBody>
                        <DrawerFooter>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}