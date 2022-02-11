import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams();
    console.log(id);

    const contacts = useSelector((state) => state.contacts)
    let currContact;
    contacts.map((contact) => {
        if (contact.id === id) {
            currContact = contact.data
            console.log(contact.data)
        }
    })

    const [update, setUpdate] = useState({
        name: currContact.name, mobno: currContact.mobno, email: currContact.email
    })
    let name, value;
    const handleInputs = (e) => {
        // console.log(e.target.value);
        name = e.target.name;
        value = e.target.value;

        setUpdate({ ...update, [name]: value });
    }
    const onSave = () => {
        console.log(update)
        contacts.map((contact) => {
            if (contact.id === id) {
                contact.data = update
            }
        })
    }

    return (
        <>
            {/* <div className='space-y-20'>
                <div className='text-3xl font-bold  text-center mt-10'>Edit Page</div>
                <div className=' flex flex-col justify-center bg border-2 w-2/3 mx-auto p-6 space-y-4'>
                    <div className='mx-auto w-1/2 flex justify-around'>
                        <span className='text-4xl font-medium text-slate-400'>Name:</span>
                        <input type="text" className='border-2 w-1/2 text-2xl text-center' name='name' value={ update.name } onChange={ handleInputs } />
                    </div>
                    <div className='mx-auto w-1/2 flex justify-around'>
                        <span className='text-4xl font-medium text-slate-400'>Mobile No.:</span>
                        <input type="text" className='border-2 w-1/2 text-2xl text-center' name='mobno' value={ update.mobno } onChange={ handleInputs } />
                    </div>
                    <div className='mx-auto w-1/2 flex justify-around'>
                        <span className='text-4xl font-medium text-slate-400'>Email:</span>
                        <input type="text" className='border-2 w-1/2 text-2xl text-center' name='email' value={ update.email } onChange={ handleInputs } />
                    </div>
                    <div className='mx-auto space-x-1'>
                        <Link to='/'>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Cancel
                            </button>
                        </Link>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div> */}
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