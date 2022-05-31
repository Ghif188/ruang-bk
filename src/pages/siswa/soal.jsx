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
    const kode = id.id
    const setid = localStorage.getItem("id_angket");
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
        const res = await axiosClient.post(`/${kode}/jawaban`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        localStorage.setItem("id_angket", "");
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
    let totalsoal = data?.data.length
    const namaangket = data?.data[0].nama_angket
    return (
        <div className="w-full h-full flex justify-center bg-gray-100">
            <div className="w-9/10 h-full rounded-xl bg-white shadow-md md-max:w-11/12">
                <div className="h-full">
                    {/* atas */}
                    <div className="flex justify-between items-center px-5 py-2 bg-gradient-to-r rounded-t-xl from-sky-700 to-sky-500 p-10 w-full h-1/10 md-max:p-2">
                        <div className="text-white text-lg font-semibold sm-max:font-medium sm-max:text-base">{namaangket}</div>
                    </div>
                    {/* bawah */}
                        <div className="px-20 border-b-2 font-semibold font-bahnschrift py-5 text-gray-500">
                            Jawablah pertanyaan sesuai dengan definisi kepribadian anda !
                        </div>
                    <div className="px-20 h-9/10 pt-10 pb-20 space-y-5 md-max:px-5 md-max:py-12 md-max:text-sm">
                        <form onSubmit={updateProfile} className='w-full h-full'>
                            <div className="h-9/10">
                                {data?.data.map((row, index) => (
                                    <div className="mb-5" key={index}>
                                        <div className="capitalize text-lg font-semibold flex">
                                            <div className="mr-2">
                                                {index + 1}.
                                            </div>
                                            {row.soal}.
                                        </div>
                                        <div className="w-full flex pt-3 justify-between px-5">
                                            <label htmlFor="" className=" hover:text-red-700">
                                                <input type="radio" value="a" onChange={handleInputChange} name={row.id} /> Setuju Sekali
                                            </label>
                                            <label htmlFor="" className=" hover:text-red-700">
                                                <input type="radio" value="b" onChange={handleInputChange} name={row.id} /> Setuju
                                            </label>
                                            <label htmlFor="" className=" hover:text-red-700">
                                                <input type="radio" value="c" onChange={handleInputChange} name={row.id} /> Biasa Saja
                                            </label>
                                            <label htmlFor="" className=" hover:text-red-700">
                                                <input type="radio" value="d" onChange={handleInputChange} name={row.id} /> Tidak Setuju
                                            </label>
                                            <label htmlFor="" className=" hover:text-red-700">
                                                <input type="radio" value="e" onChange={handleInputChange} name={row.id} /> Sangat Tidak Setuju
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex mt-10 pt-10 justify-center border-hijau border-t-2 items-end">
                                <Button
                                    colorScheme='yellow'
                                    block
                                    variant="solid"
                                    type='submit'
                                >
                                    Simpan Jawaban
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}