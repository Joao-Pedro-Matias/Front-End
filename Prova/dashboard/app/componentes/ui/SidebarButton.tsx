"use client"

import { useRouter } from "next/navigation"

interface ISideButton {
     name: string,
     navigation?: string
}

export default function SidebarButton({name, navigation} : ISideButton) {

    const router = useRouter()

    return (
        <input
            type="button"
            value={name}
            onClick={()=>{router.push(`/ ${navigation}`)}}
            className={`py-2 px-8 rounded-lg cursor-pointer shadow-sm`}
        />
    )
}