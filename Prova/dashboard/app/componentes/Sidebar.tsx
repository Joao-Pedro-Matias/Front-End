"use client"

import { useRouter } from "next/navigation"
import SidebarButton from "./ui/SidebarButton"


export default function Sidebar() {

    const router = useRouter()

    return (
        <div className="h-screen w-[31.5vw] shadow-sm bg-primary flex flex-col justify-start items-center py-7 sticky top-0">
            <img src="/images/Logo.png" className="w-70 h-14 object-cover" />
            <hr className="w-full border border-primary-light mt-7 mb-4" />
            <SidebarButton
                name="Home"
                icon="Home"
                navigation="Home"
            />
            <SidebarButton
                name="Inbox"
                icon="Inbox"
                navigation="NotFound"
            />
            <SidebarButton
                name="Calendar"
                icon="Calendar"
                navigation="NotFound"
            />
            <SidebarButton
                name="Kanban"
                icon="Kanban"
                navigation="NotFound"
            />
            <SidebarButton
                name="To Do List"
                icon="ToDo"
                navigation="NotFound"
            />
            <hr className="w-full border border-primary-light my-4" />
        </div>
    )


}
