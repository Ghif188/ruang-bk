import React from "react";
import Layout from "../../layouts/gurulayout"
import { Table, Th, Td, Thead, Tr, Tbody } from "@chakra-ui/react";
export default function Murid() {
    return (
        <Layout>
            <div className="bg-white h-full w-10/12 p-20 shadow-lg">
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