import clsx from 'clsx'
import React from 'react'

export const Title = ({ onePart, secondPart, className }) => {
	return (
		<h1 className={clsx('uppercase text-4xl', className && className)}>
			<span>{onePart}</span> <span className='font-bold'>{secondPart}</span>
		</h1>
	)
}
