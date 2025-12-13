interface ICard {
     children?: React.ReactNode
     style: keyof typeof variants
     img?: string
}

const variants = {
     login: "w-[25vw] h-[45vh] p-4 bg-primary",
     popup: "w-[20vw] h-[10vh] p-2 bg-white absolute right-0 top-0 mt-5 me-5",
     teams: "w-[42vh] h-[22vh] p-4 bg-primary w-full",
     inbox: "w-[42vh] h-[11vh] bg-primary w-full",
     tasks: "w-[63.2vh] h-[25vh] bg-primary w-full",
}

export default function Card({ children, style, img }: ICard) {

     const selectedStyle = variants[style]
     let isTeams = false
     let isInbox = false

     if (style == "teams") {
          isTeams = true
     }

     if (style == "inbox") {
          isInbox = true
     }

     return (
          <div className={`rounded-xl shadow-sm flex justify-center ${selectedStyle}`}>
               {isTeams ? (
                    <div className="flex gap-3">
                         <img src={`/images/${img}`} className="w-30 h-30 object-cover rounded-md" />
                         {children}

                    </div>
               ) : (isInbox ? (
                    <div className="flex gap-3 w-full" >
                         <img src={`/images/${img}`} className="w-[10.35vh] h-[10.82vh] object-cover rounded-md" />
                         {children}

                    </div>
               ) : (
                    <div className="flex w-full">
                         {children}
                    </div>
               )
               )}
          </div >

     )
}