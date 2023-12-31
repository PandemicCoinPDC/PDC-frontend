import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

const WhoWeAre = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <section className='container relative z-10 px-0 py-10 md:px-10 md:py-20'>
            <div className='flex items-center justify-center z-10 flex-col'>
                <div className="w-fit mx-auto my-16 text-center">
                    <h1 className="text-3xl md:text-5xl text-center">Who We Are</h1>
                    <div className="border-b mt-3 mb-6 border-slate-700  w-full" />
                    <p className="mt-6 text-sm tracking-[10px]">Our introduction video</p>
                </div>
                <div className="rounded-[30px] relative w-5/6 mx-auto h-80 overflow-hidden">
                    <Image alt="" layout="fill" className='object-cover' src='/assets/whowe.webp' />
                    <div className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-50">
                        <div className="absolute top-[50%] left-[50%] w-[60px] h-[60px] translate-x-[-50%] rounded-full translate-y-[-50%] z-10 flex items-center justify-center text-center bg-[#fff]">
                            <FaPlay className='text-[#111] text-[32px] flex items-center justify-center text-center' />
                        </div>
                    </div>
                </div>
                <>
                    <div className="flex items-center justify-center">
                        <button
                            type="button"
                            onClick={openModal}
                            className="rounded-md text-white bg-[#FB2525] px-8 py-3 text-[15px] my-6 font-medium hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                        >
                            Invest More
                        </button>
                    </div>

                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-md flex items-center justify-center flex-col transform overflow-hidden rounded-2xl bg-[#252525] border-2 border-[#ffffff80] text-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-3xl mb-6 font-medium leading-6"
                                            >
                                                Payment successful
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm">
                                                    Your payment has been successfully submitted. We’ve sent
                                                    you an email with all of the details of your order.
                                                </p>
                                            </div>

                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 text-white px-4 py-2 text-sm font-medium focus:outline-none"
                                                    onClick={closeModal}
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </>
            </div>
            {/* <Image width={500} height={500} className="absolute right-0 bottom-0 -z-10" src="/assets/whogr.png" /> */}
        </section>
    )
}

export default WhoWeAre