import Header from '@/components/Header'

export default function Home() {
	return (
		<main className='py-10 bg-no-repeat bg-hero  bg-cover bg-center  font-thin min-h-screen px-5 text-white'>
			<Header />
			<div className=' text-4xl mt-6 text-right'>
				<h2 className='tracking-[4px]'>
					<span className='font-bold text-white '>7</span>DAYS
				</h2>
				<h3 className='text-sm tracking-[9px]'>JOURNEY</h3>
			</div>
			<section className='uppercase text-4xl'>
				<div className='flex flex-col gap-4 my-8'>
					<h4 className='font-semibold'>Uncover</h4>
					<h4>Carpathian’s </h4>
					<h4>Secrets</h4>
				</div>
			</section>
			<p className='text-xs w-2/3 mb-8'>Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel</p>
			<p className='font-extralight tracking-wide'>
				We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting
				expeditions, and the best service!
			</p>
			<button className=' mt-10 uppercase font-bold text-2xl py-4 flex justify-center w-full bg-white/10 '>
				Join now
			</button>
		</main>
	)
}
