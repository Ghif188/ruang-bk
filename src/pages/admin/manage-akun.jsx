import React from "react";
import Layout from "../dashboard"
import { Table, Th, Td, Thead, Tr, Tbody } from "@chakra-ui/react";

export default function ManageUser() {
    return (
        <Layout>
            <div className="p-10 w-full">
                <div className="border-b-4 w-2/12 font-bold font-bahnschrift text-lg text-center mb-10 border-red-500">All Profile</div>
                <Table variant='striped' colorScheme='red'>
                    <Thead>
                        <Tr>
                            <Th>Nama User</Th>
                            <Th>Role</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>25.4</Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td>30.48</Td>
                        </Tr>
                        <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td>0.91444</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>
        </Layout>
    )
}