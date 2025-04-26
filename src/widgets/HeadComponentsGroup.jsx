import React from 'react'
// import Awwwards from '@/widgets/components/Awwwards'
import Progressbar from './Progressbar'
import Header from './header/Header'
import PreloaderScaling from '../shared/PreloadScaling/PreloaderScaling'

export default function HeadComponentsGroup() {
	return (
		<>
			<PreloaderScaling />
			<Progressbar />
			{/* <Awwwards /> */}
			<Header />
		</>
	)
}
