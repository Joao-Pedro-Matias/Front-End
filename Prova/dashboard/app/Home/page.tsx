import UsefulArea from "../componentes/UsefulArea"
import Card from "../componentes/ui/Card"

export default function Home() {
    return (
        <div>
            <UsefulArea
                title="FlowTrack"
                subtitle="Your routine, in the right flow."
            >
                <div className="flex flex-col">
                    <p className="text-text-secundary text-2xl font-bold">My Teams</p>
                    <p className="text-text-primary text-lg font-base">Selection: Senai Team</p>

                    <div className="flex gap-4">

                        <Card
                            style="teams"
                        >
                            <div className="flex flex-col gap-2">
                                <p className="text-white text-xl font-bold">Senai Team</p>
                                <p className="text-white text-light text-sm">Task: 5/20</p>
                                <p className="text-white text-light text-sm">Next: Sep 15</p>
                                <p className="text-white text-light text-sm">Members: 40</p>

                            </div>
                        </Card>

                        <Card
                            style="teams"
                        >
                        </Card>
                    </div>
                </div>


            </UsefulArea>
        </div>
    )
}