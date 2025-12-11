interface ICard {
     children?: React.ReactNode
     size: string
}

export default function Card ({children, size}:ICard){

     return(
          <div className={`p-4 rounded-xl shadow-sm bg-gray-100 ${size}`}>
               {children}
          </div>
     )
}