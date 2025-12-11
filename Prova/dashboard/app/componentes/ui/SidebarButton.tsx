"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


import {
    House,
    Inbox,
    Calendar,
    StickyNote,
    SquareCheck,
} from 'lucide-react'

interface ISideButton {
    name: string,
    icon: "Home" | "Inbox" | "Calendar" | "Kanban" | "ToDo",
    navigation?: string,
}

const iconstyle = {
    size: 28,
    color: "#9810fa",
    strokeWidth: 2.5
}

const iconMap = {
    Home: House,
    Inbox: Inbox,
    Calendar: Calendar,
    Kanban: StickyNote,
    ToDo: SquareCheck,
};



export default function SidebarButton({ name, navigation, icon}: ISideButton) {

    const router = useRouter()

    const SelectedIcon = iconMap[icon] ?? null;

    return (
        <button
            type="button"
            value={name}
            onClick={() => { 
                if(navigation != null) {
                router.push(`/${navigation}`) }}}
        >
            <div className="hover:bg-primary-light px-2 py-1 rounded-xl gap-2 flex items-center justify-start w-[40vh] cursor-pointer">
                {SelectedIcon && (
                    <SelectedIcon
                        size={iconstyle.size}
                        color={iconstyle.color}
                        strokeWidth={iconstyle.strokeWidth}
                    />
                )}
                <span className="text-2xl font-bold text-text-primary">{name}</span>
            </div>

        </button>
    )
}