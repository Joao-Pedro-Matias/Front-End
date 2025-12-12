"use client"

import { useEffect, useState } from "react"

import Card from "./Card"

import {
    CircleX,
    CircleCheckBig,
    TriangleAlert

} from "lucide-react"

interface IPopup {
    status: "Sucesso!" | "Erro!";
    msg: string;
}


const IconSettings = [{
    size: 25,
    color: "#000000",
    strokeWidth: 2.2
},
{
    size: 40,
    color: "#1f702f",
    strokeWidth: 2.2
},
{
    size: 40,
    color: "#db1a1a",
    strokeWidth: 2.2
},
]


export default function Popup({ status, msg}: IPopup) {

    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 3000)

        return () => clearTimeout(timer);
    }, [])

    if (!show) return null;
    

    return (
        <Card
            style="popup">
            <div className="w-full">
                <span
                    onClick={() => { setShow(!show) }}
                    className="flex w-full h-fit cursor-pointer justify-between">

                    <div className="flex justify-center gap-2 items-center">
                        {status == "Sucesso!" ? <CircleCheckBig size={IconSettings[1].size} color={IconSettings[1].color} strokeWidth={IconSettings[1].strokeWidth} /> : <TriangleAlert size={IconSettings[2].size} color={IconSettings[2].color} strokeWidth={IconSettings[2].strokeWidth} />}
                        <div className="flex flex-col justify-center">
                            <span className="font-semibold text-base text-black">{status}</span>
                            <p className="font-light text-xs text-black">{msg}</p>
                        </div>
                    </div>

                    <CircleX size={IconSettings[0].size} color={IconSettings[0].color} strokeWidth={IconSettings[0].strokeWidth} />
                </span>
            </div>
        </Card>
    )
}