"use client"

import Card from "./ui/Card"
import Button from "./ui/Button"

export default function HeroSection() {
    return (
        <div className="p-4 w-screen bg-none flex items-center justify-center mt-5 gap-5">

            <Card
                titulo='Meus Carros'
                descricao='Toyota Corolla'
            />

            <Card
                titulo="Informações Financeiras"
                descricao="Clique para saber mais sobre o banco"
            >
                <h1>Eu sou um elemento Children</h1>
                <Button
                nome = "Ver Mais"
                estilo = "light"
                clique = {()=>{alert("Redirecionado para Meus Carros")}}
                />
            </Card>

        </div>
    )
}