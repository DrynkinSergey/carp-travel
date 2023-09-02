'use client'
import React from 'react'

const ContactUsForm = () => {
	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<div className='flex flex-col gap-2'>
				<label>Full name</label>
				<input className='bg-white/[0.05] px-4' placeholder='John Smith' type='text' />
			</div>
			<div className='flex flex-col gap-2'>
				<label>E-mail</label>
				<input className='bg-white/[0.05] px-4' placeholder='johnsmith@email.com' type='email' />
			</div>
			<div className='flex flex-col gap-2'>
				<label>Message</label>
				<textarea className='h-[200px] resize-none bg-white/[0.05] px-4' type='email' />
			</div>
			<div className='flex justify-end'>
				<button className=' bg-none font-medium text-3xl uppercase  '>Send</button>
			</div>
		</form>
	)
}

export default ContactUsForm
