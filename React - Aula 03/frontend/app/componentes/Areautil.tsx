import Sidebar from "./Sidebar"

interface IArea {
    titulo : string,
    children?: React.ReactNode
}

export default function Areautil({titulo, children}: IArea) {
    return (
        <div className="w-screen h-screen bg-primary flex">
            <Sidebar />
            <div className="w-full h-full bg-white p-8 flex flex-col gap-4">
                <h1 className="text-2xl font-semibold px-[4vw] py-[8vh]">{titulo}</h1>
                {children}
            </div>
        </div>
    )
}