'use client'

import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { IoLogoGithub, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5"

export default function Home() {
	return(
		<>
			<div className="w-screen h-screen max-w-full">
				<section className="sobreMim min-w-full min-h-full flex items-center justify-around px-12 box-border tablet:flex-col tablet:max-w-full tablet:max-h-full tablet:justify-center tablet:gap-y-5">
					<div className="foto max-w-[45%] tablet:max-w-full flex flex-col items-center justify-center">
						<Image 
							src="/images/logo.svg"
							alt="logotipo do desenvolvedor em formato de letra 'A'"
							width={300}
							height={233}
							priority={true}
							quality={100}
							className="h-auto rounded-3xl"
						/>
					</div>

					<div className="text max-w-[55%] h-full tablet:max-w-full">
						<div className="part1 flex flex-col mb-5">
							<h1 className="text-4xl mb-5 text-[var(--blue)]">Sobre mim</h1>

							<h2 className="mb-3 text-3xl">Algumas coisas sobre mim...</h2>

							<p className="text-justify transition-all duration-1000 opacity-0">Olá, seja bem-vindo ao meu portfólio, meu nome é Álvaro Sales, tenho 19 anos, sou estudante de desenvolvimento web e atualmente sou desenvolvedor Front-End.</p>
						</div>

						<div className="part2" id="Contato">
							<h2 className="inline-block transition-all duration-500 transform origin-right scale-x-0 text-3xl mb-3 tracking-wider">Para entrar em contato comigo?</h2>

							<p className="text-justify">Você pode entrar em contato atravez do meu telefone ou Email.</p>

							<p className="text-justify">Telefone: (82) 993263814</p>
							 
							<p className="text-justify">Email: contato.alvarosales@gmail.com</p>

							<div className="links flex items-center justify-start mt-5">
								<button className="btn1 border-none font-bold tracking-wider rounded-md bg-transparent mr-8">
									<Link href="/projetos" className="text-[var(--white)] py-2 px-5 rounded-md transition-all duration-500 bg-transparent border-2 border-[var(--white)] hover:bg-[var(--blue)] hover:border-2 hover:border-transparent">Ver mais</Link>
								</button>

								<div className="social flex items-center gap-3">
									<Link 
									href="http://wa.me/5582993263814?text=Oii%20%C3%81lvaro,%20quero%20contratar%20seus%20servi%C3%A7os!%20" 
									target="_blank" 
									title="Whatsapp" 
									alt="Logo da rede social Whatsapp">
										<IoLogoWhatsapp className="text-4xl text-[var(--white)] transition-colors duration-300 hover:text-[var(--blue)]"/>
									</Link>

									<Link 
									href="https://www.instagram.com/alvarosales.tech/" 
									alt="Logo da rede social Instagram" 
									target="_blank" 
									title="Instagram">
										<IoLogoInstagram className="text-4xl text-[var(--white)] transition-colors duration-300 hover:text-[var(--blue)]"/>
									</Link>

									<Link href="https://github.com/Alvaro-Sales/" 
									alt="Logo do site github" 
									title="Github" 
									target="_blank">
										<IoLogoGithub className="text-4xl text-[var(--white)] transition-colors duration-300 hover:text-[var(--blue)]"/>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
