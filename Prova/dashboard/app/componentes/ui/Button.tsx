"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

interface IButton {
    name: string,
    style: keyof typeof variants,
    onClick?: () => void
}

const variants = {
    primary: "bg-secundary-dark hover:bg-secundary text-white font-semibold",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700 font-semibold",
    outline: "bg-none outline-2 outline-blue-400 text-blue-400 font-bold",
    delete: "bg-red-300 hover:bg-red-400 text-white font-semibold"
}

export default function Button({ name, style, onClick }: IButton) {

    const router = useRouter()

    const selectedStyle = variants[style]

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if (loginInfo.email === "" || loginInfo.password === "") {
            setTimeout(() => {
                setError(false)
            }, 5000)

            setError(true)
        }
        else {

            router.push("/dashboard")
        }
    }

    return (
        <button
            type="button"
            value={name}
            onClick={onClick}
            className={`py-2 px-8 rounded-lg cursor-pointer shadow-sm ${selectedStyle}`}
        >{name}
        </button>
    )
}