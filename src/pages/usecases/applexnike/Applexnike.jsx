import Links from './Links'
import Footer from '../../../widgets/footer/Footer'
import CustomScrollStyles from '../../../features/CustomScrollStyles'
import TopButton from '../../../widgets/buttons/TopButton'
import Letstalk from '../../..//pages/home/Letstalk/Letstalk'
import UsecaseGeneral from '../UsecaseGeneral'

export default function Applexnike() {
	const page = 'applexnike-html'
	return (
		<>
			<CustomScrollStyles className={page} />
			<div className='wrapper'>
				<UsecaseGeneral />
				<main className='usecase'>
					<TopButton />
					<div className="usecase__container">
						<div className='usecase__top'>
							<div className="usecase__hero">
								<img src="/usecases/applexnike/img1.webp" alt="poster" />
							</div>
							<h1 className='usecase__main-title'>Apple x Nike: 3D Character Innovation for VR</h1>
							<h2 className="usecase__title">Project Description</h2>
							<p className="usecase__text">
								This project embarked on a comprehensive exploration of the integration between Apple&apos;s sleek design ethos and Nike&apos;s dynamic, performance-driven branding. Through detailed market research and analysis of both companies&apos; VR strategies, we gained critical insights into the fusion of these distinct brand identities within the virtual reality space. Understanding the unique strengths and target audiences of both Apple and Nike informed our approach.
								<br /><br />
								With a vision to merge Apple&apos;s sophistication and Nike&apos;s energy, the project developed a 3D character that embodies both brands. The goal was to create an innovative VR experience that blends cutting-edge design and performance with strong brand identity.
							</p>
							<div className="usecase__row">
								<div className="usecase__col">
									<h3>Year</h3>
									<p>2024</p>
								</div>
								<div className="usecase__col">
									<h3>Industry</h3>
									<p>Marketing</p>
								</div>
								<div className="usecase__col">
									<h3>Project direction:</h3>
									<ul>
										<li>Logo</li>
										<li>Brand Identity</li>
										<li>3D</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="usecase__posters">
							<div className='usecase__image-block'>
								<img src="/usecases/applexnike/img2.webp" alt="poster" />
								<img src="/usecases/applexnike/img3.webp" alt="poster" />
							</div>
							<img src="/usecases/applexnike/img4.webp" alt="poster" />
							<img className='meets' src="/usecases/applexnike/img5.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/applexnike/img6.webp" alt="poster" />
								<img src="/usecases/applexnike/img7.webp" alt="poster" />
							</div>
							<img src="/usecases/applexnike/img8.webp" alt="poster" />
							<img className='meets' src="/usecases/applexnike/img9.webp" alt="poster" />
							<video width={1756} height={1011} loop muted autoPlay playsInline src="/usecases/applexnike/video1.webm"></video>
							<img src="/usecases/applexnike/img12.webp" alt="poster" />
							<img src="/usecases/applexnike/img13.webp" alt="poster" />
							<img src="/usecases/applexnike/img14.webp" alt="poster" />
							<img className='meets' src="/usecases/applexnike/img15.webp" alt="poster" />
							<img src="/usecases/applexnike/img16.webp" alt="poster" />
						</div>
						<Links />
					</div>
					<Letstalk />
				</main>
				<Footer />
			</div>
		</>
	)
}
