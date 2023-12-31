import Image from 'next/image'
import React from 'react'

const VideoCard = () => {
    return (
        <div class="pb-4 sm:mb-0 bg-[#2e2b2b] rounded-xl shadow-xl mb-6">
            <div class="rounded-lg h-48 relative overflow-hidden">
                <Image alt="content" layout="fill" class="object-cover object-center h-full w-full" src="https://dummyimage.com/240x120" />
            </div>
            <div className='p-4'>
                <h2 class="text-xl font-medium title-font text-white mt-5">Shooting Stars</h2>
                <p class="text-base leading-relaxed mt-2">Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. </p>
            </div>
        </div>
    )
}

export default VideoCard