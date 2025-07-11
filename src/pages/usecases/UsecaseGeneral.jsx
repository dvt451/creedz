import React from 'react'
import PreloaderScaling from '../../features/PreloadScaling/PreloaderScaling'
import Progressbar from '../../features/Progressbar'
import Awwwards from '../../widgets/components/Awwwards'
import Header from '../../widgets/header/Header'

export default function UsecaseGeneral() {
	return (
		<>
			<PreloaderScaling />
			<Progressbar />
			{/* <Awwwards /> */}
			<Header />
		</>
	)
}
