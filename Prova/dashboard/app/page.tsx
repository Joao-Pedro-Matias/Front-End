import Button from "./componentes/ui/Button";
import Card from "./componentes/ui/Card";

export default function UsefulArea() {
    return (
        <div className="w-screen h-screen bg-background-color flex ">
             <div className="flex flex-col px-[3vw] w-full bg-cover bg-center bg-no-repeat bg-[url('/images/fundo2.png')]">
                <Card
                size="w-[25vw] h-[10vh]">
                
                <Button
                name="Login"
                style="primary"                
                />
                </Card>
            </div>
        </div>
    )
}