import { Car } from "lucide-react"
import UsefulArea from "../componentes/UsefulArea"
import Card from "../componentes/ui/Card"

export default function Home() {
    return (
        <div>
            <UsefulArea
                title="FlowTrack"
                subtitle="Your routine, in the right flow."
            >
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <p className="text-text-secundary text-2xl font-bold">My Teams</p>
                        <p className="text-text-primary text-lg font-base">Selection: Senai Team</p>

                        <div className="flex gap-4">

                            <Card
                                style="teams"
                                img="logoSenai.png"
                            >
                                <div className="flex flex-col gap-2">
                                    <p className="text-white text-lg font-bold">Senai Team</p>
                                    <p className="text-white text-light text-sm">Task: 5/20</p>
                                    <p className="text-white text-light text-sm">Next: Sep 15</p>
                                    <p className="text-white text-light text-sm">Members: 40</p>

                                </div>
                            </Card>

                            <Card
                                style="teams"
                                img="logoToyota.png"
                            >
                                <div className="flex flex-col gap-2">
                                    <p className="text-white text-lg font-bold">Toyota Team</p>
                                    <p className="text-white text-light text-sm">Task: 3/8</p>
                                    <p className="text-white text-light text-sm">Next: Nov 20</p>
                                    <p className="text-white text-light text-sm">Members: 8</p>
                                </div>
                            </Card>

                            <Card
                                style="teams"
                                img="House.png"
                            >
                                <div className="flex flex-col gap-2">
                                    <p className="text-white text-lg font-bold">My Team</p>
                                    <p className="text-white text-light text-sm">Task: 9/23</p>
                                    <p className="text-white text-light text-sm">Next: Sep 19</p>
                                    <p className="text-white text-light text-sm">Members: 1</p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-text-secundary text-2xl font-bold">Inbox</p>

                        <div className="flex gap-4">
                            <Card
                                style="inbox"
                                img="inbox.png">
                                <div className="flex flex-col pt-2 gap-2">
                                    <p className="text-white text-lg font-semibold">Navbar Spacing Issue</p>
                                    <div className="flex justify-start gap-4">
                                        <img src="/images/Shape.png" />
                                        <img src="/images/Comentario.png" />
                                        <img src="/images/Anexo.png" />
                                    </div>
                                </div>
                            </Card>

                            <Card
                                style="inbox"
                                img="inbox.png">
                                <div className="flex flex-col pt-2 gap-4">
                                    <p className="text-white text-sm font-semibold">Homepage Layout Update</p>
                                    <div className="flex justify-start gap-4">
                                        <img src="/images/Shape2.png" />
                                        <img src="/images/Anexo.png" />
                                    </div>
                                </div>
                            </Card>

                            <Card
                                style="inbox"
                                img="inbox.png">
                                <div className="flex flex-col pt-2 gap-2">
                                    <p className="text-white text-base font-semibold">Responsive Test Failed</p>
                                    <div className="flex justify-start gap-4">
                                        <img src="/images/Shape3.png" />
                                        <img src="/images/Comentario.png" />
                                    </div>
                                </div>
                            </Card>
                        </div>

                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-text-secundary text-2xl font-bold">Next tasks</p>
                        <div className="flex gap-7">
                            <Card
                                style="tasks">
                                <div className="flex w-full gap-2 p-3">
                                    <div className="w-1/5 flex flex-col justify-center items-center">
                                        <p className="text-4xl text-extrabold">20</p>
                                        <p className="text-4xl text-extrabold">Sep</p>
                                        <p className="text-text-primary text-sm font-base mt-2">in 2 days</p>
                                    </div>
                                    <div className="w-4/5 flex flex-col justify-center gap-2">
                                        <p className="text-white text-lg font-extrabold">Create reusable button and card components</p>
                                        <p className="text-text-primary text-base font-base">Build UI components that can be reused across the project, following consistent design.</p>
                                        <div className="flex justify-start gap-4">
                                            <img src="/images/Shape.png" />
                                            <img src="/images/Shape2.png" />
                                            <img src="/images/Comentario.png" />                                            
                                        </div>
                                    </div>
                                </div>

                            </Card>

                            <Card
                                style="tasks">
                                    <div className="flex w-full gap-2 p-3">
                                    <div className="w-1/5 flex flex-col justify-center items-center">
                                        <p className="text-4xl text-extrabold">26</p>
                                        <p className="text-4xl text-extrabold">Sep</p>
                                        <p className="text-text-primary text-sm font-base mt-2">in 8 days</p>
                                    </div>
                                    <div className="w-4/5 flex flex-col justify-center gap-2">
                                        <p className="text-white text-lg font-extrabold">Develop homepage with responsive layout</p>
                                        <p className="text-text-primary text-base font-base">Design and implement the homepage, making sure it adjusts properly on all screen sizes.</p>
                                        <div className="flex justify-start gap-4">
                                            <img src="/images/Shape3.png" />
                                            <img src="/images/Shape2.png" />
                                            <img src="/images/Anexo.png" />                                            
                                        </div>
                                    </div>
                                </div>


                            </Card>
                        </div>


                    </div>



                </div>
            </UsefulArea>
        </div>
    )
}