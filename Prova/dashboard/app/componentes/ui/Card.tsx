interface ICard {
     children?: React.ReactNode
     size: string
     style: keyof typeof variants
}

const variants = {
    primary: "p-4 bg-primary",
    popup: "p-2 bg-white absolute right-0 top-0 mt-5 me-5"
}

export default function Card ({children, size, style}:ICard){

    const selectedStyle = variants[style]

     return(
          <div className={`rounded-xl shadow-sm flex justify-center ${size} ${selectedStyle}`}>
               {children}
          </div>
     )
}