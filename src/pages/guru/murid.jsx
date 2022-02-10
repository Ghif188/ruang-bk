import React from "react";
import Layout from "../../layouts/gurulayout"
import { Table, Th, Td, Thead, Tr, Tbody } from "@chakra-ui/react";
import { IoMdPersonAdd } from "react-icons/io"
import { Button } from "@chakra-ui/react";
export default function Murid() {
    return (
        <Layout>
            <div className="bg-white h-full w-10/12 px-20 py-10 shadow-lg">
                <div className=" flex items-center justify-between bg-hijau rounded-md p-5 mb-5  text-white">
                    <div className="flex justify-around text-lg font-bahnschrift font-bold w-1/5 items-center">
                        <IoMdPersonAdd className="w-10 h-10" />
                        Tambah Siswa
                    </div>
                    <Button>
                        Add +
                    </Button>
                </div>
                <Table variant='striped' colorScheme='red'>
                    <Thead>
                        <Tr>
                            <Th>Nama User</Th>
                            <Th>Email</Th>
                            <Th>Nomor Whatsapp</Th>
                            <Th>Role</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr >
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        </Layout>
    );
}