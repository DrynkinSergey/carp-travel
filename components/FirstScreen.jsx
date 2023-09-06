'use client'

import React from 'react'
import Header from './Header'
import { Link } from 'react-scroll'
const FirstScreen = () => {
	return (
		<section className='py-10 lg:py-0 px-5 lg:min-h-screen lg:grid lg:px-14 bg-no-repeat bg-hero grid-rows-[10vh]  bg-cover bg-center  font-thin  text-white'>
			<Header />
			{/* Tablet */}
			<section className='hidden md:grid md:grid-cols-2 lg:pt-14 lg:items-center  lg:grid-cols-[3fr,1fr] md:gap-10 md:mt-10  '>
				<section className='uppercase md:flex md:flex-col md:gap-20 text-4xl md:text-5xl'>
					<div className='flex flex-col gap-4 my-8 lg:text-7xl'>
						<h4 className='font-semibold'>Uncover</h4>
						<h4>Carpathian’s </h4>
						<h4>Secrets</h4>
					</div>
					<p className='text-xs w-2/3 lg:w-full  mb-8'>
						Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
					</p>
				</section>
				<div className=' mt-6 '>
					<div className='text-6xl mb-12'>
						<h2 className='tracking-[18px]'>
							<span className='font-bold text-white '>7</span>DAYS
						</h2>
						<h3 className='text-3xl tracking-[19px]'>JOURNEY</h3>
					</div>
					<p className='font-extralight tracking-wide lg:mt-[100px] '>
						We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views,
						exciting expeditions, and the best service!
					</p>
					<Link
						activeClass='active'
						to='section1'
						spy={true}
						smooth={true}
						offset={0}
						duration={1500}
						className=' mt-10 uppercase font-bold text-2xl py-4 flex justify-center w-full bg-white/10 '
					>
						Join now
					</Link>
				</div>
			</section>
			{/* Mobile */}

			<section className='md:hidden block'>
				<div className=' text-4xl mt-6 text-right'>
					<h2 className='tracking-[4px]'>
						<span className='font-bold text-white '>7</span>DAYS
					</h2>
					<h3 className='text-sm tracking-[9px]'>JOURNEY</h3>
				</div>
				<section className='uppercase md:flex md:flex-col md:gap-20 text-4xl md:text-6xl'>
					<div className='flex flex-col gap-4 my-8'>
						<h4 className='font-semibold'>Uncover</h4>
						<h4>Carpathian’s </h4>
						<h4>Secrets</h4>
					</div>
					<p className='text-xs w-2/3 md:w-1/3 mb-8'>
						Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
					</p>
				</section>

				<p className='font-extralight tracking-wide'>
					We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views,
					exciting expeditions, and the best service!
				</p>
				<Link
					activeClass='active'
					to='section1'
					spy={true}
					smooth={true}
					offset={0}
					duration={1500}
					className=' mt-10 uppercase font-bold text-2xl py-4 flex justify-center w-full bg-white/10 '
				>
					Join now
				</Link>
			</section>
		</section>
	)
}

export default FirstScreen
