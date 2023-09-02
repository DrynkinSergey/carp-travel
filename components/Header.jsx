import Image from 'next/image'
import logo from '../public/Logo.svg'
export default function Header() {
	return (
		<div className='text-white flex justify-between   items-center'>
			<Image src={logo} height={40} alt='Picture of the author' />
			<h1 className='uppercase font-medium tracking-[1px]'>Menu</h1>
		</div>
	)
}
