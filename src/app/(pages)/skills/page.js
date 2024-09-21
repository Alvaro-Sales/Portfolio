"use client"
import "../../globals.css"
import { GrMysql } from "react-icons/gr"
import { VscVscode } from "react-icons/vsc"
import { RiNextjsFill } from "react-icons/ri"
import Card from "../../../components/card/card.js"
import { SiFigma, SiTailwindcss, SiAdobephotoshop } from "react-icons/si"
import { IoLogoReact, IoLogoGithub, IoLogoPython, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5"


export default function Skills() {
    return(
        <section className="max-w-full h-full flex flex-col items-center justify-center p-5 pb-10">
            <h1 className="titleSection text-center mt-5 mb-5 text-4xl text-[var(--blue)]">
                Minhas Skills
            </h1>

            <div className="w-full max-w-[1500px] h-auto box-border flex flex-wrap items-center justify-center">
                <Card 
                    icon={<RiNextjsFill className="w-16 h-16 mb-5" />}
                    title="Next.js"
                    description="Next.js é um framework baseado em React.js que optimiza o desempenho do site."
                    className="transition-all duration-500 transform translate-x-24 opacity-0 delay-[0.5s]"
                />

                <Card 
                    icon={<IoLogoReact className="w-16 h-16 mb-5" />}
                    title="React.js"
                    description="É uma biblioteca front-end JavaScript de código aberto com foco em interfaces de usuário."
                />

                <Card 
                    icon={<SiTailwindcss className="w-16 h-16 mb-5" />}
                    title="Tailwind CSS"
                    description="Tailwind CSS é um framework CSS de código aberto que se destaca por ter estilo utilitário."
                />

                <Card 
                    icon={<IoLogoCss3 className="w-16 h-16 mb-5" />}
                    title="CSS 3"
                    description="Ferramenta de estilização de páginas web."
                />

                <Card 
                    icon={<IoLogoHtml5 className="w-16 h-16 mb-5" />}
                    title="HTML 5"
                    description="Ferramenta para linguagem de marcação web."
                />

                <Card 
                    icon={<IoLogoJavascript className="w-16 h-16 mb-5" />}
                    title="Javascript"
                    description="Linguagem de programação interpretada e estruturada para páginas web."
                />

                <Card 
                    icon={<GrMysql className="w-16 h-16 mb-5" />}
                    title="MySQL"
                    description="O MySQL é um sistema de gerenciamento de banco de dados."
                />

                <Card 
                    icon={<IoLogoPython className="w-16 h-16 mb-5" />}
                    title="Python"
                    description="Python é uma linguagem de programação de alto nível, interpretada de script."
                />

                <Card 
                    icon={<IoLogoGithub className="w-16 h-16 mb-5" />}
                    title="Github"
                    description="Plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git."
                />

                <Card 
                    icon={<VscVscode className="w-16 h-16 mb-5" />}
                    title="VS code"
                    description="É um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS."
                />

                <Card 
                    icon={<SiFigma className="w-16 h-16 mb-5" />}
                    title="Figma"
                    description="O Figma é uma plataforma para construção de design de interfaces e protótipos."
                />

                <Card 
                    icon={<SiAdobephotoshop className="w-16 h-16 mb-5" />}
                    title="Adobe Photoshop"
                    description="Software para edição de imagens."
                />
            </div>
        </section>
    )
}

