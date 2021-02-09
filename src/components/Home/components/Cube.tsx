import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styles from './Cube.module.scss';

export default function Cube() {
	const mount = useRef<HTMLDivElement>(document.createElement('div'));
	useEffect((): void => {
		const scene = new THREE.Scene();

		const clientWidth: number = mount.current.clientWidth;
		const clientHeight: number = mount.current.clientHeight;

		const clientAR: number = clientWidth / clientHeight;
		const camera = new THREE.PerspectiveCamera(135, clientAR, 0.01, 500);
		camera.position.set(0, 0, 10);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});

		renderer.setSize(clientWidth, clientHeight);

		const cubeArr = [];
		const wirefameArr = [];
		for (let i = 0; i < 3; i++) {
			var geometry = new THREE.BoxGeometry(1, 1, 1);
			var material = new THREE.MeshBasicMaterial({ color: 0x2f2f2f });
			var cube = new THREE.Mesh(geometry, material);
			var cubeEdges = new THREE.EdgesGeometry(geometry); // or WireframeGeometry( geometry )
			var edgeMaterial = new THREE.LineBasicMaterial({
				color: 0xffffff,
				linewidth: 1,
			});
			var wireframe = new THREE.LineSegments(cubeEdges, edgeMaterial);

			cube.position.x = wireframe.position.x =
				Math.random() * 10 * Math.random() * -1;
			cube.position.y = wireframe.position.y =
				Math.random() * 10 * Math.random() * -1;
			cube.position.z = wireframe.position.z =
				Math.random() * 0.5 * Math.random() * -1;
			scene.add(cube);
			scene.add(wireframe);
		}

		mount.current.appendChild(renderer.domElement);
		function animate(): void {
			const rotationSpeed = 0.0075;
			requestAnimationFrame(animate);
			// wireframe.rotation.x += rotationSpeed;
			// wireframe.rotation.y += rotationSpeed;
			// cube.rotation.x += rotationSpeed;
			// cube.rotation.y += rotationSpeed;
			renderer.render(scene, camera);
		}

		animate();

		function onWindowResize(): void {
			camera.aspect = clientWidth / clientHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(clientWidth, clientHeight);
		}

		window.addEventListener('resize', onWindowResize);
	}, []);
	return <div className={styles.Cube} ref={mount}></div>;
}
