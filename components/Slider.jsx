'use client'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
// components/Slider.js
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import clsx from 'clsx'

const data = [
	{
		title: 'Feel the adrenaline rush',
		desc: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
		paginateName: 'ATVs Traveling',
	},
	{
		title: 'Destroy your limitations',
		desc: 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
		paginateName: 'Rock climbing',
	},
	{
		title: 'Get Inspired',
		desc: 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
		paginateName: 'Hot air ballooning',
	},
	{
		title: 'Overcome your fears',
		desc: 'Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a birds eye view forever. ',
		paginateName: 'Skydiving',
	},
	{
		title: 'Trust the flow',
		desc: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
		paginateName: 'Rafting',
	},
]

function Slider() {
	const [activeSlideIndex, setActiveSlideIndex] = useState(1)

	const handleSlideChange = swiper => {
		setActiveSlideIndex(swiper.activeIndex)
	}

	const swiperRef = useRef(null)

	const goToSlide = index => {
		if (swiperRef.current) {
			swiperRef.current.swiper.slideTo(index)
		}
	}
	return (
		<Swiper
			ref={swiperRef}
			style={{
				backgroundImage: `url("/images/bg${activeSlideIndex + 1}.png")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
			className='bg-black'
			scrollbar={{ draggable: true }}
			onSlideChange={handleSlideChange}
		>
			<AnimatePresence mode='wait'>
				{data.map((item, index) => (
					<SwiperSlide key={index} className='h-[100%] px-5'>
						<motion.div
							className='text-white font-thin'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1 }}
						>
							<div>
								<span>
									0{index + 1}/0{data.length}
								</span>
							</div>
							<Image src={`/images/0${index + 1}.png`} width={200} className='w-full p-5' alt='bgImage' height={200} />
							<span>{item.title}</span>
							<ul className='flex mt-5 flex-col gap-4 uppercase'>
								{data.map((listItem, index) => (
									<li
										key={index}
										className={clsx(index === activeSlideIndex ? 'font-medium mx-6 list-disc' : '')}
										onClick={() => goToSlide(index)}
									>
										{listItem.paginateName}
									</li>
								))}
							</ul>
							<p className='mt-14 pb-10'>{item.desc}</p>
						</motion.div>
					</SwiperSlide>
				))}
			</AnimatePresence>
		</Swiper>
	)
}

export default Slider
