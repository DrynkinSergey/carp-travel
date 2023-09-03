'use client'
import { useForm } from 'react-hook-form'

const ChooseUsForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = e => {
		console.log('success')
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
				<label>Position</label>
				<input
					{...register('position', { required: true, minLength: 2 })}
					className='bg-white/[0.05] px-4'
					placeholder='Movie maker'
				/>
				{errors.position && <div className='text-red-400 font-light text-right'>x Invalid field</div>}
			</div>

			<div className='flex flex-col gap-2'>
				<label>Phone</label>
				<input
					{...register('phone', { required: true })}
					className='bg-white/[0.05] px-4'
					placeholder='+38 (097) 12 34 567'
				/>
				{errors.position && <div className='text-red-400 font-light text-right'>x Invalid field</div>}
			</div>

			<div className='flex flex-col gap-2'>
				<label>Message</label>
				<textarea className='h-[200px] resize-none bg-white/[0.05] px-4' type='email' />
			</div>

			<div className='flex items-center gap-4  '>
				<div className='border-[1px] border-white px-[2px] flex items-center justify-center py-[1px] w-8 h-6 mx-2'>
					<input type='checkbox' className='w-full h-full' />
				</div>
				<label className='text-xs'>I confirm my consent to the processing of personal data.</label>
			</div>
			<div className='flex justify-end'>
				<button className=' bg-none font-medium text-3xl uppercase  '>Send</button>
			</div>
		</form>
	)
}

export default ChooseUsForm
