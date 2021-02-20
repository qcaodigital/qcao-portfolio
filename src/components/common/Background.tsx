import { viewportType } from './../hooks/useViewport';
import Particles from 'react-particles-js';
import styles from './Background.module.scss';

interface BackgroundProps {
	viewport: viewportType;
	isSubpathOpen: boolean;
	currentPathIdx: number;
}

export default function Background({ viewport, isSubpathOpen, currentPathIdx }: BackgroundProps) {
	return (
		<div className={`${styles.background} ${isSubpathOpen ? styles.hideParticles : ''}`}>
			<Particles
				className={styles.particlesContainer}
				params={{
					particles: {
						color: {
							value: '#000000',
						},
						opacity: {
							value: 1,
						},
						line_linked: {
							color: '#000000',
							opacity: 0.25,
							distance: Math.max(viewport.rank * 42, 200),
						},
						number: {
							value: viewport.rank * 10,
						},
						size: {
							value: 2,
						},
						move: {
							speed: 3,
						},
					},
					interactivity: {
						detect_on: 'window',
						events: {
							onhover: {
								enable: true,
								mode: 'repulse',
							},
							onclick: {
								enable: false,
								mode: 'bubble',
							},
						},
						modes: {
							repulse: {
								distance: 100,
								speed: 0.1,
							},
							bubble: {
								size: 10,
							},
							trail: {
								delay: 1,
								quantity: 1,
							},
							light: {
								area: {
									radius: 5,
								},
								shadow: {
									length: 100,
								},
							},
						},
					},
				}}
			/>
			<p
				style={{
					color: 'white',
					backgroundColor: 'black',
					display: 'inline-block',
					padding: '.5rem',
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: 1000,
				}}
			>
				page: {currentPathIdx} | viewport: {viewport.label} (min-width: {viewport.minWidth})
			</p>
		</div>
	);
}
