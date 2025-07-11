import React, { lazy, Suspense } from 'react';
import CustomScrollStyles from '../../features/CustomScrollStyles'
import Progressbar from '../../widgets/Progressbar'
import Preloader from '../../widgets/Preloader/Preloader'
import TopButton from '../../widgets/buttons/TopButton'
import Header from '../../widgets/header/Header'
import Footer from '../../widgets/footer/Footer';
import Awwwards from '../../widgets/components/Awwwards';

export default function Policy() {
	const privacyList = [
		{
			title: 'Non-personally-identifying information',
			text: 'With the Site you provide us with general non-personally-identifying information such as the browser type, referring site, the date and time of each visitor request. Our purpose in collecting such information is to better understand how our Site is used and to maintain its proper functionality.',
		},
		{
			title: 'Personal information',
			text: 'We do not collect personally identifying information such as your name, email, address, title, phone number or other similar types of data from your visit to the Site, unless you intentionally file this data through the contact, application or other form(s) contained on the Site and give us an explicit consent by clicking the respective checkbox placed below the respective form. We will use this data to respond to your query/application and subsequently send you some promotional or informational e-mails. If you prefer not to receive these e-mails, an option to unsubscribe will be included in the message.',
		},
		{
			title: 'Log data ',
			text: 'When you use the Site our servers automatically record information, including information that your browser sends whenever you visit the Site. This log data may include your Internet Protocol address, your browser type and settings, the date and time of your access, information about your browser configuration and plug-ins, language preferences, and cookie data.',
		},
		{
			title: 'Other sources',
			text: 'We may also use software technology known as “web beacons” to help us keep track of what content on the Site is effective. Web beacon is a transparent graphic image that is placed on a Web site or in an email and used to monitor the behavior of the user. They may be used for a number of purposes, including, without limitation, to count visitors to our Site, to count how many emails that were sent were actually opened, or to count how many particular articles or links were actually viewed.',
			text2: "We may also use a software technology known as “embedded script”. An embedded script is programming code that is designed to collect information about your interactions with the Site, such as the links you click on. The code is temporarily downloaded onto your computer or other device and is deactivated or deleted when you close the Site.',"
		},
	]
	return (
		<>
			<CustomScrollStyles className={'creedz-html'} />
			<Progressbar />
			<Preloader />
			<TopButton />
			<Header />
			{/* <Awwwards /> */}
			<main className='policy'>
				<Suspense fallback={<div>Loading...</div>}>
					<div className='policy__container'>
						<h1 className='policy__main-title'>Privacy Policy</h1>
						<div className='policy__block'>
							<h2 className="policy__title">Overview</h2>
							<p className="policy__text">This Privacy Policy illustrates what information the User (“User”, “you” or “your”) may share with us (“Company”) when using our website https://creedz.net/, including its mobile version (collectively, the “Site”). It also describes how we collect, use, maintain and disclose this information.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Controller</h2>
							<p className="policy__text">The Controller of your personal data according to the General Data Protection Regulation (“GDPR”) regarding our Site is: creedz Inc., PRINCETON SOUTH CORPORATE CTR STE 160, 100 CHARLES EWING BLVD EWING, NEW JERSEY 08628 UNITED STATES OF AMERICA.</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Reception and collection of information</h2>
							<ul className="policy__list policy-list">
								{
									privacyList.map((item, i) => {
										return <li key={i} className='policy-list__items'>
											<h3 className='policy-list__title'>{i + 1}. {item.title}</h3>
											<p className="policy__text">{item.text}</p>
											{item.text2 ? <><br /><p className="policy__text">{item.text2}</p></> : null}
										</li>
									})
								}
							</ul>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Protection and use of personal information</h2>
							<p className="policy__text">
								We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information and data stored on our Site. We do not share your personal information with third parties except for our affiliates.
								<br /><br />
								We do not share your personal information with third parties except for our affiliates. We do use this information to better serve you and facilitate your use of our Site.
								<br /><br />
								We disclose personally identifying information only to those of our employees, holding companies that need that information in order to process it on our behalf or to provide the services and have agreed not to disclose it to others.
								<br /><br />
								We may also use your personally identifying information to contact you with newsletters, marketing or promotional materials and other information.
							</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">How we share your information</h2>
							<p className="policy__text">
								By submitting your contact data, you give us your consent to transfer, share, store and process your data.
								<br /><br />
								Vention is a multinational group of companies. To provide you with a better service, we may share your Data with our companies that are located outside the country in which you reside, including outside the EEA.
								<br /><br />
								As some of the countries where our offices are situated are not yet recognized as having an adequate level of personal data protection, we use all required instruments to ensure that the collected data is shared in strict accordance with applicable legislation (including Standard Contractual Clauses approved by the European Commission).
							</p>
						</div>
						<div className='policy__block'>
							<h2 className="policy__title">Cookies policy</h2>
							<p className="policy__text">
								This Site may place certain cookies on the device you’re using to access this Site. Cookies are small text files that we place on your computer or the device you’re using to access this Site.
								<br /><br />
								We use cookies to improve your experience while using our Site. We also may use cookies to improve our range of services. We have carefully chosen these cookies and have taken steps to ensure that your privacy is protected and respected at all times.
								<br /><br />
								This Site uses both “first-party cookies” (i.e., cookies set by this Site) and “third-party cookies” (i.e., cookies set by any third-party websites that provide service for this Site). We use “first-party cookies” to support the operation of the Site and keep it secure. We use “third-party cookies” for analytical, functional, and advertising purposes.
								<br /><br />
								There are two types of cookies depending on how long they are stored: session (temporary) cookies and persistent cookies.
								Persistent cookies are stored on the user’s device to help remember information, settings, preferences, or login credentials that the user previously stored. This helps to create a convenient and faster experience on the Site. These cookies have a validity period granted by the web server.
								<br /><br />
								Session (temporary) cookies are stored in the user’s device memory when you visit the Site. Session cookies are erased once you close the browser.
								<br /><br />
								We also classify cookies according to their purpose as functional, analytical, and advertising. Below we provide a detailed description for each category.
							</p>
						</div>
					</div>
				</Suspense>
			</main>
			<Suspense fallback={<div>Loading footer...</div>}>
				<Footer />
			</Suspense>
		</>
	)
}
