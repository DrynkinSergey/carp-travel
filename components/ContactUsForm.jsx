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
		e.preventDefault()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
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
