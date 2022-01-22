import React from "react";
import Layout from "../dashboard"


export default function ManageUser() {
    return (
        <Layout>
            <div className="p-10 w-full">
                <div className="flex w-full justify-between">
                    <div className="border-b-4 w-2/12 font-bold tracking-wider font-bahnschrift text-lg text-center mb-10 border-red-500">My Profile</div>
                    <div className="w-1/10 rounded-lg text-center h-10 p-2 font-bahnschrift tracking-wider font-semibold text-white bg-gradient-to-b to-green-400 from-green-500">
                        Logout
                    </div>
                </div>
            </div>
        </Layout>
    )
}