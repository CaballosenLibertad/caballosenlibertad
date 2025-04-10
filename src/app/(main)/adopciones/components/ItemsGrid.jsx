import { getUrlBase } from "@/utils/urlRoute";

const getData = async () => {
    const urlBase = getUrlBase()
    const url = `${urlBase}/api/adoptions`

    const response = await fetch(url, {
        next: {
            revalidate: 3600
        }
    });

    const result = await response.json();
    return result.data
}

export const ItemsGrid = async () => {
    const data = await getData()

    return (
        <section className='w-full mx-auto pb-6 md:pb-12 lg:pb-14 px-mobile md:px-tablet lg:px-desktop max-w-content'>
            <h2 id="items-grid" className="text-2xl lg:text-3xl font-normal text-primary leading-120">
                Conocé a nuestros caballos rescatados en busca de un hogar
            </h2>
            <div role='region' className="mt-12 mx-auto flex">
                <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-content'>
                    {data.map((item) => (
                        <article
                            key={item.id}
                            className="relative group rounded-sm overflow-hidden w-full aspect-[4/6] "
                        >
                            <img
                                src={item.imgUrl || "/notFoundImage.webp"}
                                alt={item.name}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-lg font-semibold text-center px-2">
                                    {item.name}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}