import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
	return [{ locale: "ru" }, { locale: "en" }, { locale: "uz" }];
}

const inter = Montserrat({ subsets: ["latin"] });

export default async function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: any;
}) {
	let translation;
	try {
		translation = (await import(`../../langs/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}

	return (
		<html lang="en">
			<head>
				<link rel="icon" href="images/favicon.ico" />
			</head>
			<body className={inter.className}>
				<header>
					<Image
						src="/logo.svg"
						alt="logo"
						width="20"
						height="20"
						className="logo"
					/>

					<nav className="flex items-center gap-2">
						<Link
							href="/uz"
							className={`text-md py-0 ${
								locale === "uz"
									? "font-medium"
									: "font-extralight"
							}`}
						>
							UZ
						</Link>
						<div className="h-[14px] w-[1px] bg-black"></div>
						<Link
							href="/ru"
							className={`text-md py-0 ${
								locale === "ru"
									? "font-medium"
									: "font-light"
							}`}
						>
							RU
						</Link>
						<div className="h-[14px] w-[1px] bg-black"></div>
						<Link
							href="/en"
							className={`text-md py-0 ${
								locale === "en"
									? "font-medium"
									: "font-extralight"
							}`}
						>
							EN
						</Link>
					</nav>
				</header>
				<NextIntlClientProvider locale={locale} messages={translation}>
					{children}
				</NextIntlClientProvider>
				<footer>
					<span>
						ⓒ 1991 - 2023, «PARVIZ YAKHYAYEV», ВСЕ ПРАВА ЗАЩИЩЕНЫ.{" "}
					</span>
				</footer>
				<img src="/person.png" className="poster" />
			</body>
		</html>
	);
}
