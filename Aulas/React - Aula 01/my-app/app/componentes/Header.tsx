export default function Header() {
    return (
        <div className="w-screen bg-gray-300 flex justify-between p-2">
            <h1>My Logo</h1>
            <ul className="flex justify-between gap-4">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

            <div>
                <input type="text" />
                <input 
                type="button"
                value="Buscar"
                 />
            </div>
        </div>

    )
}