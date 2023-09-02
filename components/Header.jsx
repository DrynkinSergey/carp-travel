import Image from 'next/image'
import logo from '../public/Logo.svg'
export default function Header() {
	return (
		<>
			<div className='text-white flex md:hidden justify-between   items-center'>
				<Image src={logo} height={40} alt='Picture of the author' />
				<h1 className='uppercase font-medium tracking-[1px]'>Menu</h1>
			</div>
			<div className='hidden md:flex text-white  justify-between   items-center'>
				<Image src={logo} height={40} alt='Picture of the author' />
				<nav className='uppercase font-normal tracking-[1px]'>
					<ul className='flex gap-6 text-sm'>
						<li>About</li>
						<li>Services</li>
						<li>Career</li>
						<li>Gallery</li>
						<li>Contacts</li>
					</ul>
				</nav>
			</div>
		</>
	)
}
