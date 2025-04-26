import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../shared/hooks/ThemeContext';
import { ArrowRight, ArrowLeft } from '../../shared/icons/icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax } from 'swiper/modules';

export default function Portfolio() {
	const { setProjectHover, setHoverAnyLink } = useAppContext();
	const [inView, setInView] = useState(false)
	const _ = useAppContext()
	useEffect(() => {
		setTimeout(() => {
			setInView(true)
		}, _.welcomingLodaer ? 1500 : 3000);
	}, [])

	const posterHovered = () => {
		setProjectHover(true);
	};

	const posterDisHovered = () => {
		setProjectHover(false);
	};

	const projects = [

		{
			title: 'Creedz',
			text: "Creedz, a design and development agency, transforms ideas into stunning digital experiences. The talented team creates sleek websites and powerful apps with meticulous attention to detail. Known for capturing the essence of brands, has earned a reputation for quality and creativity. Today, they continue to innovate and push the boundaries of design and development.",
			labelList: ['Website', 'Development', 'Branding'],

			video: '/usecases/creedz/video3.webm',
			link: '/usecases/creedz',
			images: [
				{
					picture: '/usecases/creedz/img1.webp',
				},
				{
					video: '/usecases/creedz/video4.webm',
				},
				{
					picture: '/usecases/creedz/img20.webp',
				},
				{
					picture: '/usecases/creedz/img3.webp',
				},
			],
		},
		{
			title: 'Apple x Nike',
			text: "This project embarked on a comprehensive exploration of the integration between Apple’s sleek design ethos and Nike’s dynamic, performance-driven branding. Understanding the unique strengths and target audiences of both Apple and Nike informed our approach.",
			labelList: ['3D design', 'Character design', 'Ai'],

			poster: '/usecases/applexnike/img1.webp',
			link: '/usecases/applexnike',
			images: [
				{
					picture: '/usecases/applexnike/img4.webp',
				},
				{
					picture: '/usecases/applexnike/img11.webp',
				},
				{
					picture: '/usecases/applexnike/img8.webp',
				},
				{
					picture: '/usecases/applexnike/img13.webp',
				},
			],
		},
		{
			title: 'Skrex',
			text: "The Skrex branding journey began with an in-depth exploration of the company's ethos, values, and aspirations. Extensive market research and competitor analysis provided valuable insights into the ever-evolving world of blockchain technology and decentralized solutions.",
			labelList: ['Branding', 'Illustration', 'Crypto'],

			video: '/usecases/skrex/video2.webm',
			link: '/usecases/skrex',
			images: [
				{
					picture: '/projects/skrex/img2.webp',
				},
				{
					picture: '/projects/skrex/img3.webp',
				},
				{
					picture: '/projects/skrex/img4.webp',
				},
				{
					picture: '/projects/skrex/img5.webp',
				},
			],
		},
		{
			title: 'Cadence',
			text: "In a bustling city known for innovation, Cadence Marketing was born in a cozy loft overlooking the skyline. Here, a team of creative minds huddled together, brainstorming strategies that resonated with precision. They crafted campaigns like composers, each note resonating with a client's unique voice.",
			labelList: ['Branding', 'Social media posts'],
			poster: '/projects/cadence/img1.webp',
			link: '/usecases/cadence',
			images: [
				{
					picture: '/projects/cadence/img2.webp',
				},
				{
					picture: '/projects/cadence/img3.webp',
				},
				{
					picture: '/projects/cadence/img4.webp',
				},
				{
					picture: '/projects/cadence/img5.webp',
				},
			],
		},
		{
			title: 'Logofolio',
			text: "Welcome to our Logofolio at Creedz, where creativity meets visual identity. This curated collection features a selection of logos crafted by our talented team, each designed to encapsulate the essence of the brands they represent.",
			labelList: ['3D design', 'Character design', 'AI'],

			poster: '/projects/logofolio/img1.webp',
			link: '/usecases/logofolio',
			images: [
				{
					picture: '/projects/logofolio/img2.webp',
				},
				{
					picture: '/projects/logofolio/img3.webp',
				},
				{
					picture: '/projects/logofolio/img4.webp',
				},
				{
					picture: '/projects/logofolio/img5.webp',
				},
			],
		},
		{
			title: 'Codelab',
			text: "The CodeLab branding journey began with an in-depth exploration of the company's ethos, values, and aspirations. Extensive market research and competitor analysis provided valuable insights into the ever-evolving world of software development and technology solutions.",
			labelList: ['Website', 'Branding', 'Social media'],
			poster: '/projects/codelab/img1.webp',
			link: '/usecases/codelab',
			images: [
				{
					picture: '/projects/codelab/img2.webp',
				},
				{
					picture: '/projects/codelab/img3.webp',
				},
				{
					picture: '/projects/codelab/img4.webp',
				},
				{
					picture: '/projects/codelab/img5.webp',
				},
			],
		},
	]
	return (
		<section id='portfolio' className={`portfolio ${inView ? 'visible' : 'hidden'}`}>
			<div className="portfolio__container">
				{inView && (
					<Swiper
						modules={[Navigation, Parallax]}
						allowTouchMove={true}
						spaceBetween={50}
						parallax={true}
						speed={1200}
						navigation={{
							nextEl: '.portfolio__next',
							prevEl: '.portfolio__prev'
						}}
					>
						{projects.map((item, i) => (
							<SwiperSlide key={i}>
								<div className='portfolio__content'>
									<div className='portfolio__top'>
										<div className="portfolio__column portfolio-info">
											<div className='portfolio-info__content'>
												<h2 data-swiper-parallax="-200" className="portfolio__title">{item.title}</h2>
												<p data-swiper-parallax="-300" className="portfolio__text">{item.text}</p>
												<ul className="portfolio__labels">
													{item.labelList.map((label, i) => (
														<li data-swiper-parallax="-400" key={i} className="portfolio__label">{label}</li>
													))}
												</ul>
												<div data-swiper-parallax="-500" className="portfolio__bottom">
													<Link
														onMouseEnter={() => setHoverAnyLink(true)}
														onMouseLeave={() => setHoverAnyLink(false)}
														to={item.link}
														onClick={() => setHoverAnyLink(false)}
														className="portfolio__view button"
													>
														View Project
													</Link>
													<div className='portfolio__buttons'>
														<button
															onMouseEnter={() => i !== 0 ? setHoverAnyLink(true) : setHoverAnyLink(false)}
															onMouseLeave={() => setHoverAnyLink(false)}
															className={`${i !== 0 ? 'portfolio__prev' : 'disabled'} portfolio__button`}
														>
															<span>Previous Project</span>
															<i>{ArrowLeft}</i>
														</button>
														<button
															onMouseEnter={() => i !== projects.length - 1 ? setHoverAnyLink(true) : setHoverAnyLink(false)}
															onMouseLeave={() => i !== projects.length - 1 ? setHoverAnyLink(false) : setHoverAnyLink(true)}
															className={`${i !== projects.length - 1 ? 'portfolio__next' : 'disabled'} portfolio__button`}
														>
															<span>Next Project</span>
															<i>{ArrowRight}</i>
														</button>
													</div>
												</div>
											</div>
										</div>
										<div data-swiper-parallax="-200" className="portfolio__row portfolio-images md2">
											{item.images.map((itm, i) => {
												return itm.video ? (
													<video width={430} height={250} key={i} loop muted autoPlay playsInline src={itm.video} />
												) : (
													<img width="500" height="300" key={i} src={itm.picture} alt="image" />
												);
											})}
										</div>
										<Link
											to={item.link}
											className="portfolio__column portfolio-poster"
											onMouseEnter={posterHovered}
											onClick={() => {
												posterDisHovered();
												setTimeout(() => {
													const element = document.querySelector('.usecase');
													element?.scrollIntoView();
												}, 300);
											}}
											onMouseLeave={posterDisHovered}
										>
											<div data-swiper-parallax="-400" className="portfolio__image -ibg">
												{item.posterLabels ? (
													<ul className="portfolio__labels">
														{item.posterLabels.map((text, i) => (
															<li key={i} className='portfolio__label'>{text}</li>
														))}
													</ul>
												) : null}
												{item.video ? (
													<video width={1000} height={500} loop muted autoPlay playsInline src={item.video} />
												) : (
													<img width="500" height="300" src={item.poster} alt="poster" />
												)}
											</div>
										</Link>
									</div>
									<div data-swiper-parallax="-200" className="portfolio__row portfolio-images md1">
										{item.images.map((itm, i) => {
											return itm.video ? (
												<video width={430} height={250} key={i} loop muted autoPlay playsInline src={itm.video} />
											) : (
												<img width="500" height="300" key={i} src={itm.picture} alt="image" />
											);
										})}
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</div>
		</section>
	);
}
