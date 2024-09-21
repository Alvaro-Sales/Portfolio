"use client"

import Link from "next/link"
import "../../app/globals.css"
import { BsPersonFill } from "react-icons/bs"
import { VscCode } from "react-icons/vsc"
import { IoRocketSharp } from "react-icons/io5"


const NavbarFloat = () => {
    return(
        <>
            <header className="w-full z-50 fixed bg-transparent bottom-5 flex justify-center items-center">
                <nav className="vidro h-[60px] w-[300px] flex justify-center items-center bg-[#fff] box-border px-5 rounded-full">
                    <ul className="nav-list list-none flex items-center gap-10">
                        <li className="tracking-[3px]" title="Sobre mim">
                            <Link href="/" className="text-4xl text-[var(--white)] transition-all duration-300 hover:text-[var(--blue)]">
                                <BsPersonFill /> 
                                {/* <span className="text-base">Sobre mim</span> */}
                            </Link>
                        </li>

                        <li className="tracking-[3px]" title="Projetos">
                            <Link href="/projetos" className="text-4xl text-[var(--white)] transition-all duration-300 hover:text-[var(--blue)]">
                                <IoRocketSharp /> 
                                {/* <span className="text-base">Projetos</span> */}
                            </Link>
                        </li>

                        <li className="tracking-[3px]" title="Skills">
                            <Link href="/skills" className="text-4xl text-[var(--white)] transition-all duration-300 hover:text-[var(--blue)]">
                                <VscCode /> 
                                {/* <span className="text-base">Skills</span> */}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default NavbarFloat
