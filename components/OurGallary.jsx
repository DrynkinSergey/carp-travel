'use client'
import Image from 'next/image'
import React from 'react'
import { Title } from './Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const OurGallary = () => {
	return (
		<section
			style={{ background: 'url("/background_gallary.png") no-repeat 20%/cover' }}
			className='px-5  py-10 flex text-white font-thin flex-col gap-6 items-center  bg-cover  '
		>
			<Title onePart='our' secondPart='GALLERY' />
			<section className='md:hidden'>
				<Image src='/img1.png' alt='img1' width={300} height={100} />
				<Image src='/img2.png' alt='img2' width={300} height={100} />
				<Image src='/img3.png' alt='img3' width={300} height={100} />
			</section>

			<div className='w-full overflow-hidden'>
				<Swiper slidesPerView={3} spaceBetween={10} loop={true}>
					<SwiperSlide>
						<Image src='/img1.png' alt='img1' width={300} height={100} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src='/img2.png' alt='img2' width={300} height={100} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src='/img3.png' alt='img3' width={300} height={100} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src='/img1.png' alt='img1' width={300} height={100} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src='/img2.png' alt='img2' width={300} height={100} />
					</SwiperSlide>
					<SwiperSlide>
						<Image src='/img3.png' alt='img3' width={300} height={100} />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default OurGallary
