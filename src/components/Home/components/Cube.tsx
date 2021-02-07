import { useRef, useEffect, CSSProperties } from "react";
import * as THREE from "three";

const STYLES: CSSProperties = {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    left: "67.5%",
    transform: "translateX(-50%)",
};

export default function Cube() {
    const mount = useRef<HTMLDivElement>(document.createElement("div"));
    useEffect((): void => {
        const scene = new THREE.Scene();

        const clientWidth: number = mount.current.clientWidth;
        const clientHeight: number = mount.current.clientHeight;

        const clientAR: number = clientWidth / clientHeight;
        const camera = new THREE.PerspectiveCamera(75, clientAR, 0.01, 500);
        camera.position.set(0, 0, 10);

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setSize(clientWidth, clientHeight);

        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0x2f2f2f });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const geo = new THREE.EdgesGeometry(geometry); // or WireframeGeometry( geometry )
        const mat = new THREE.LineBasicMaterial({
            color: 0xffffff,
            linewidth: 1,
        });
        const wireframe = new THREE.LineSegments(geo, mat);
        scene.add(wireframe);

        mount.current.appendChild(renderer.domElement);
        function animate(): void {
            const rotationSpeed = 0.0075;
            requestAnimationFrame(animate);
            wireframe.rotation.x += rotationSpeed;
            wireframe.rotation.y += rotationSpeed;
            cube.rotation.x += rotationSpeed;
            cube.rotation.y += rotationSpeed;
            renderer.render(scene, camera);
        }

        animate();

        function onWindowResize() {
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(clientWidth, clientHeight);
        }

        window.addEventListener("resize", onWindowResize);
    }, []);
    return <div style={STYLES} ref={mount}></div>;
}
