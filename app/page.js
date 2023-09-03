import ContactUs from '@/components/ContactUs'
import FirstScreen from '@/components/FirstScreen'
import Header from '@/components/Header'
import OurGallary from '@/components/OurGallary'
import Slider from '@/components/Slider'
import WeOffer from '@/components/WeOffer'
import WhoWeAre from '@/components/WhoWeAre'

export default function Home() {
	return (
		<main className=''>
			<FirstScreen />
			<WhoWeAre />
			<OurGallary />
			<ContactUs />
			<WeOffer />
		</main>
	)
}
