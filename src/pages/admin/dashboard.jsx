import React from "react"
import Layout from "../../layouts/adminlayout"
import { useNavigate } from "react-router";
import { getJumlah, getAngket } from "../../api/admin";
import { Spinner } from "@chakra-ui/react";
import { border, color, Menu, Box, MenuList, MenuItem, useMediaQuery } from "@chakra-ui/react";
import { useQuery, useQueryClient } from "react-query";
import { Media } from "react-data-table-component";
import { BiTask } from "react-icons/bi"
export default function Profile() {
    const navigate = useNavigate();
    let queryClient = useQueryClient();
    const { data: datajumlah } = useQuery(
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
    const { isLoading, isError, data } = useQuery(
        [
            "angket",
        ],

        () =>
            getAngket({
                page: 1,
                perPage: 3
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    console.log(data)
    console.log(localStorage.getItem("token"))
    const [MediaQ] = useMediaQuery('(min-width: 766px)');
    return (
        <Layout>
            <div className="bg-white h-full w-10/12 p-10 md-max:p-5 md-max:w-full  shadow-lg">
                <div className="w-full md-max:h-1/4 my-10 md-max:mt-12 text-purple-900 md-max:mb-2">
                    <div className="w-full bg-hijau rounded-md px-10 py-3 shadow-md items-center flex justify-between">
                        <BiTask className="text-3xl" />
                        <div className="text-center p-4 md-max:p-2 md-max:text-xs font-semibold text-lg"><p>Jumlah Angket Terbuat</p></div>
                        <div>
                            <div className="text-center text-5xl md-max:text-4xl">{datajumlah?.angket}</div>
                        </div>
                    </div>
                </div>
                <div className="text-xl text-cyan-900 mb-5 font-semibold">
                    Angket Terakhir Dibuat
                </div>
                <div className="w-full">
                    {
                        isLoading ? (
                            <div className="w-full h-full justify-center items-center flex">
                                <Spinner
                                    thickness='5px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='xl'
                                />
                            </div>
                        ) : (
                            <div className=" bg-slate-100 pt-3 rounded-md" >
                                {
                                    data?.data.length === 0 ? (
                                        <div className="w-full flex justify-center">Belum Ada Angket</div>
                                    ) : (
                                        <div className="">{data?.data.map((angket, index) => (
                                            <div key={index} className="flex items-center px-5 mb-2  justify-between pb-3 md-max:px-1">
                                                <div className="w-full flex shadow-md rounded-md text-white items-center justify-between bg-sky-700 md-max:py-2 md-max:px-2">
                                                    <div className="w-full px-3 py-2 capitalize">
                                                        <p className="font-semibold pb-3 text-lg border-b-2 md-max:text-sm md-max:pb-1">{angket.nama_angket}</p>
                                                        <div className="flex pt-3 justify-between items-center md-max:pt-1">
                                                            <p className="text-sm md-max:text-xs">{angket.keterangan}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}