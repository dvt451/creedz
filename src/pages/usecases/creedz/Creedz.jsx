import Links from './Links'
import Footer from '../../../widgets/footer/Footer'
import CustomScrollStyles from '../../../features/CustomScrollStyles'
import TopButton from '../../../widgets/buttons/TopButton'
import Letstalk from '../../..//pages/home/Letstalk/Letstalk'
import UsecaseGeneral from '../UsecaseGeneral'

export default function Creedz() {
	const page = 'creedz-html'
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
								<img src="/usecases/creedz/img1.webp" alt="poster" />
							</div>
							<h1 className='usecase__main-title'>Creedz is your all-in-one design and development solution</h1>
							<h2 className="usecase__title">Project Description</h2>
							<p className="usecase__text">
								Their mission is simple yet profound: to transform ideas into tangible experiences that inspire, engage, and empower. With a team fueled by curiosity and driven by excellence, Creedz navigates the intricate landscapes of design and development, weaving together aesthetics and technology seamlessly.
								<br /><br />
								Crafted the website design, logo, and branding for Creedz, a comprehensive design and development agency.
								The branding emphasizes its innovative spirit with a sleek, modern logo and a cohesive visual identity. The website design provides a seamless user experience, highlighting Creedz&apos;s dedication to excellence and its ability to offer complete solutions for transforming ideas into impactful digital products.</p>
							<div className="usecase__row">
								<div className="usecase__col">
									<h3>Year</h3>
									<p>2024</p>
								</div>
								<div className="usecase__col">
									<h3>Industry</h3>
									<p>Design</p>
								</div>
								<div className="usecase__col">
									<h3>Project direction:</h3>
									<ul>
										<li>Logo</li>
										<li>Brand Identity</li>
										<li>3D</li>
									</ul>
								</div>
								<div className="usecase__col">
									<h3>Website:</h3>
									<p>www.creedz.net</p>
								</div>
							</div>
						</div>
						<div className="usecase__posters">
							<img src="/usecases/creedz/img2.webp" alt="poster" />
							<img src="/usecases/creedz/img3.webp" alt="poster" />
							<img src="/usecases/creedz/img21.webp" alt="poster" />
							<img src="/usecases/creedz/img4.webp" alt="poster" />
							<img src="/usecases/creedz/img5.webp" alt="poster" />
							<img src="/usecases/creedz/img6.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/creedz/img7.webp" alt="poster" />
								<video width={1756} height={1011} loop muted autoPlay playsInline src={'/usecases/creedz/video1.webm'}></video>
							</div>
							<img src="/usecases/creedz/img8.webp" alt="poster" />
							<video width={1756} height={1011} loop muted autoPlay playsInline src={'/usecases/creedz/video2.webm'}></video>
							<div className='usecase__image-block'>
								<img src="/usecases/creedz/img9.webp" alt="poster" />
								<img src="/usecases/creedz/img10.webp" alt="poster" />
							</div>
							<img src="/usecases/creedz/img11.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/creedz/img12.webp" alt="poster" />
								<img src="/usecases/creedz/img13.webp" alt="poster" />
							</div>
							<video width={1756} height={1011} loop muted autoPlay playsInline src={'/usecases/creedz/video3.webm'}></video>
							<img src="/usecases/creedz/img20.webp" alt="poster" />
							<video width={1756} height={1011} loop muted autoPlay playsInline src={'/usecases/creedz/video4.webm'}></video>
							<img src="/usecases/creedz/img15.webp" alt="poster" />
							<video width={1756} height={1011} loop muted autoPlay playsInline src={'/usecases/creedz/video5.webm'}></video>
							<div className='usecase__image-block'>
								<img src="/usecases/creedz/img17.webp" alt="poster" />
								<img src="/usecases/creedz/img18.webp" alt="poster" />
							</div>
							<img src="/usecases/creedz/img19.webp" alt="poster" />
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
