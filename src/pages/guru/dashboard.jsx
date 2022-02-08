import React from "react"
import Layout from "../../layouts/gurulayout"
import { useNavigate } from "react-router";
import { getProfile } from "../../api/admin";
import { useQuery } from "react-query";

export default function Profile() {
    const navigate = useNavigate();
    const { isLoading, isError, data, isFetching, status, error, } = useQuery(
        [
            "jadwal",
            {
            },
        ],

        () =>
            getProfile({
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
        console.log('berdata')
    }
    console.log(data)
    return (
        <Layout>
        </Layout>
    )
}