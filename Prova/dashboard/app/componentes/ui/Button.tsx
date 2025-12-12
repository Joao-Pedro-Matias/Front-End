"use client"

import { useState } from "react"

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

    const selectedStyle = variants[style]

    return (
        <button
            type="button"
            value={name}
            onClick={onClick}
            className={`py-2 px-8 rounded-lg cursor-pointer shadow-sm w-full ${selectedStyle}`}
        >{name}
        </button>
    )
}