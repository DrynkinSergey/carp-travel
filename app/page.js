import FirstScreen from '@/components/FirstScreen'
import Header from '@/components/Header'
import OurGallary from '@/components/OurGallary'
import WhoWeAre from '@/components/WhoWeAre'

export default function Home() {
	return (
		<main className=''>
			<FirstScreen />
			<WhoWeAre />
			<OurGallary />
		</main>
	)
}
