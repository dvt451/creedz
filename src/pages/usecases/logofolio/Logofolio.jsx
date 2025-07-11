import Links from './Links'
import Footer from '../../../widgets/footer/Footer'
import CustomScrollStyles from '../../../features/CustomScrollStyles'
import TopButton from '../../../widgets/buttons/TopButton'
import Letstalk from '../../..//pages/home/Letstalk/Letstalk'
import UsecaseGeneral from '../UsecaseGeneral'

export default function Logofolio() {
	const page = 'logofolio-html'
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
								<img src="/usecases/logofolio/img1.webp" alt="poster" />
							</div>
							<h1 className='usecase__main-title'>Creedz Logofolio: An Inspiring Showcase of Distinctive Logos</h1>
							<h2 className="usecase__title">Project Description</h2>
							<p className="usecase__text">
								Welcome to our Logofolio at Creedz, where creativity meets visual identity. This curated collection features a selection of logos crafted by our talented team, each designed to encapsulate the essence of the brands they represent.
								<br /><br />
								At Creedz, we believe that a logo is more than just a visual mark; it’s a powerful tool for storytelling and brand recognition. Our approach combines innovative design principles with a deep understanding of our clients’ values and missions, ensuring each logo resonates deeply with its target audience. Thank you for visiting our Logofolio, and we hope you enjoy this glimpse into our design journey!</p>
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
									<p>Logofolio</p>
								</div>
								<div className="usecase__col">
									<h3>Website:</h3>
									<p>Creedz.net</p>
								</div>
							</div>
						</div>
						<div className="usecase__posters">
							<img src="/usecases/logofolio/img2.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img3.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/crandel.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img4.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img5.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/aac.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img6.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img7.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/revel.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img8.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img9.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/codelab.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img10.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img11.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/skrex.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img12.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img13.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/golf.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img14.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img15.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/creedz.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img16.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img17.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/house.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img18.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img19.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/cadence.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img20.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img21.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/crandell 2.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img22.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img23.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/lash lami.gif" alt="poster" />
							</div>
							<img src="/usecases/logofolio/img24.webp" alt="poster" />
							<div className='usecase__image-block'>
								<img src="/usecases/logofolio/img25.webp" alt="poster" />
								<img src="/usecases/logofolio/gifs/octo.gif" alt="poster" />
							</div>
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
