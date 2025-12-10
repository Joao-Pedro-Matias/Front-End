"use client"

import {useRouter} from "next/navigation"


export default function Sidebar(){

    const router = useRouter()

    return(
        <div className="h-screen w-[24vw] shadow-sm bg-primary flex flex-col justify-start items-center py-7 gap-6  ">
                <img src="/images/Logo.png" className="w-70 h-14 object-cover" />
                <hr className="w-full border border-primary-light"/>


        </div>
    )


}
