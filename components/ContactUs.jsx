import React from 'react'
import { Title } from './Title'
import ContactUsForm from './ContactUsForm'

const ContactUs = () => {
	return (
		<section
			id='section1'
			style={{ background: 'url("/images/bg_end.avif") no-repeat center/cover' }}
			className='px-5 py-10 flex text-white font-thin flex-col lg:px-14 lg:py-20 gap-6 md:text-xl bg-cover  '
		>
			<Title onePart='contact' secondPart='us' className='md:text-6xl lg:mb-10' />
			<div className='grid gap-6 md:grid-cols-2 md:text-2xl'>
				<div className='grid  grid-cols-[2fr,1fr] gap-4  text-sm md:text-xl  justify-center  '>
					<div className=' text-right font-light'>
						<p>+38 (098) 12 34 567</p>
						<p>+38 (073) 12 34 567</p>
					</div>
					<p className='font-thin text-xs md:text-lg'>Phone number</p>
				</div>
				<div className='grid grid-cols-[2fr,1fr] gap-4 w-full  '>
					<div className='text-sm md:text-xl font-light text-right'>
						<p>support@carptravel.com</p>
					</div>
					<p className='font-thin text-xs md:text-lg'>E-mail</p>
				</div>
			</div>

			<div className='grid grid-cols-[2fr,1fr] gap-4 w-full justify-end '>
				<p className='font-thin text-right'>Follow us</p>
				<div className='text-sm md:text-xl font-light'>
					<p>facebook</p>
					<p>instagram</p>
					<p>youtube</p>
					<p>tiktok</p>
				</div>
			</div>
			<ContactUsForm />
		</section>
	)
}

export default ContactUs
