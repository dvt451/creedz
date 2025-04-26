import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Fly } from '../../shared/icons/icons';
import { useAppContext } from '../../shared/hooks/ThemeContext';

export default function Pricing() {
	const [priceList, setPriceList] = useState(0);
	const [swiperInstance, setSwiperInstance] = useState(null);
	const _ = useAppContext()
	const [inView, setInView] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setInView(true)
		}, _.welcomingLodaer ? 1500 : 3500);
	}, [])

	const pricingList = [
		'Custom Package',
		'Design & Animation',
		'Design & Development',
		'Design & Marketing',
		'Super Package',
	];
	const pricingBody = [
		{
			title: 'Custom Package or Project-Based',
			text: 'To create the perfect custom package or project-based solution, we\'ll start by understanding your specific needs. Once you outline your requirements, we\'ll tailor a package and finalize a suitable monthly or project-based rate.',
			text_2: "Below are potential services that could be included based on your needs. Let's discuss the details and finalize the pricing.",
			serviceList: [
				[
					'Graphic Design',
					'UI/UX',
					'Application',
					'3D design',
					'Branding',
				],
				[
					'Logo design',
					'Banners',
					'Presentations',
					'Printing Files',
					'Social Media Design',
				],
				[
					'2D Animation',
					'3D Animation',
					'Video Editing',
					'Motion Graphics',
					'Logo Animation',
				],
				[
					'Webflow & Tilda',
					'Vue Js',
					'Angular Js',
					'Laravel, Yii2 etc',
					'React JS',
				],
				[
					'Strategies',
					'Content Marketing',
					'SM Marketing',
					'Webflow & Tilda',
					'Development',
				]
			]
		},
		{
			title: 'Monthly price - $4500',
			text: 'For this price, you receive a comprehensive, full-service package that includes expert design, as well as 3D and animation services, ensuring your project achieves exceptional results and maximum impact.',
			text_2: "An indispensable resource for everyone, empowering success by providing everything needed, one task at a time.",
			serviceList: [
				[
					'Graphic Design',
					'UI/UX',
					'Application',
					'3D design',
					'Branding',
				],
				[
					'Logo design',
					'Banners',
					'Presentations',
					'Printing Files',
					'Social Media Design',
				],
				[
					'2D Animation',
					'3D Animation',
					'Video Editing',
					'Motion Graphics',
					'Logo Animation',
				],
			]
		},
		{
			title: 'Monthly price - $6000',
			text: 'For this price, you receive a comprehensive, full-service package that includes expert design, seamless development, as well as 3D and animation services, ensuring your project achieves exceptional results and maximum impact.',
			text_2: "An indispensable resource for everyone, empowering success by providing everything needed, one task at a time.",
			serviceList: [
				[
					'Graphic Design',
					'UI/UX',
					'Application',
					'3D design',
					'Branding',
				],
				[
					'Logo design',
					'Banners',
					'Presentations',
					'Printing Files',
					'Social Media Design',
				],
				[
					'2D Animation',
					'3D Animation',
					'Video Editing',
					'Motion Graphics',
					'Logo Animation',
				],
				[
					'Webflow & Tilda',
					'Vue Js',
					'Angular Js',
					'Laravel, Yii2 etc',
					'React JS',
				],

			]
		},
		{
			title: 'Monthly price - $4000',
			text: 'For this price, you receive a comprehensive, full-service package that includes expert design, strategic marketing, as well as 3D and animation services, ensuring your project achieves exceptional results and maximum impact.',
			text_2: "An indispensable resource for everyone, empowering success by providing everything needed, one task at a time.",
			serviceList: [
				[
					'Graphic Design',
					'UI/UX',
					'Application',
					'3D design',
					'Branding',
				],
				[
					'Logo design',
					'Banners',
					'Presentations',
					'Printing Files',
					'Social Media Design',
				],
				[
					'2D Animation',
					'3D Animation',
					'Video Editing',
					'Motion Graphics',
					'Logo Animation',
				],
				[
					'Strategies',
					'Content Marketing',
					'SM Marketing',
					'Webflow & Tilda',
					'Development',
				]
			]
		},
		{
			title: 'Monthly price - $6800',
			text: 'For this price, you receive a comprehensive, full-service package that includes expert design, seamless development, strategic marketing, as well as 3D and animation services, ensuring your project achieves exceptional results and maximum impact.',
			text_2: "An indispensable resource for everyone, empowering success by providing everything needed, one task at a time.",
			serviceList: [
				[
					'Graphic Design',
					'UI/UX',
					'Application',
					'3D design',
					'Branding',
				],
				[
					'Logo design',
					'Banners',
					'Presentations',
					'Printing Files',
					'Social Media Design',
				],
				[
					'2D Animation',
					'3D Animation',
					'Video Editing',
					'Motion Graphics',
					'Logo Animation',
				],
				[
					'Webflow & Tilda',
					'Vue Js',
					'Angular Js',
					'Laravel, Yii2 etc',
					'React JS',
				],
				[
					'Strategies',
					'Content Marketing',
					'SM Marketing',
					'Webflow & Tilda',
					'Development',
				]
			]
		},
	];
	const priceListHandler = useCallback((index) => {
		setPriceList(index);
		if (swiperInstance) {
			swiperInstance.slideTo(index);
		}
	}, [swiperInstance]);

	const handleSlideChange = useCallback((swiper) => {
		setPriceList(swiper.activeIndex);
	}, []);

	return (
		<section className='pricing'>
			{inView && (<div id='pricing-container' className='pricing__container visible'>
				<h2 className="pricing__title">Pricing</h2>
				<div className='pricing__content'>
					<div className='pricing__row'>
						<div className="pricing__column pricing__column_left">
							<ul className="pricing__list">
								{pricingList.map((item, i) => (
									<li key={i} className='pricing__item'>
										<button
											className={priceList === i ? '_active' : ''}
											onClick={() => priceListHandler(i)}
										>
											{item}
										</button>
									</li>
								))}
							</ul>
						</div>
						<div className='pricing__column_block'>
							<Swiper
								modules={[Navigation, Parallax]}
								spaceBetween={160}
								speed={1200}
								allowTouchMove={false}
								direction='vertical'
								onSwiper={setSwiperInstance}
								onSlideChange={handleSlideChange}
							>
								{pricingBody.map((item, i) => (
									<SwiperSlide key={i}>
										<div className='pricing__column pricing__column_right'>
											<h3 data-swiper-parallax="-400" className="pricing__price">{item.title}</h3>
											<p data-swiper-parallax="-300" className="pricing__text">
												{item.text}<br /><br />{item.text_2}
											</p>
											<ul data-swiper-parallax="-200" className="pricing-services__list">
												{item.serviceList.map((columns, colIndex) => (
													<li key={colIndex} data-swiper-parallax={colIndex * -50} className="pricing-services__column">
														{columns.map((serviceItem, serviceIndex) => (
															<div key={serviceIndex} data-swiper-parallax={serviceIndex * -50} className='pricing-services__item'>
																{Fly}<span>{serviceItem}</span>
															</div>
														))}
													</li>
												))}
											</ul>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
					<div className="pricing__row">
						<div className='pricing__column pricing__column_left'>
							<p className="pricing__text">Your brand deserves the best.<br />Work with us and see the difference.</p>
						</div>
						<div className='pricing__column pricing__column_right'>
							<div className='pricing__buttons'>
								<Link to="/bookacall" className="pricing__reach pricing__button" >
									<span>Reach Out</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>)}
		</section>
	);
}
