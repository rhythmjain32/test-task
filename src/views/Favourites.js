import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Favourites = () => {
    const contacts = useSelector((state) => state.contacts)

    const [lk, setLike] = useState({
        like: "true"
    });

    const updateLike = (contact) => {
        const { id, like } = contact

        if (like === "true") {
            setLike({ like: "false" })

            contacts.map((contact) => {
                if (contact.id === id)
                    contact.like = "false";
            })
        }
    }

    return (
        <>
            <div className="flex justify-center">
                <div class="w-full lg:w-3/4 xl:w-8/12 ">
                    <h1 className='text-center text-xl font-semibold m-4'>Favourites</h1>
                    <script src="https://cdn.tailwindcss.com"></script>
                    <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
                    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

                    <section class="bg-white">
                        <div class="">
                            <div class="flex flex-wrap ">
                                <div class="w-full ">
                                    <div class="max-w-full overflow-x-auto ">
                                        <table class="table-auto w-full">
                                            <thead>
                                                <tr class="bg-primary text-center">
                                                    <th
                                                        class="w-1/5 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">
                                                        Name
                                                    </th>
                                                    <th
                                                        class="w-1/5 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">
                                                        Phone
                                                    </th>
                                                    <th
                                                        class="w-1/5 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">
                                                        Email
                                                    </th>
                                                    <th
                                                        class="w-1/5 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">

                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                { contacts.map((contact) => {
                                                    if (contact.like == 'true') {
                                                        return (
                                                            <tr>
                                                                <td
                                                                    class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
                                                                    { contact.data.name }
                                                                </td>
                                                                <td
                                                                    class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
                                                                    { contact.data.mobno }
                                                                </td>
                                                                <td
                                                                    class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
                                                                    { contact.data.email }
                                                                </td>
                                                                <td
                                                                    class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
                                                                    <button className="" onClick={ () => { updateLike(contact) } }>
                                                                        <img src="https://img.icons8.com/external-flat-icons-pause-08/64/000000/external-favourite-winter-flat-icons-pause-08.png" className='h-6' />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    return null;
                                                }
                                                ) }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Favourites;