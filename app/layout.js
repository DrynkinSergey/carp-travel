import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Carpaty Travel',
	description: 'Travel for tourist',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
				<footer className='bg-[#0a1003] text-sm font-light py-4 px-5  border-t-2 border-white/50 text-white/80 text-center'>
					<span>Created by Drynkin Sergey | {new Date().getFullYear()}</span>
				</footer>
			</body>
		</html>
	)
}
