"use client"
import "../../app/globals.css"
import Link from "next/link"


const ProjetosCard = ({imagem, title, description, link}) => {
    return(
        <div className="CardFade bg-[#ffffff33] w-full max-w-[1800px] h-[500px] flex items-center justify-around rounded-2xl gap-5 px-5 tablet:flex-col tablet:w-[90%] tablet:h-auto tablet:justify-center">
            {imagem && <div className="w-1/2 max-w-[60%] tablet:max-w-full tablet:w-full"> {imagem} </div>}
            
            <div className="flex flex-col items-center justify-center max-w-[40%] p-5 gap-10 tablet:w-full tablet:max-w-full tablet:gap-5">
                {title && <h1 className="text-3xl tracking-[2px]"> {title} </h1>}

                {description && <p className="text-base text-justify tracking-widest"> {description} </p>}

                {link && <button className="bg-[var(--blue)] px-20 py-3 rounded-xl hover:bg-[#0080ffad] tracking-[2px] uppercase transition-colors duration-200 mobile:px-10"> <Link href={link} target="_blank">Ver Projeto</Link> </button>}
            </div>
        </div>
    )
}

export default ProjetosCard
