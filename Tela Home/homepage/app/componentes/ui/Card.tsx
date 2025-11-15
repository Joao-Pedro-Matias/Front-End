interface ICard {
    titulo: string
    descricao: string
    children?: React.ReactNode
}

export default function Card({titulo, descricao, children}:ICard) {
    return (
        <div className="bg-gray-100 rounded-lg w-[30vw] h-[50vh] justify-center items-center flex-row p-4 ">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            {children}
        </div>
    )
}