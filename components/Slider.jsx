'use client'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
// components/Slider.js
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import clsx from 'clsx'
import { Title } from './Title'

const data = [
	{
		imgMobile: '/images/01.png',
		imgTablet: '/images/gallery01_tablet.jpg',
		title: 'Feel the adrenaline rush',
		desc: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
		paginateName: 'ATVs Traveling',
	},
	{
		imgMobile: '/images/02.png',
		imgTablet: '/images/gallery02_tablet.png',
		title: 'Destroy your limitations',
		desc: 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
		paginateName: 'Rock climbing',
	},
	{
		imgMobile: '/images/03.png',
		imgTablet: '/images/gallery03_tablet.png',
		title: 'Get Inspired',
		desc: 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
		paginateName: 'Hot air ballooning',
	},
	{
		imgMobile: '/images/04.png',
		imgTablet: '/images/gallery04_tablet.png',
		title: 'Overcome your fears',
		desc: 'Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a birds eye view forever. ',
		paginateName: 'Skydiving',
	},
	{
		imgMobile: '/images/05.png',
		imgTablet: '/images/gallery05_tablet.png',
		title: 'Trust the flow',
		desc: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
		paginateName: 'Rafting',
	},
]

function Slider() {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0)

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
				backgroundImage: `url("/images/bg_gallary_${activeSlideIndex + 1}.avif ")`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
			className={`bg-black bg-cover bg-opacity-10 bg-fixed`}
			scrollbar={{ draggable: true }}
			onSlideChange={handleSlideChange}
		>
			<div className='inset-0 absolute bg-opacity-50 bg-black'></div>
			<AnimatePresence mode='wait'>
				{data.map((item, index) => (
					<SwiperSlide key={index} className=' md:pt-20 lg:pb-10 pt-8 px-5 '>
						<motion.div
							className='text-white lg:min-h-screen font-thin'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 1 }}
						>
							<div className='flex  justify-between md:px-10 '>
								<Title onePart='we' secondPart='offer' className='text-2xl md:text-6xl md:pb-8 lg:text-7xl' />
								<span className='md:text-6xl text-2xl'>
									0{index + 1}/<span className='text-white/20'>0{data.length}</span>
								</span>
							</div>
							<div className='grid md:grid-cols-[2fr,1fr] lg:grid-cols-2 '>
								<Image
									src={item.imgMobile}
									width={200}
									className='md:hidden w-full aspect-[8/6] p-5'
									alt='bgImage'
									height={200}
								/>
								<Image
									src={item.imgTablet}
									width={200}
									className='md:block hidden w-full aspect-[8/6] lg:aspect-[3/2] p-5'
									alt='bgImage'
									height={200}
								/>

								<div>
									<span className='md:text-sm lg:float-right lg:pr-10 text-white/90'>{item.title}</span>
									<ul className='flex mt-5 flex-col gap-4 uppercase'>
										{data.map((listItem, index) => (
											<li
												key={index}
												className={clsx(
													'cursor-pointer',
													index === activeSlideIndex ? 'font-medium mx-6 list-disc' : ''
												)}
												onClick={() => goToSlide(index)}
											>
												{listItem.paginateName}
											</li>
										))}
									</ul>
									<p className='mt-14 md:mt-4 text-sm pb-10 lg:pt-14 lg:w-1/2 grid  float-right'>{item.desc}</p>
								</div>
							</div>
						</motion.div>
					</SwiperSlide>
				))}
			</AnimatePresence>
		</Swiper>
	)
}

export default Slider
