import Sidebar from "./Sidebar";

interface IArea {
    title: string;
    subtitle?: string;
    children?: React.ReactNode
}

export default function UsefulArea({ title, subtitle, children }: IArea) {
    return (
        <div className="w-screen h-screen bg-background-color flex">
            <Sidebar/>
            <div className="flex flex-col">
                <div className="px-[3vw] py-[6vh] flex flex-col gap-2">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <h2 className="text-2xl font-medium text-text-primary">{subtitle}</h2>
                </div>
                {children}
            </div>
        </div>
    )
}