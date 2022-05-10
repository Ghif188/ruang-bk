import React from 'react'
import Layout from '../../layouts/gurulayout'
import { 
    Box,
    Button
} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import Jempol from "../../assets/bouken.png"
export default function LihatAkses() {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className="bg-white antialiased bg-opacity-50 h-full sm-max:w-max w-9/12 px-10 pt-2">
                <div className="bg-gray-200 h-full w-full p-5 justify-center flex">
                    <div className="h-full w-full ">
                        <Box
                            boxShadow='lg'
                            bgColor='white'
                            rounded='xl'
                            height='100%'
                        >
                            {/* atas */}
                            <div className="rounded-t-2xl h-2/10 bg-gradient-to-r justify-between px-10 flex items-center from-sky-500 to-sky-800  text-white">
                                <div className="">
                                    <div className="text-2xl pb-5 flex">
                                        <p className="pr-2">Give Your Best</p><img src={Jempol} className="w-9 h-9" alt="" />
                                    </div>
                                    <p>The more we are grateful, the more happiness we get.</p>
                                </div>
                                <div>
                                    <Button
                                        size={"sm"}
                                        colorScheme={"yellow"}
                                        onClick={()=>navigate("/dash-guru/angket/akses")}
                                    >
                                        Beri Akses
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </Layout>
    )
}