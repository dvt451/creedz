import VerticalRunningLine from '../../../widgets/components/VerticalRunningLine';
import LetstalkBlock from './LetstalkBlock';

export default function Letstalk() {

	const projectsLeft = [
		{
			Picture: "/portfolio/img0.webp",
		},
		{
			Picture: "/portfolio/img2.webp",
		},
		{
			Video: "/usecases/skrex/video1.webm",
		},
		{
			Picture: "/portfolio/img1.webp",
		},
		{
			Picture: "/portfolio/img15.webp",
		},
		{
			Picture: "/usecases/applexnike/img6.webp",
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
			Picture: "/usecases/applexnike/img1.webp",
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
			Picture: "/usecases/applexnike/img7.webp",
		},
		{
			Picture: "/portfolio/img17.webp",
		},
		{
			Picture: "/usecases/skrex/img23.webp",
		},
		{
			Video: "/usecases/cadence/video.webm",
		},
		{
			Picture: "/usecases/codelab/img24.webp",
		},
		{
			Picture: "/portfolio/img18.webp",
		},
		{
			Picture: "/usecases/applexnike/img17.webp",
		},
	];
	const projectsRight = [
		{
			Video: "/usecases/skrex/video2.webm",
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
			Picture: "/usecases/applexnike/img2.webp",
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
			Picture: "/usecases/applexnike/img8.webp",
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
			Picture: "/usecases/applexnike/img18.webp",
		},
		{
			Video: "/usecases/cadence/watch.webm",
		},
		{
			Picture: "/portfolio/img23.webp",
		},
		{
			Picture: "/usecases/applexnike/img7.webp",
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
		{
			Picture: "/usecases/applexnike/img4.webp",
		},
	];

	return (
		<LetstalkBlock>
			<VerticalRunningLine projects={projectsLeft} />
			<VerticalRunningLine projects={projectsRight} direction={' reverse'} />
		</LetstalkBlock>
	);
}
