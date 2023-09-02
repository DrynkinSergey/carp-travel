import React from 'react'
import { Title } from './Title'

const ContactUs = () => {
	return (
		<section
			id='section1'
			style={{ background: 'url("/contactUsBg.png") no-repeat 20%/cover' }}
			className='px-5 py-10 flex text-white font-thin flex-col gap-6  bg-cover  '
		>
			<Title onePart='contact' secondPart='us' />
			<div className='flex gap-2 w-full  justify-end '>
				<div className='text-sm font-light'>
					<p>+38 (098) 12 34 567</p>
					<p>+38 (073) 12 34 567</p>
				</div>
				<p className='font-thin'>Phone number</p>
			</div>
			<div className='flex gap-2 w-full  '>
				<div className='text-sm font-light'>
					<p>support@carptravel.com</p>
				</div>
				<p className='font-thin'>E-mail</p>
			</div>
			<div className='flex gap-4 w-full  justify-end '>
				<p className='font-thin'>Follow us</p>
				<div>
					<p className='text-sm font-light'>facebook</p>
					<p className='text-sm font-light'>instagram</p>
					<p className='text-sm font-light'>youtube</p>
					<p className='text-sm font-light'>tiktok</p>
				</div>
			</div>
		</section>
	)
}

export default ContactUs
