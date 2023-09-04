import React from 'react'
import { Title } from './Title'
import ChooseUsForm from './ChooseUsForm'

const ChooseUs = () => {
	return (
		<>
			<section
				style={{ background: 'url("/images/chooseUsBg.png") no-repeat 20%/cover' }}
				className='px-5  py-10 flex text-white font-thin flex-col gap-6  bg-cover  '
			>
				<section className='grid md:grid-cols-[2fr,1fr] items-center'>
					<Title onePart='choose' secondPart='us' className='md:text-6xl' />
					<div className='flex justify-end px-2'>
						<p className='flex justify-right py-6 w-2/3 md:w-full md:text-sm'>
							Your chance to join our passionate team in Carpathian tourism. Seeking talented professionals to share our
							common mission.
						</p>
					</div>
				</section>

				<h2 className='uppercase font-extralight py-2 text-right md:text-left md:ml-20 mr-10 text-3xl'>Why us ?</h2>

				<div className='grid md:grid-cols-[1fr,2fr] gap-5 '>
					<ul className='grid gap-4 text-right w-2/3 md:w-full '>
						<li>
							<h3 className='font-normal text-sm mb-2'>Professional development</h3>
							<p>We offer growth opportunities and a creative environment to nurture your talents.</p>
						</li>
						<li>
							<h3 className='font-normal text-sm mb-2'>Teamwork</h3>
							<p>Join our close-knit family, where support and inspiration abound.</p>
						</li>
						<li>
							<h3 className='font-normal text-sm mb-2'>Stimulating work environment</h3>
							<p>Flexibility and remote options for a comfortable experience.</p>
						</li>
						<li>
							<h3 className='font-normal text-sm mb-2'>Exciting challenges</h3>
							<p>Unleash your potential through unforgettable projects showcasing Carpathian beauty.</p>
						</li>
					</ul>
					<section className='md:block hidden'>
						<div className='flex justify-end md:justify-start px-2'>
							<p className='flex  justify-right py-6 w-2/3 md:w-1/2 '>
								Don't miss your opportunity! Fill out the form right now and join our team!
							</p>
						</div>
						<ChooseUsForm />
					</section>
				</div>
			</section>
			<section
				style={{ background: 'url("/images/chooseUsBg.png") no-repeat 20%/cover' }}
				className='px-5 md:hidden py-10 flex text-white font-thin flex-col gap-6  bg-cover  '
			>
				<div className='flex justify-end px-2'>
					<p className='flex  py-6 w-2/3 '>
						Don't miss your opportunity! Fill out the form right now and join our team!
					</p>
				</div>
				<ChooseUsForm />
			</section>
		</>
	)
}

export default ChooseUs
