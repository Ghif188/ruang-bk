import React from "react"
import {
    Button,
    useMediaQuery,
    Radio,
    RadioGroup,
    Stack
} from "@chakra-ui/react"
import { Formik } from "formik"
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import { Navigate, useParams } from "react-router"
import { useQuery, useQueryClient } from "react-query";
import { getSoalAngket, postJawaban } from "../../api/siswa"
import { Spinner, useToast, Input } from "@chakra-ui/react"
import { useNavigate } from "react-router";
import axiosClient from "../../api/axiosClient"
export default function Soal() {
    const [MediaQ] = useMediaQuery('(min-width: 766px)');
    let id = useParams();
    const setid = id.id
    let navigate = useNavigate();
    let toast = useToast();
    const { isLoading, isError, data, isFetching } = useQuery(
        [
            "angket",
            {
                id: setid,
            },
        ],

        () =>
            getSoalAngket({
                id: setid,
            }),

        {
            keepPreviousData: true,
            select: (response) => response.data.data,
        }
    );
    const updateProfile = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        for (let index = 1; index <= totalsoal; index++) {
            formData.append(`nomor_soal[${index - 1}]`, index)
            formData.append(`jawaban[${index - 1}]`, tutorial[index]);
        }
        for (let pair of formData.entries()) {
            console.log(pair[0] + ',' + pair[1])
        }
        const res = await axiosClient.post(`/${setid}/jawaban`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(res)
        if (res.data.status === "success") {
            navigate("/dash-siswa/angket")
            toast({
                title: 'Berhasil',
                status: 'success',
                position: 'top',
                description: 'Anda berhasil menyimpan jawaban',
                variant: 'left-accent',
                duration: 9000,
                isClosable: true,
            })
        } else if (res.data.status === "failed") {
        }
    }
    const [tutorial, setTutorial] = React.useState({});
    const handleInputChange = event => {
        const { name, value } = event.target;
        setTutorial({ ...tutorial, [name]: value });
    };
    console.log(tutorial[9])
    console.log(tutorial)
    let totalsoal = data?.data.length
    const namaangket = data?.data[0].nama_angket
    return (
        <div className="w-full justify-center items-center bg-gray-100">
            <div className="w-9/10 h-9/10 rounded-xl bg-white shadow-md md-max:w-11/12">
                <div className="h-9/10">
                    {/* atas */}
                    <div className="flex justify-between items-center px-5 py-2 bg-gradient-to-r rounded-t-xl from-sky-700 to-sky-500 p-10 w-full h-1/10 md-max:p-2">
                        <div className="text-white text-lg font-semibold sm-max:font-medium sm-max:text-base">{namaangket}</div>
                        <div>20:00:00</div>
                    </div>
                    {/* bawah */}
                    <div className="px-20 text-xl h-8/10 py-20 space-y-5 md-max:px-5 md-max:py-12 md-max:text-sm">
                        <form onSubmit={updateProfile} className='w-full h-full'>
                            {data?.data.map((row, index) => (
                                <div key={index}>
                                    <Input
                                        id='soal'
                                        type='hidden'
                                        name={"nomor_soal[" + row.id + "]"}
                                    />
                                    <div className=" flex">
                                        <div className="mr-2">
                                            {index + 1}.
                                        </div>
                                        {row.soal}
                                    </div>
                                    <div className="w-full">
                                        <input type="radio" value="a" onChange={handleInputChange} name={row.id} /> Setuju Sekali
                                        <input type="radio" value="b" onChange={handleInputChange} name={row.id} /> Setuju
                                        <input type="radio" value="c" onChange={handleInputChange} name={row.id} /> Biasa Saja
                                        <input type="radio" value="d" onChange={handleInputChange} name={row.id} /> Tidak Setuju
                                        <input type="radio" value="e" onChange={handleInputChange} name={row.id} /> Sangat Tidak Setuju
                                    </div>
                                </div>
                            ))}
                            <Button
                                colorScheme='blue'
                                block
                                variant="solid"
                                bgColor="#1F8AC6"
                                color="white"
                                type='submit'
                            >
                                Save
                            </Button>
                        </form>
                    </div>
                    <Button
                        rounded='lg'
                        size={MediaQ ? 'md' : 'sm'}
                        colorScheme='whatsapp'
                        onClick={() => navigate('/dash-siswa/angket')}
                    >
                        <p className="text-sm md:text-lg">Selesai</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}