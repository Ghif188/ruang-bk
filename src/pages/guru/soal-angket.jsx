import React from "react"
import { useParams } from "react-router"
import { getSoalAngket } from "../../api/guru";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button
} from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { Link } from "react-router-dom";
export default function Soalangket() {
    const navigate = useNavigate()
    let id = useParams().id
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "soal-angket",
            {
                id: id,
            },
        ],

        () =>
            getSoalAngket({
                id: id,
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    console.log(id)
    console.log(data)
    return (
        <div className="h-screen relative">
            <div className="h-1/10 w-full text-white px-10 fixed shadow-md flex items-center z-20 bg-sky-700">
                <Link to='/dash-guru/angket'>
                    <IoMdArrowRoundBack className="text-2xl"/>
                </Link>
            </div>
            <div className="w-full h-full">
                <div className="h-1/10" />
                <div className="w-full h-full mt-10 justify-center flex ">
                    <div className="w-3/4">
                        <div className="h-1/6 px-10 flex items-center rounded-t-xl bg-amber-200">
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
                                            onClick={navigate(`dash-guru/angket/edit/{id}`)}
                                        >
                                            <div className="flex items-center">
                                                Edit Soal
                                                <span className="ml-3">
                                                    <FiEdit />
                                                </span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 rounded-xl">
                            <Accordion defaultIndex={[0]} allowMultiple>
                                {data?.data.map((soal, index) => (
                                    <AccordionItem key={index} mb={3}>
                                        <AccordionButton _expanded={{ bg: '#0369A1', color: 'white' }}>
                                            <div className="w-full flex text-left justify-between">
                                                {index + 1}. {soal.nama_soal}
                                                <AccordionIcon />
                                            </div>
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            Jawaban :
                                            <div className="flex items-center mt-3 justify-between">
                                                <div>A) {soal.jawaban[2]}</div>
                                                <div>B) {soal.jawaban[6]}</div>
                                                <div>C) {soal.jawaban[10]}</div>
                                                <div>D) {soal.jawaban[14]}</div>
                                                <div>E) {soal.jawaban[18]}</div>
                                            </div>
                                        </AccordionPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}