/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../actions';

const Contacts = () => {

    const contacts = useSelector((state) => state.contacts)


    const dispatch = useDispatch();
    const [lk, setLk] = useState({
        like: "false"
    });

    console.log(lk);
    const updateLike = (contact) => {
        const { id, like } = contact

        if (like === "false") {
            setLk({ like: "true" })

            contacts.map((contact) => {
                if (contact.id === id) {
                    contact.like = "true";
                }

            })
        }
        else if (like === "true" ) {
            setLk({ like: "false" })

            contacts.map((contact) => {
                if (contact.id === id)
                    contact.like = "false";
            })
        }
    }

    const [user, setUser] = useState({
        name: "", mobno: "", email: ""
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    return (
        <>
            <div className='px-16'>
                <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
                <section class="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
                    <div class="">
                        <div class="flex flex-wrap lg:justify-between p-3">
                            <div class="w-full lg:w-1/4 xl:w-3/12">
                                <div class="bg-white relative rounded-lg sm:p-12 drop-shadow-lg ">
                                    <form>
                                        <div class="mb-6">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                name='name'
                                                value={ user.name }
                                                onChange={ handleInputs }
                                                class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary " />
                                        </div>
                                        <div class="mb-6">
                                            <input
                                                type="email"
                                                name='email'
                                                placeholder="Your Email"
                                                value={ user.email }
                                                onChange={ handleInputs }
                                                class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary " />
                                        </div>
                                        <div class="mb-6">
                                            <input
                                                type="text"
                                                name='mobno'
                                                placeholder="Your Phone"
                                                value={ user.mobno }
                                                onChange={ handleInputs }
                                                class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary " />
                                        </div>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={ () => { dispatch(addContact(user), setUser({ name: '', mobno: '', email: '' })) } }
                                                class=" w-full text-white  bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90 ">
                                                Add Contact
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="w-full lg:w-3/4 xl:w-8/12 ">

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
                                                                <th
                                                                    class="w-1/5 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">

                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            { contacts.map((contact) => (
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
                                                                        <Link to={ `/edit/${contact.id}` } >
                                                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                                                Edit
                                                                            </button>
                                                                        </Link>
                                                                    </td>
                                                                    <td
                                                                        class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] ">
                                                                        <button className="" onClick={ () => { updateLike(contact) } }>
                                                                            { contact.like === "true" ?
                                                                                <img src="https://img.icons8.com/external-flat-icons-pause-08/64/000000/external-favourite-winter-flat-icons-pause-08.png" className='h-6' alt={'image'}/> :
                                                                                <img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-favourite-music-dreamstale-lineal-dreamstale.png" className='h-6' alt={'image'} /> }
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )) }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Contacts