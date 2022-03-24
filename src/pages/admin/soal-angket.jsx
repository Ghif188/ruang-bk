import React from "react"
import { useParams } from "react-router"
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import {
    Button,
    Input,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import { IoMdArrowRoundBack, IoMdAddCircle } from 'react-icons/io'
import { Link } from "react-router-dom";
export default function Soalangket() {
    const navigate = useNavigate();
    let id = useParams().id
    console.log(id)
    const [inputList, setInputList] = React.useState([{}]);
    const handleAddClick = () => {
        setInputList([...inputList, {}]);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    return (
        <div className="h-screen relative">
            <div className="h-1/10 w-full text-white px-10 fixed shadow-md flex items-center z-20 bg-sky-700">
                <Link to='/dash-admin/angket'>
                    <IoMdArrowRoundBack className="text-2xl" />
                </Link>
            </div>
            <div className="w-full h-full">
                <div className="h-1/10" />
                <div className="w-full h-8/10 mt-10 justify-center flex ">
                    <div className="w-3/4">
                        <div className="h-2/10 px-10 flex items-center rounded-t-xl bg-amber-200">
                            <div className="w-full">
                                <p className="text-xl text-white font-semibold mb-5">
                                    Angket Bahasa Inggris
                                </p>
                                <div className="font-light flex justify-between items-center w-full">
                                    Tenggat: 20-09-2004
                                    <div className=" z-0">
                                        <Button
                                            rounded='lg'
                                            size='md'
                                            colorScheme='twitter'
                                            onClick={() => navigate(`dash-admin/angket/edit/${id}`)}
                                        >
                                            <div className="flex items-center">
                                                Simpan Soal
                                                <span className="ml-3">
                                                    <FiEdit />
                                                </span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 rounded sky-xl">
                            <Table variant='striped' colorScheme='twitter'>
                                <Thead>
                                    <Tr>
                                        <Th>No.</Th>
                                        <Th>Soal</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {inputList.map((input, index) => (
                                        <Tr>
                                            <Td>{index + 1}.</Td>
                                            <Td className="w-full">
                                                <Input
                                                    borderColor={"purple.700"}
                                                >
                                                </Input>
                                            </Td>
                                            <Td>
                                                <div className="flex items-center">
                                                    {inputList.length !== 1 && <Button paddingX="10" colorScheme='red' onClick={() => handleRemoveClick(index)} className="mr-3">Hapus</Button>}
                                                    {inputList.length - 1 === index && <IoMdAddCircle className=" text-hijau" size="sm" onClick={() => handleAddClick()}></IoMdAddCircle>}
                                                </div>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            <Button
                                rounded='lg'
                                size='md'
                                marginTop='5'
                                colorScheme='twitter'
                                onClick={() => navigate(`dash-admin/angket/edit/${id}`)}
                            >
                                <div className="flex items-center">
                                    Simpan Soal
                                    <span className="ml-3">
                                        <FiEdit />
                                    </span>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}