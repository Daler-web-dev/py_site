"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
	const t = useTranslations("Index");

	return (
		<div className="wrapper">
			<b>{t("fullName")}</b>
			<h1>{t("title")}</h1>
			<h3>
				<b>{t("description")}</b>
			</h3>
			<div className="social">
				<span>{t("socMedia")}:</span>

				<nav>
					<Link href="/">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 320 512"
							color="black"
							style={{ color: "black" }}
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
						</svg>
					</Link>
					<Link href="/">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 16 16"
							color="black"
							style={{ color: "black" }}
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
						</svg>
					</Link>
					<Link href="/">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 24 24"
							style={{
								fill: "rgba(0, 0, 0, 1)",
								transform: "msfilter",
							}}
						>
							<path d="M21.579 6.855c.14-.465 0-.806-.662-.806h-2.193c-.558 0-.813.295-.953.619 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.139 0-.341-.162-.341-.627V6.855c0-.558-.161-.806-.626-.806H9.642c-.348 0-.558.258-.558.504 0 .528.79.65.871 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.752c-.627 0-.752.295-.752.619 0 .582.743 3.462 3.461 7.271 1.812 2.601 4.363 4.011 6.687 4.011 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.324 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.192c.626 0 .939-.313.759-.931-.197-.615-.907-1.51-1.849-2.569-.512-.604-1.277-1.254-1.51-1.579-.325-.419-.231-.604 0-.976.001.001 2.672-3.761 2.95-5.04z" />
						</svg>
					</Link>
					<Link href="/">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 16 16"
							color="black"
							style={{ color: "black" }}
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
						</svg>
					</Link>
					<Link href="/">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 448 512"
							color="black"
							style={{ color: "black" }}
							height="20"
							width="20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
						</svg>
					</Link>
				</nav>
			</div>
			<img src="/person.png" className="poster" />
		</div>
		// <main classNameName="px-4 md:px-20 h-full md:h-screen flex flex-col-reverse gap-5 justify-end laptop:flex-row  laptop:justify-between items-center pt-[50px] laptop:pb-[0px] pb-[50px] overflow-hidden">
		// 	<div classNameName="flex flex-col gap-6 items-start w-full">
		// 		<div>
		// 			<h2 classNameName="tracking-wide mb-2 fhd:text-2xl">{t("fullName")}</h2>
		// 			<h1 classNameName="text-2xl font-medium md:text-5xl fhd:text-8xl">
		// 				{t("title")}
		// 			</h1>
		// 		</div>
		// 		<p classNameName="md:w-[50ch] w-full fhd:text-3xl">{t("description")}</p>
		// 		<div classNameName="flex items-center gap-2">
		// 			<span classNameName="py-0 font-light opacity-50 fhd:text-2xl">
		// 				{t("socMedia")}:
		// 			</span>
		// 			<nav classNameName="flex items-center gap-6">
		// 				<Link href={"/"}>
		// 					<FaFacebookF size="20" color="black" />
		// 				</Link>
		// 				<Link href={"/"}>
		// 					<BsInstagram size="20" color="black" />
		// 				</Link>
		// 				<Link href={"/"}>
		// 					<Image
		// 						src="/vk.svg"
		// 						alt=""
		// 						width="30"
		// 						height="30"
		// 					/>
		// 				</Link>
		// 				<Link href={"/"}>
		// 					<BsYoutube size="20" color="black" />
		// 				</Link>
		// 				<Link href={"/"}>
		// 					<FaTelegramPlane size="20" color="black" />
		// 				</Link>
		// 			</nav>
		// 		</div>
		// 	</div>
		// 	<div
		// 		style={{
		// 			backgroundImage: `url("/person.png")`,
		// 			backgroundSize: "contain",
		// 			backgroundRepeat: "no-repeat",
		// 			backgroundPosition: "center",
		// 		}}
		// 		classNameName="w-full h-[300px] tablet:h-[500px] laptop:h-screen"
		// 	></div>
		// </main>
	);
}
