"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import Button from "./componentes/ui/Button";
import Card from "./componentes/ui/Card";
import Popup from "./componentes/ui/Popup";

export default function UsefulArea() {

    const router = useRouter()

    

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState(false)

    const handleForm = (e: any, field: string) => {

        if (field === "login") {
            setLoginInfo({
                email: e.target.value,
                password: loginInfo.password
            })
        }
        else {
            setLoginInfo({
                email: loginInfo.email,
                password: e.target.value
            })
        }
    }

    const handleSubmit = () => {
        if (loginInfo.email === "" || loginInfo.password === "") {
            setTimeout(() => {
                setError(false)
            }, 5000)

            setError(true)
        }
        else {
            router.push("/Home")
        }
    }

    return (
        <div className="w-screen h-screen bg-background-color flex ">
            <div className="flex flex-col px-[3vw] w-full justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('/images/fundo2.png')]">

                {error && <Popup status="Erro!" msg="Credenciais inválidas, digite novamente."  />}
                
                <Card
                    
                    style="login">

                    <div className="w-full flex flex-col gap-2">
                        <img src="/images/Logo.png" className="w-60 h-12 object-cover flex items-center" />
                        <label className="text-text-primary font-semibold text-lg">Email</label>

                        <input
                            value={loginInfo.email}
                            onChange={(e) => { handleForm(e, "login") }}
                            placeholder="email@myemail.com"
                            type="text"
                            className="text-text-primary w-full rounded-lg border border-primary-light shadow-sm p-2 focus:outline-1 focus:outline-blue-400"
                        />



                        <label className="text-text-primary font-semibold text-lg">Password</label>

                        <input
                            value={loginInfo.password}
                            onChange={(e) => { handleForm(e, "password") }}
                            placeholder="**********"
                            type="password"
                            className="text-text-primary w-full rounded-lg border border-primary-light shadow-sm p-2 focus:outline-1 focus:outline-blue-400"
                        />
                        <Button
                            name="Login"
                            style="primary"
                            onClick={handleSubmit}
                        />
                    </div>
                </Card>



            </div>
        </div>
    )
}