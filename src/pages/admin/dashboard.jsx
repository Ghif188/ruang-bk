import React from "react"
import Layout from "../../layouts/adminlayout"
import { useNavigate } from "react-router";
import { getJumlah } from "../../api/admin";
import { border, color, Menu, Box, MenuList, MenuItem, useMediaQuery } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "react-query";
import { Media } from "react-data-table-component";

export default function Profile() {
    const navigate = useNavigate();
    let queryClient = useQueryClient();
    const { isLoading, isError, data } = useQuery(
        [
            "jumlah",
            {
            },
        ],

        () =>
            getJumlah({
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data,
        }
    );
    console.log(data)
    console.log(localStorage.getItem("token"))
    const [MediaQ] = useMediaQuery('(min-width: 766px)');

    return (
        <Layout>
            <div className="bg-white h-full w-10/12 p-10 md-max:p-5 md-max:w-full  shadow-lg">
                <div className="flex justify-between w-full h-1/3 md-max:h-1/4 my-10 md-max:mt-12 md-max:mb-2">
                    <div className="w-1/3">
                        <Box borderRadius='md' bg='whatsapp.600' color='white' mx={MediaQ ? 5 : 2} h={MediaQ ? 180 : 100}>
                            <div className="text-center p-4 md-max:p-2 md-max:text-xs text-lg"><p>Jumlah Murid</p></div>
                            <div className="text-center text-8xl md-max:text-4xl">{data.user}</div>
                        </Box>
                    </div>
                    <div className="w-1/3">
                        <Box borderRadius='md' bg='twitter.600' color='white' mx={MediaQ ? 5 : 2} h={MediaQ ? 180 : 100}>
                            <div className="text-center p-4 md-max:p-2 md-max:text-xs text-lg"><p>Jumlah Angket</p></div>
                            <div className="text-center text-8xl md-max:text-4xl">{data.angket}</div>
                        </Box>
                    </div>
                    <div className="w-1/3">
                        <Box borderRadius='md' bg='facebook.600' color='white' mx={MediaQ ? 5 : 2} h={MediaQ ? 180 : 100}>
                            <div className="text-center p-4 md-max:py-2 md-max:px-1 md-max:text-xs text-lg"><p>Jumlah Angket terisi</p></div>
                            <div className="text-center text-8xl md-max:text-4xl">0</div>
                        </Box>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <div className="w-full">
                        <Box borderRadius='md' bg='firebrick' color='white' mx={MediaQ ? 5 : 2} h={300}>
                            <div className="text-center p-4 text-4xl md-max:text-2xl"><p>Untuk Grafik</p></div>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    )
}