import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams();

    const contacts = useSelector((state) => state.contacts)
    let currContact;
    contacts.map((contact) => {
        if (contact.id === id) {
            currContact = contact.data
        }
    })

    const [update, setUpdate] = useState({
        name: currContact.name, mobno: currContact.mobno, email: currContact.email
    })
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUpdate({ ...update, [name]: value });
    }
    const onSave = () => {
        contacts.map((contact) => {
            if (contact.id === id) {
                contact.data = update
            }
        })
    }

    return (
        <>
            <div className="flex justify-center ">
                <div class="w-full lg:w-1/4 xl:w-3/12">
                    <div class="bg-white relative rounded-lg sm:p-12 drop-shadow-lg ">
                        <h1 className='text-center font-semibold text-xl pb-8'>Edit Contact</h1>
                        <form>
                            <div class="mb-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name='name'
                                    value={ update.name }
                                    onChange={ handleInputs }
                                    class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary " />
                            </div>
                            <div class="mb-6">
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Your Email"
                                    value={ update.email }
                                    onChange={ handleInputs }
                                    class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary " />
                            </div>
                            <div class="mb-6">
                                <input
                                    type="text"
                                    name='mobno'
                                    placeholder="Your Phone"
                                    value={ update.mobno }
                                    onChange={ handleInputs }
                                    class=" w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary " />
                            </div>

                            <div>
                                <Link to='/'>
                                    <button class="w-full text-white  bg-blue-600 rounded border border-primary p-3 transition hover:bg-opacity-90">
                                        Cancel
                                    </button>
                                </Link>
                                <Link to='/'>
                                <button
                                    type="button"
                                    onClick={ onSave }
                                    class=" w-full text-white  bg-blue-600 rounded border border-primary p-3 transition hover:bg-opacity-90 ">
                                    Save
                                </button>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit