import React from "react" 
import { useParams } from "react-router"
import { getSoalAngket } from "../../api/guru";
import { useQuery } from "react-query";

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
        <div className="h-screen w-screen">
            <div className="h-1/10 w-full shadow-md bg-sky-700">

            </div>
            {id}
        </div>
    )
}