import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Scene = () => {
  const mountRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x00ffff, wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      // Adjust camera zoom on scroll
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 2; // 200vh
      const minZoom = 5;
      const maxZoom = 2; // move camera closer
      const zoom = minZoom - (scrollY / maxScroll) * (minZoom - maxZoom);

      if (cameraRef.current) {
        cameraRef.current.position.z = zoom;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-[70vh] md:h-[150vh] sticky top-0 z-0 overflow-x-hidden" />
  );
};

export default Scene;
