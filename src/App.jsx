import './scss/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactLenis } from "@studio-freight/react-lenis";
import Home from './pages/home/Home';
import { AppWrapper } from './shared/hooks/ThemeContext';
import Customcursor from './features/Customcursir';
import NotFound from './shared/not-found';
import Bookacall from './pages/bookacall/Bookacall';
import PortfolioPreview from './pages/PortfolioPreview/PortfolioPreview';

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
						<Routes>
							<Route element={<Home />} path='/' />
							<Route element={<Bookacall />} path='/bookacall' />
							<Route element={<PortfolioPreview />} path='/portfolio' />
							<Route element={<NotFound />} path='*' />
						</Routes>
					</AppWrapper>
				</BrowserRouter>
			</div>
		</ReactLenis>
	);
}

export default App;