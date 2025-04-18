import Link from "next/link";

import { Contribution } from "./components/home/Contribution";
import { Statistics } from "./components/home/Statistics";
import VideoThumbnail from "./components/home/VideoThumbnail";
import { TitleSection } from "./components/TitleSection";

export const metadata = {
    title: "Inicio | Caballos en Libertad",
    description: "Fundación Caballos en Libertad, un refugio dedicado al rescate y protección de equinos en situación de vulnerabilidad. Descubre nuestra labor y cómo ser parte del cambio.",
}

export default function Home() {
    return (
        <main className='pt-[70px] lg:pt-[90px] '>
            <section id="hero" role="banner">
                <TitleSection
                    titleTextContent='Caballos en Libertad'
                    spanTextContent='Somos una organización sin fines de lucro, encargada de la protección, cuidado y rescate de equinos.'
                >
                    <Link href={'/nosotros'} className='button-primary font-semibold md:text-xl mt-4 lg:mt-8 md:w-[360px] md:h-[64px] col-start-1 w-fit'>
                        CONOCENOS
                    </Link>
                </TitleSection>
            </section>

            <section role="region" className="w-full mt-4 max-w-banner mx-auto">
                <VideoThumbnail />
            </section>

            <section role="region" className='flex flex-col w-full box-border items-start justify-between gap-20 lg:gap-40 py-20 md:py-24 lg:py-32 xl:py-40 px-mobile md:px-tablet lg:px-desktop max-w-content mx-auto'>
                <Statistics />
                <Contribution />
            </section>
        </main>
    );
}