interface ICard {
     children?: React.ReactNode
     style: keyof typeof variants
}

const variants = {
     login: "w-[25vw] h-[45vh] p-4 bg-primary",
     popup: "w-[20vw] h-[10vh] p-2 bg-white absolute right-0 top-0 mt-5 me-5",
     teams: "w-[42vh] h-[22vh] p-4 bg-primary",
}

export default function Card({ children, style }: ICard) {

     const selectedStyle = variants[style]
     let isTeams = false

     if (style == "teams") {
          isTeams = true
     }

     return (
          <div className={`rounded-xl shadow-sm flex justify-center ${selectedStyle}`}>
               {isTeams ? (<div className="flex gap-3">
                    <img src="/images/fundo2.png" className="w-30 h-30 object-cover rounded-md" />
                    {children}

               </div>) : (
                    <div>
                         {children}
                    </div>)}
          </div>

     )
}