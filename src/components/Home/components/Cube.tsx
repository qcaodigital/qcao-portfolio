import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Cube() {
	const mount = useRef<HTMLDivElement | null>(null);
	useEffect((): void => {
		console.log(typeof mount.current);
		// const clientWidth: number | null = mount.current.clientWidth;
		const camera = new THREE.PerspectiveCamera(75);
	}, []);
	return <div ref={mount}></div>;
}
