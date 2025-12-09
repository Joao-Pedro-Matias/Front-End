"use client"

import {useRouter} from "next/navigation"

export default function Home(){

  const router = useRouter()

  const redireciona = ()=>{
    setTimeout(() =>{
      router.push("/login")
    })
  }


  return(
    <div className="w-screen h-screen bg-primary flex items-center justify-center">
      <div>
        <h1>Clique no botão abaixo para ir para login</h1>
        <input type="button"
        value="Login"
        className="p-4 py-2 bg-black text-white rounded-xl shadow-sm"
        onClick={redireciona} />
      </div>
    </div>
  )
}