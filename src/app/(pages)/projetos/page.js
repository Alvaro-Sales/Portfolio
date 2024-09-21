"use client"
import "../../globals.css"
import Image from "next/image"
import ProjetosCard from "../../../components/projeto/ProjetosCard.js"


export default function Projetos() {
    return(
        <section className="max-w-full h-full flex flex-col items-center justify-center p-5 pb-10">
            <h1 className="titleSection text-center mt-5 mb-5 text-4xl text-[var(--blue)]">
                Meus Projetos
            </h1>

            <div className="w-full h-auto flex flex-col items-center justify-center gap-y-10">
                {/* --------------------------- Card 1 --------------------------- */}
                <ProjetosCard 
                    imagem={
                        <Image 
                            src='/images/NitrizProject.png'
                            alt=""
                            width={890}
                            height={500}
                            priority={true}
                            quality={100}
                            className="imgCardProje"
                        />
                    }
                    title={'Loja NITRIZ'}
                    description={'Website no qual o cliente pode ver os modelos de roupas vendidas pela loja NITRIZ com várias opções de pagamento, isso ajudou na captação de clientes e vendas online.'}
                    link="https://nitriz.vercel.app"
                />

                {/* --------------------------- Card 2 --------------------------- */}
                <ProjetosCard 
                    imagem={
                        <Image 
                            src='/images/DonutsMini.png'
                            alt="Imagem de um website que vende donuts"
                            width={890}
                            height={500}
                            priority={true}
                            quality={100}
                            className="imgCardProje"
                        />
                    }
                    title={'Donuts Mini'}
                    description={'Website no qual o cliente pode ver os sabores de Donuts Mini vendidos pela loja e opção de compra com delivery, isso ajudou na captação de clientes.'}
                    link="https://alvaro-sales.github.io/Donuts_Mini"
                />

                {/* --------------------------- Card 3 --------------------------- */}
                <ProjetosCard 
                    imagem={
                        <Image 
                            src='/images/LaPizza.png'
                            alt="Imagem de um website que vende pizza"
                            width={890}
                            height={500}
                            priority={true}
                            quality={100}
                            className="imgCardProje"
                        />
                    }
                    title={'La Pizza'}
                    description={'Website no qual o cliente pode ver os sabores de pizza vendidos pelo cliente e opção de compra com delivery, isso ajudou nas vendas.'}
                    link="https://alvaro-sales.github.io/La-Pizzaria"
                />
            </div>
        </section>
    )
}

