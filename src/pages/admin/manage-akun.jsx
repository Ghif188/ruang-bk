import React from "react";
import Layout from "../dashboard"
import { Table, Th, Td, Thead, Tr, Tbody } from "@chakra-ui/react";
import { getAllUser } from "../../api/admin";
import { useQuery } from "react-query";

export default function ManageUser() {
    const [page, setPage] = React.useState(1);
    const [perPage, setPerPage] = React.useState(10);
    const [keyword, setkeyword] = React.useState("");
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "jadwal",
            {
                page: page,
                perPage: perPage,
                keyword: keyword,
            },
        ],

        () =>
            getAllUser({
                page: page,
                perPage: perPage,
                keyword: keyword,
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    if (status === 'error') {
        console.log(error.message)
    } if (status === 'loading') {
        console.log('loading')
    } else {
        console.log('berhasil')
    }
    console.log(data)
    return (
        <Layout>
            {isLoading ? (
                <div>loading</div>
            ) : (
                <div className="p-10 w-full">
                    <div className="border-b-4 w-2/12 font-bold font-bahnschrift text-lg text-center mb-10 border-red-500">All Profile</div>
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
                            {data?.data.map((dt, index) => (
                                <Tr key={index}>
                                    <Td>{dt.nama}</Td>
                                    <Td>{dt.email}</Td>
                                    <Td>{dt.nomor_telp}</Td>
                                    <Td>{dt.role}</Td>
                                    <Td></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            )}
        </Layout >
    )
}