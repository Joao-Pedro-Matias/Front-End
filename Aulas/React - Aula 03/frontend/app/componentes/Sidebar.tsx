"use client"

import {useRouter} from 'next/navigation'

import {
    LayoutDashboard,
    Handshake,
    Ham,
    LogOut,
} from 'lucide-react'

import Image from 'next/image'

const estilosdoicone = {
    size: 24,
    color: "#ffffff",
    strokeWidth: 2
}

const linkImagem = "https://cdn.freebiesupply.com/logos/large/2x/toyota-financial-services-logo-black-and-white.png"

export default function Sidebar() {

    const router = useRouter()

    return (
        <div className=" w-[15vw] h-screen bg-black flex flex-col items-center justify-around text-white">
            <div className="flex flex-col gap-2 ">                
                <div>
                <Image
                src={linkImagem}
                alt="Logo"
                width={50}
                height={50}
                />
                </div>
                <p>Area do vendedor</p>
            </div>

            <div className="flex flex-col gap-2">

                <span 
                onClick={()=>{router.push('/dashboard')}}
                className="flex gap-2 hover:bg-gray-300 rounded-xl p-2 w-full cursor-pointer justify-start items-center">

                    <LayoutDashboard size={estilosdoicone.size}
                        color={estilosdoicone.color}
                        strokeWidth={estilosdoicone.strokeWidth} />

                    <p>Dashboard</p>

                </span>

                <span 
                onClick={()=>{router.push('/clientes')}}
                className="flex gap-2 hover:bg-gray-300 rounded-xl p-2 w-full cursor-pointer justify-start items-center">

                    <Handshake size={estilosdoicone.size}
                        color={estilosdoicone.color}
                        strokeWidth={estilosdoicone.strokeWidth} />

                    <p>Clientes</p>
                </span>

                <span 
                onClick={()=>{router.push('/pedidos')}}
                className="flex gap-2 hover:bg-gray-300 rounded-xl p-2 w-full cursor-pointer justify-start items-center">

                    <Ham size={estilosdoicone.size}
                        color={estilosdoicone.color}
                        strokeWidth={estilosdoicone.strokeWidth} />

                    <p>Pedidos</p>
                </span>

            </div>

            <div>
                <span 
                onClick={()=>{router.push('/')}}
                className="flex gap-2 px-2 hover:bg-gray-300 rounded-xl p-2 w-full cursor-pointer justify-start items-center">

                    <LogOut size={estilosdoicone.size}
                        color={estilosdoicone.color}
                        strokeWidth={estilosdoicone.strokeWidth} />

                    <p>Logout</p>
                </span>
            </div>

        </div>
    )
}