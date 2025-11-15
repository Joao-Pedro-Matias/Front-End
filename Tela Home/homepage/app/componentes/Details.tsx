"use client"

interface IDetalhes {
    titulo: string;
}

import Button from "./ui/Button"
import Card from  "./ui/Card"

export default function Detaiils() {
    return (
        <div className="mt-20 p-2 items-center justify-center flex flex-col gap-5 w-screen">
            <p className="text-6xl">Titulo</p>
            <p className="text-4xl">Saiba mais sobre os produtos</p> 

            <div className="flex flex-row gap-3 flex-wrap justify-center p-4">
                <Card
                titulo="Produto 1"
                descricao="Desconto de 10%"
                >
                    <img src="imgs/homepage/app/componentes/imgs/WhatsApp Image 2025-09-29 at 21.59.56.jpeg" alt="" />
                </Card>
                
                <Card                
                titulo="Produto 2"
                descricao="Desconto de 40%"
                >
                </Card>
                
                <Card
                titulo="Produto 3"
                descricao="Desconto de 25%"
                >
                </Card>
                
                <Card
                titulo="Produto 4"
                descricao="Desconto de 30%"
                >
                </Card>
            </div>                       
        </div>
    )
}