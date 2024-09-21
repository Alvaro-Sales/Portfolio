"use client"
import "../../app/globals.css"


export default function Card({icon, title, description}){
    return(
        <>
            <div className="cardAnimation flex flex-col w-[280px] h-[280px] m-5 p-5 box-border rounded-3xl items-center justify-center bg-[var(--black-2)]">
                {icon && <span> {icon} </span>}

                {title && <h1 className="text-2xl mb-2 tracking-wider"> {title} </h1>}

                {description && <p className="text-center tracking-widest"> {description} </p>}
            </div>
        </>
    )
}
