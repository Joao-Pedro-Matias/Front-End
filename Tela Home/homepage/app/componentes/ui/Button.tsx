interface IBotao {
    nome: string;
    estilo: "dark" | "light" | "error" | "outline" | "success";
    clique: ()=> void;
}



export default function Button({nome, estilo, clique}:IBotao) {
    const estilos = {
        dark: "bg-blue-700 hover:bg-blue-800 text-white",
        light: "bg-blue-300 hover:bg-blue-400 text-black",
        error: "bg-red-300 hover:bg-red-400 text-black",
        outline: "bg-none outline-2 outline-black",
        success: "bg-green-300 hover:bg-green-400"
    }

    const estiloEscolhido = estilos[estilo]

    return (
        <input
        type="button"
        value={nome}
        onClick = {clique}
        className={`p-2 px-8 rounded-md font-semibold cursor-pointer ${estiloEscolhido}`}
        />
    )
}