"use client"
import Image from "next/image";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import {useTranslations} from 'next-intl';
import Link from "next/link";

export default function Home() {
	const t = useTranslations('Index')

	return (
		<main className="px-4 md:px-20 h-full md:h-screen flex flex-col-reverse gap-5 justify-end laptop:flex-row  laptop:justify-between items-center pt-[50px] laptop:pb-[0px] pb-[50px] overflow-hidden">
			<div className="flex flex-col gap-6 items-start w-full">
				<div>
					<h2 className="tracking-wide mb-2">{t("fullName")}</h2>
					<h1 className="md:text-5xl text-2xl font-medium">
						{t("title")}
					</h1>
				</div>
				<p className="md:w-[50ch] w-full">
					{t("description")}
				</p>
				<div className="flex items-center gap-2">
					<span className="py-0 font-light opacity-50">{t("socMedia")}:</span>
					<nav className="flex items-center gap-6">
						<Link href={"/"}>
							<FaFacebookF size="20" color="black" />
						</Link>
						<Link href={"/"}>
							<BsInstagram size="20" color="black" />
						</Link>
						<Link href={"/"}>
							<Image
								src="/vk.svg"
								alt=""
								width="30"
								height="30"
							/>
						</Link>
						<Link href={"/"}>
							<BsYoutube size="20" color="black" />
						</Link>
						<Link href={"/"}>
							<FaTelegramPlane size="20" color="black" />
						</Link>
					</nav>
				</div>
			</div>
			<div
				style={{
					backgroundImage: `url("/person.png")`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
				className="w-full h-[300px] tablet:h-[500px] laptop:h-screen"
			></div>
		</main>
	);
}
