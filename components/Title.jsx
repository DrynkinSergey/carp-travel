import React from 'react'

export const Title = ({ onePart, secondPart }) => {
	return (
		<h1 className='uppercase text-4xl'>
			<span>{onePart}</span> <span className='font-bold'>{secondPart}</span>
		</h1>
	)
}
