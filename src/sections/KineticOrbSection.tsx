import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const KineticOrbSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !rendererRef.current) {
            initScene();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(container);

    function initScene() {
      if (!container) return;
      const w = container.offsetWidth;
      const h = container.offsetHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
      camera.position.z = 7;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.display = 'block';
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Orb
      const orbGeo = new THREE.IcosahedronGeometry(1.2, 4);
      const orbMat = new THREE.MeshStandardMaterial({
        color: '#000000',
        roughness: 0.34,
        metalness: 0.86,
        emissive: '#000000',
        transparent: true,
      });
      const orb = new THREE.Mesh(orbGeo, orbMat);
      scene.add(orb);

      // Lights
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
      scene.add(ambientLight);
      const cyanLight = new THREE.PointLight('#00f0ff', 1, 10);
      cyanLight.position.set(3, 2, 3);
      scene.add(cyanLight);
      const purpleLight = new THREE.PointLight('#6b2fff', 0.6, 10);
      purpleLight.position.set(-3, -2, 3);
      scene.add(purpleLight);

      // Rings
      const ringGroup = new THREE.Group();
      for (let i = 0; i < 8; i++) {
        const radius = 1.6 + i * 0.25;
        const tube = 0.005 + i * 0.001;
        const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({
          color: '#00f0ff',
          transparent: true,
          opacity: 0.08 - i * 0.008,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
        ring.rotation.y = (Math.random() - 0.5) * 0.3;
        ringGroup.add(ring);
      }
      scene.add(ringGroup);

      // Particles
      const particleCount = 600;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 2 + Math.random() * 4;
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.04,
        color: '#00f0ff',
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      scene.add(particles);

      // Inner glow
      const innerGeo = new THREE.IcosahedronGeometry(0.8, 3);
      const innerMat = new THREE.MeshBasicMaterial({
        color: '#00f0ff',
        transparent: true,
        opacity: 0.03,
        blending: THREE.AdditiveBlending,
      });
      const innerGlow = new THREE.Mesh(innerGeo, innerMat);
      scene.add(innerGlow);

      // Animation
      let theta = 0;
      const mouseTarget = { x: 0, y: 0 };
      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseTarget.x = ((e.clientX - rect.left) / rect.width - 0.5) * 0.3;
        mouseTarget.y = -((e.clientY - rect.top) / rect.height - 0.5) * 0.2;
      };
      container.addEventListener('mousemove', onMouseMove);

      const cameraGroup = new THREE.Group();
      cameraGroup.add(camera);
      scene.add(cameraGroup);

      const animate = () => {
        frameRef.current = requestAnimationFrame(animate);
        theta += 0.002;
        orb.rotation.x = Math.sin(theta) * 0.1;
        orb.rotation.y = theta * 0.5;
        innerGlow.rotation.x = -Math.sin(theta) * 0.15;
        innerGlow.rotation.y = -theta * 0.3;
        ringGroup.rotation.z = theta * 0.2;

        cameraGroup.rotation.y += (mouseTarget.x - cameraGroup.rotation.y) * 0.05;
        cameraGroup.rotation.x += (mouseTarget.y - cameraGroup.rotation.x) * 0.05;

        renderer.render(scene, camera);
      };
      animate();

      // Resize
      const onResize = () => {
        const newW = container.offsetWidth;
        const newH = container.offsetHeight;
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      };
      window.addEventListener('resize', onResize);

      return () => {
        cancelAnimationFrame(frameRef.current);
        container.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        orbGeo.dispose();
        orbMat.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        rendererRef.current = null;
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full" style={{ height: '60vh', background: '#03020f' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </section>
  );
};

export default KineticOrbSection;
