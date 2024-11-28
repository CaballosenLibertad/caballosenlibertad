import ItemTable from "../ItemTable/ItemTable"

const headers = [
    { id: 1, title: "Titulo" },
    { id: 2, title: "Fecha" },
    { id: 3, title: "Info" },
    { id: 4, title: "Actions" },
]

function Table({ data }) {

    return (
        <section className="flex flex-col mt-6 px-4 sm:px-6 md:px-0">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 overflow-y-scroll">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="min-h-[350px] overflow-hidden border border-gray-200 dark:border-gray-200 md:rounded-lg overflow-y-scroll">
                        {/* Table */}
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-200 overflow-y-scroll">
                            <thead className="bg-white text-black divide-y divide-gray-200">
                                <tr className='w-full'>
                                    {
                                        headers.map((item) =>
                                            <th scope="col" key={item.id}
                                                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-700 dark:text-gray-700">
                                                {item.title}
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>

                            <tbody className="bg-white text-black divide-y divide-gray-200">
                                {
                                    data.map((item) =>
                                        <ItemTable data={item} key={item.id} />
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Table
