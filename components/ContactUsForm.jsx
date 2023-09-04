'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
const ContactUsForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = e => {
		console.log('success')
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid md:grid-cols-2 gap-4'>
			<div>
				<div className='flex flex-col gap-2'>
					<label>Full name</label>
					<input
						{...register('name', { required: true, minLength: 4 })}
						className='bg-white/[0.05] px-4'
						placeholder='John Smith'
					/>
					{errors.name && <div className='text-red-400 font-light text-right'>x Incorrect name</div>}
				</div>
				<div className='flex flex-col gap-2'>
					<label>E-mail</label>
					<input
						{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						className='bg-white/[0.05] px-4'
						placeholder='johnsmith@email.com'
					/>
					{errors.email && <div className='text-red-400 font-light text-right'>x Invalid email</div>}
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<label>Message</label>
				<textarea className='h-[200px] resize-none bg-white/[0.05] px-4' type='email' />
				<div className='flex justify-end'>
					<button className=' bg-none font-medium text-3xl uppercase  '>Send</button>
				</div>
			</div>
		</form>
	)
}

export default ContactUsForm
