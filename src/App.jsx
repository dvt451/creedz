import './scss/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactLenis } from "@studio-freight/react-lenis";
import Home from './pages/home/Home';
import { AppWrapper } from './shared/hooks/ThemeContext';
import Customcursor from './features/Customcursir';
import NotFound from './shared/not-found';
import Bookacall from './pages/bookacall/Bookacall';
import PortfolioPreview from './pages/PortfolioPreview/PortfolioPreview';
import Received from './pages/bookacall/received/page';
import Creedz from './pages/usecases/creedz/Creedz';
import Applexnike from './pages/usecases/applexnike/Applexnike';
import Policy from './pages/policy/Policy';
import Terms from './pages/policy/Terms';
import Cadence from './pages/usecases/cadence/Cadence';
import Codelab from './pages/usecases/codelab/Codelab';
import Logofolio from './pages/usecases/logofolio/Logofolio';
import Skrex from './pages/usecases/skrex/Skrex';
import DvtBadge from './widgets/DvtBadge';

function App() {
	return (
		<ReactLenis root options={{
			lerp: 0.1,
			duration: 1,
			smoothTouch: false, //smooth scroll for touch devices
			smooth: true,
		}
		}>
			<div className="wrapper">
				<BrowserRouter>
					<AppWrapper>
						<Customcursor />
						<DvtBadge />
						<Routes>
							<Route element={<Home />} path='/' />
							<Route element={<Bookacall />} path='/bookacall' />
							<Route element={<Received />} path='/bookacall/received' />
							<Route element={<PortfolioPreview />} path='/portfolio' />
							<Route element={<NotFound />} path='*' />
							<Route element={<Policy />} path='/policy' />
							<Route element={<Terms />} path='/terms' />
							<Route element={<Creedz />} path='/usecases/creedz' />
							<Route element={<Applexnike />} path='/usecases/applexnike' />
							<Route element={<Cadence />} path='/usecases/cadence' />
							<Route element={<Codelab />} path='/usecases/codelab' />
							<Route element={<Logofolio />} path='/usecases/logofolio' />
							<Route element={<Skrex />} path='/usecases/skrex' />
						</Routes>
					</AppWrapper>
				</BrowserRouter>
			</div>
		</ReactLenis>
	);
}

export default App;