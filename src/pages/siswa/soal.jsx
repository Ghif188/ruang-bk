import React from "react"
import {
    Button,
    useMediaQuery,
} from "@chakra-ui/react"
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"

export default function Soal() {
    const [page, setPage] = React.useState(1)
    const [pageakhir, setPageakhir] = React.useState(1)
    const [MediaQ] = useMediaQuery('(min-width: 766px)');

    return (
        <div className="w-screen flex justify-center items-center bg-gray-100 h-screen">
            <div className="w-9/10 h-9/10 rounded-xl bg-white shadow-md md-max:w-11/12">
                <div className="h-9/10">
                    {/* atas */}
                    <div className="flex justify-between items-center px-5 py-2 bg-gradient-to-r rounded-t-xl from-sky-700 to-sky-500 p-10 w-full h-1/10 md-max:p-2">
                        <div className="text-white text-lg font-semibold sm-max:font-medium sm-max:text-base">Bahasa Indonesia</div>
                        <div>20:00:00</div>
                    </div>
                    {/* bawah */}
                    <div className="px-20 text-xl h-8/10 py-20 space-y-5 md-max:px-5 md-max:py-12 md-max:text-sm">
                        <div className="flex">
                            <div className="mr-2">
                                1.
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam quibusdam rem maxime, optio dolore! Magnam tenetur molestiae, excepturi officiis magni ratione libero sit atque earum nemo, ut laudantium odio.
                            </div>

                        </div>
                        <div className="w-full">
                            <div>A) Aku</div>
                            <div>B) Dia</div>
                            <div>C) Kita</div>
                            <div>D) Kamu</div>
                            <div>E) Kalian</div>
                        </div>
                    </div>
                    {
                        page === pageakhir ? (
                            <div className="flex justify-end px-20 items-end md-max:px-10">
                                <Button
                                    rounded='lg'
                                    size={MediaQ ? 'md' : 'sm'}
                                    colorScheme='whatsapp'
                                >
                                    <p className="text-sm md:text-lg">Selesai</p>
                                </Button>
                            </div>
                        ) : ''
                    }
                </div>
                <div>
                    {(() => {
                        if (pageakhir === 1) {
                            return (
                                <div className="flex justify-center items-center">
                                    <div className="text-2xl md-max:text-xl text-gray-400 mx-3">
                                        <MdOutlineNavigateBefore />
                                    </div>
                                    <div className="bg-gray-200 p-3 w-12 h-12 text-center shadow-inner shadow-slate-300 font-bahnschrift rounded-md">{page}</div>
                                    <div className="text-2xl md-max:text-xl text-gray-400 font-bold mx-3">
                                        <MdOutlineNavigateNext />
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="flex justify-center items-center">
                                    {page === 1 ? (
                                        <div className="text-2xl md-max:text-xl text-gray-400 mx-3">
                                            <MdOutlineNavigateBefore />
                                        </div>
                                    ) : (
                                        <div className="text-2xl md-max:text-xl text-blue-400 mx-3">
                                            <MdOutlineNavigateBefore />
                                        </div>
                                    )}
                                    <div className="bg-gray-200 p-3 w-12 h-12 text-center  font-bahnschrift rounded-md">{page}</div>
                                    {pageakhir === page ? (
                                        <div className="text-2xl md-max:text-xl text-gray-400 font-bold mx-3">
                                            <MdOutlineNavigateNext />
                                        </div>
                                    ) : (
                                        <div className="text-2xl md-max:text-xl text-blue-400 font-bold mx-3">
                                            <MdOutlineNavigateNext />
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}