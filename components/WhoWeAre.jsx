import React from 'react'
import { Title } from './Title'

const WhoWeAre = () => {
	return (
		<>
			<section
				style={{ background: 'url("/background_two.png") no-repeat 20%/cover' }}
				className='md:hidden px-5 py-10 flex text-white font-thin flex-col gap-6  bg-cover  '
			>
				<Title onePart='WHO' secondPart='WE ARE' />
				<p className='w-3/4'>
					<span className='font-light'>a team of enthusiasts</span> who are fully committed to the mission of creating
					unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is not just to
					show you the natural wonders of the mountains, but to provide you with a deep immersion in their magical
					atmosphere.
				</p>
				<p className='w-3/4'>
					<span className='font-light'>We believe</span> that nature has the power to inspire, strengthen character and
					provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching your
					spiritual world and creating unforgettable memories.
				</p>

				<div className='flex flex-col text-right'>
					<p className='uppercase font-light pr-10'>From vacationers </p>
					<p className='uppercase font-light'>to active travelers </p>
					<p className='text-base'>we have a tour for everyone. </p>
				</div>

				<p className='w-full'>
					<span className='font-light'>We use methods</span> that are time-tested and proven. Our expert guides with
					in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains.
				</p>
			</section>

			{/* Tablet */}
			<section
				style={{ background: 'url("/background_two.png") no-repeat 20%/cover' }}
				className=' md:grid lg:px-14 lg:min-h-screen px-5 py-10 hidden text-white font-thin  gap-6  bg-cover  '
			>
				<div className='grid-cols-[3fr,2fr] lg:grid-cols-2  justify-center grid mb-10 '>
					<div className='flex flex-col  justify-between '>
						<Title onePart='WHO' secondPart='WE ARE' className='text-6xl ' />
						<div className='grid  '>
							<p className='uppercase font-light '>From vacationers </p>
							<p className='uppercase font-light pl-10'>to active travelers </p>
							<p className='text-base'>we have a tour for everyone. </p>
						</div>
					</div>
					<div className='lg:w-1/2 lg:grid gap-10'>
						<p>
							<span className='font-light'>a team of enthusiasts</span> who are fully committed to the mission of
							creating unforgettable and extraordinary trips to the most beautiful parts of the Carpathians. Our goal is
							not just to show you the natural wonders of the mountains, but to provide you with a deep immersion in
							their magical atmosphere.
						</p>
						<p className='w-3/4'>
							<span className='font-light'>We believe</span> that nature has the power to inspire, strengthen character
							and provide new perspectives. Therefore, each of our tours is aimed at unlocking your potential, enriching
							your spiritual world and creating unforgettable memories.
						</p>
					</div>
				</div>
				<div className='flex justify-end'>
					<p className='w-2/3'>
						<span className='font-light'>We use methods</span> that are time-tested and proven. Our expert guides with
						in-depth knowledge of the Carpathian landscapes lead you safely through the mysteries of these mountains.
					</p>
				</div>
			</section>
		</>
	)
}

export default WhoWeAre
