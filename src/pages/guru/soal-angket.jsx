import React from "react"
import { useParams } from "react-router"
import { getSoalAngket } from "../../api/guru";
import { useQuery } from "react-query";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button
} from '@chakra-ui/react'
import { FiEdit } from 'react-icons/fi'

export default function Soalangket() {
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
            <div className="h-1/10 w-full fixed shadow-md bg-sky-700">

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
                                    <div>
                                        <Button
                                            rounded='lg'
                                            size='md'
                                            colorScheme='twitter'
                                            ite
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
                                <AccordionItem mb={3}>
                                    <AccordionButton _expanded={{ bg: '#0369A1', color: 'white' }}>
                                        <div className="w-full flex text-left justify-between">
                                            1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident corporis, reprehenderit optio sunt harum officiis ea? Sit quia in, pariatur, consequatur eveniet velit deserunt ut numquam magnam autem ea.
                                            <AccordionIcon />
                                        </div>
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        Jawaban :
                                        <div className="flex items-center mt-3 justify-between">
                                            <div>A) Aku</div>
                                            <div>B) Dia</div>
                                            <div>C) Kita</div>
                                            <div>D) Kamu</div>
                                            <div>E) Kalian</div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem mb={3}>
                                    <AccordionButton _expanded={{ bg: '#0369A1', color: 'white' }}>
                                        <div className="w-full flex text-left justify-between">
                                            2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident corporis, reprehenderit optio sunt harum officiis ea? Sit quia in, pariatur, consequatur eveniet velit deserunt ut numquam magnam autem ea.
                                            <AccordionIcon />
                                        </div>
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        Jawaban :
                                        <div className="flex items-center mt-3 justify-between">
                                            <div>A) Aku</div>
                                            <div>B) Dia</div>
                                            <div>C) Kita</div>
                                            <div>D) Kamu</div>
                                            <div>E) Kalian</div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem mb={3}>
                                    <AccordionButton _expanded={{ bg: '#0369A1', color: 'white' }}>
                                        <div className="w-full flex text-left justify-between">
                                            3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident corporis, reprehenderit optio sunt harum officiis ea? Sit quia in, pariatur, consequatur eveniet velit deserunt ut numquam magnam autem ea.
                                            <AccordionIcon />
                                        </div>
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        Jawaban :
                                        <div className="flex items-center mt-3 justify-between">
                                            <div>A) Aku</div>
                                            <div>B) Dia</div>
                                            <div>C) Kita</div>
                                            <div>D) Kamu</div>
                                            <div>E) Kalian</div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem mb={3}>
                                    <AccordionButton _expanded={{ bg: '#0369A1', color: 'white' }}>
                                        <div className="w-full flex text-left justify-between">
                                            4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident corporis, reprehenderit optio sunt harum officiis ea? Sit quia in, pariatur, consequatur eveniet velit deserunt ut numquam magnam autem ea.
                                            <AccordionIcon />
                                        </div>
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        Jawaban :
                                        <div className="flex items-center mt-3 justify-between">
                                            <div>A) Aku</div>
                                            <div>B) Dia</div>
                                            <div>C) Kita</div>
                                            <div>D) Kamu</div>
                                            <div>E) Kalian</div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem mb={3}>
                                    <AccordionButton _expanded={{ bg: '#0369A1', color: 'white' }}>
                                        <div className="w-full flex text-left justify-between">
                                            5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident corporis, reprehenderit optio sunt harum officiis ea? Sit quia in, pariatur, consequatur eveniet velit deserunt ut numquam magnam autem ea.
                                            <AccordionIcon />
                                        </div>
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        Jawaban :
                                        <div className="flex items-center mt-3 justify-between">
                                            <div>A) Aku</div>
                                            <div>B) Dia</div>
                                            <div>C) Kita</div>
                                            <div>D) Kamu</div>
                                            <div>E) Kalian</div>
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}