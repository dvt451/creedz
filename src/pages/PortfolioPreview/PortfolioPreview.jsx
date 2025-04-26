import React, { useState, useRef, useEffect, useCallback } from "react";
import { Portfoliologoicon } from "../../shared/icons/icons";
import Runingline from "./Runingline";
import Header from "../../widgets/header/Header";
import PreloaderScaling from "../../features/PreloadScaling/PreloaderScaling";
import CustomScrollStyles from "../../features/CustomScrollStyles";
import Awwwards from "../../widgets/components/Awwwards";

const Project = ({ Picture, Video, x, y, randomScale, randomRotation }) => {
	return (
		<div
			className="case-container"
			style={{
				left: x,
				top: y,
				rotate: randomRotation + 'deg',
			}}
		>
			{Video ? (
				<div className="video-container">
					<video
						width={500}
						height={400}
						autoPlay
						loop
						playsInline
						muted
						className="new-element"
						onTouchStart={(e) => e.preventDefault()}
						onClick={(e) => e.preventDefault()}
					>
						<source src={Video} />
					</video>
				</div>
			) : (
				<div className="img-container" style={{ transform: `scale(${randomScale})`, }}>
					<img width={500} height={300} src={Picture} alt="Project" />
				</div>
			)}
		</div>
	);
};


const PortfolioPreview = () => {
	const [projectsContainer, setProjectsContainer] = useState([]);
	const [indexToAdd, setIndexToAdd] = useState(0);
	const audioRef = useRef(null);

	const projects = [
		{
			Picture: "/portfolio/img0.webp",
		},
		{
			Picture: "/portfolio/img2.webp",
		},
		{
			Picture: "/portfolio/img1.webp",
		},
		{
			Picture: "/portfolio/img15.webp",
		},
		{
			Picture: "/portfolio/img16.webp",
		},
		{
			Picture: "/usecases/skrex/img16.webp",
		},
		{
			Picture: "/usecases/codelab/img3.webp",
		},
		{
			Picture: "/usecases/cadence/img19.webp",
		},
		{
			Picture: "/usecases/creedz/img18.webp",
		},
		{
			Picture: "/usecases/skrex/img21.webp",
		},
		{
			Picture: "/usecases/codelab/img13.webp",
		},
		{
			Picture: "/portfolio/img7.webp",
		},
		{
			Picture: "/portfolio/img17.webp",
		},
		{
			Picture: "/usecases/skrex/img23.webp",
		},
		{
			Picture: "/usecases/codelab/img24.webp",
		},
		{
			Picture: "/portfolio/img18.webp",
		},
		{
			Picture: "/usecases/codelab/img9.webp",
		},
		{
			Picture: "/portfolio/img3.webp",
		},
		{
			Picture: "/portfolio/img13.webp",
		},
		{
			Picture: "/usecases/skrex/img5.webp",
		},
		{
			Picture: "/portfolio/img8.webp",
		},
		{
			Picture: "/portfolio/img11.webp",
		},
		{
			Picture: "/portfolio/img6.webp",
		},
		{
			Picture: "/portfolio/img19.webp",
		},
		{
			Picture: "/portfolio/img20.webp",
		},
		{
			Picture: "/portfolio/img21.webp",
		},
		{
			Picture: "/portfolio/img22.webp",
		},
		{
			Picture: "/portfolio/img23.webp",
		},
		{
			Picture: "/portfolio/img24.webp",
		},
		{
			Picture: "/portfolio/img25.webp",
		},
		{
			Picture: "/portfolio/img26.webp",
		},
		{
			Picture: "/portfolio/img27.webp",
		},
	];

	const handleClickAnywhere = useCallback((event) => {
		// Play the audio
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
		}

		// Get clicked coordinates
		const { clientX, clientY } = event;
		// Calculate center coordinates dynamically using the ref
		const x = clientX;
		const y = clientY;
		const randomRotationValue = Math.random() * 30 - 15;
		const randomScale = Math.random() * 1.2 + 0.4;
		console.log('randomRotationValue: ' + randomRotationValue);
		console.log('randomScale: ' + randomScale);

		// Add project to projectsContainer with calculated coordinates
		const projectToAdd = projects[indexToAdd];
		const newProject = {
			...projectToAdd,
			x,
			y,
			id: Date.now(), // Generate a unique ID for each project
			randomRotation: randomRotationValue,
			randomScale: randomScale,
		};
		setProjectsContainer((prevProjects) => [...prevProjects, newProject]);
		setIndexToAdd((indexToAdd + 1) % projects.length); // Loop back to start if indexToAdd exceeds projects length

		setTimeout(() => {
			setProjectsContainer((prevProjects) =>
				prevProjects.filter((p) => p.id !== newProject.id)
			);
		}, 7000);
	}, [projects, indexToAdd]);
	const page = 'portfolio-html'

	return (
		<div className="wrapper portfolio-page-wrapper">
			<CustomScrollStyles className={page} />
			<Awwwards />
			<Header />
			<main className="portfolio-page" onClick={handleClickAnywhere}>
				<PreloaderScaling />
				<Runingline />
				<div className="portfolio-page__bg-logo">
				</div>
				<div className="projects-container">
					{projectsContainer.map((project, i) => (
						<Project
							key={project.id}
							Picture={project.Picture}
							Video={project.Video}
							x={project.x}
							y={project.y}
							randomScale={project.randomScale}
							randomRotation={project.randomRotation}
						/>
					))}
					<audio ref={audioRef} src="/audio/clicksound.mp3" />
				</div>
				<div className="portfolio-page__logo">
					{Portfoliologoicon}
				</div>
			</main>
		</div>
	);
};

export default PortfolioPreview;

