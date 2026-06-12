import React, { useRef, useMemo, Suspense, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, RoundedBox, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import CTAButton from '../components/CTAButton';

/* ═══════════════════════════════════════════
   PROCEDURAL DASHBOARD TEXTURES
   ═══════════════════════════════════════════ */
function createDashboardTexture(type: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, 512, 512);
  grad.addColorStop(0, 'rgba(8,8,22,0.94)');
  grad.addColorStop(0.5, 'rgba(5,4,18,0.96)');
  grad.addColorStop(1, 'rgba(3,2,15,0.95)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Glow border
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 15;
  ctx.strokeStyle = 'rgba(0,240,255,0.25)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(12, 12, 488, 488);
  ctx.shadowBlur = 0;

  // Corner accents
  ctx.fillStyle = '#00f0ff';
  ctx.fillRect(12, 12, 35, 3);
  ctx.fillRect(12, 12, 3, 35);
  ctx.fillRect(465, 12, 35, 3);
  ctx.fillRect(465, 497, 35, 3);
  ctx.fillRect(12, 465, 3, 35);
  ctx.fillRect(497, 12, 3, 35);

  // Scanlines
  ctx.fillStyle = 'rgba(0,240,255,0.012)';
  for (let y = 0; y < 512; y += 3) {
    ctx.fillRect(0, y, 512, 1);
  }

  if (type === 'marketing') {
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText('MARKETING ANALYTICS', 24, 44);
    ctx.fillStyle = 'rgba(0,240,255,0.4)';
    ctx.fillRect(24, 52, 120, 1);

    const barData = [0.35, 0.65, 0.45, 0.9, 0.55, 1, 0.7, 0.85];
    barData.forEach((h, i) => {
      const barGrad = ctx.createLinearGradient(0, 200, 0, 200 + h * 130);
      barGrad.addColorStop(0, '#00f0ff');
      barGrad.addColorStop(0.7, '#00a8b8');
      barGrad.addColorStop(1, '#6b2fff');
      ctx.fillStyle = barGrad;
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 8;
      const bh = h * 130;
      ctx.fillRect(42 + i * 55, 200 + (130 - bh), 38, bh);
      ctx.shadowBlur = 0;
    });

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0,240,255,0.6)';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 6;
    const pts = [370, 340, 400, 310, 430, 290, 470, 260];
    ctx.moveTo(42, pts[0]);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(42 + i * 55, pts[i]);
    ctx.stroke();
    ctx.shadowBlur = 0;

    const kpis: [string, string, number][] = [['12.5K', 'Leads', 40], ['8.3%', 'Conversion', 200], ['$1.2M', 'Revenue', 360]];
    kpis.forEach(([v, l, x]) => {
      const ng = ctx.createLinearGradient(x, 0, x + 100, 0);
      ng.addColorStop(0, '#00f0ff');
      ng.addColorStop(1, '#6b2fff');
      ctx.fillStyle = ng;
      ctx.font = 'bold 30px Inter, sans-serif';
      ctx.fillText(v, x, 440);
      ctx.fillStyle = 'rgba(255,255,255,0.45)';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText(l, x, 460);
    });
  } else if (type === 'crm') {
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText('CRM PIPELINE', 24, 44);
    ctx.fillStyle = 'rgba(0,240,255,0.4)';
    ctx.fillRect(24, 52, 100, 1);

    const stages = ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Closed'];
    const widths = [1, 0.85, 0.7, 0.55, 0.4];
    stages.forEach((stage, i) => {
      const w = 380 * widths[i];
      const x = (512 - w) / 2;
      const y = 90 + i * 72;
      const sg = ctx.createLinearGradient(x, y, x + w, y);
      sg.addColorStop(0, 'rgba(0,240,255,0.2)');
      sg.addColorStop(1, 'rgba(107,47,255,0.15)');
      ctx.fillStyle = sg;
      ctx.beginPath();
      ctx.roundRect(x, y, w, 48, 8);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,240,255,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText(stage, x + 14, y + 28);
      if (i < stages.length - 1) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,240,255,0.25)';
        ctx.moveTo(256, y + 52);
        ctx.lineTo(256, y + 68);
        ctx.stroke();
      }
    });
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.fillStyle = i < 5 ? '#00f0ff' : i < 9 ? '#6b2fff' : 'rgba(255,255,255,0.15)';
      ctx.arc(55 + (i % 6) * 38, 470 + Math.floor(i / 6) * 28, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === 'automation') {
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText('AUTOMATION FLOW', 24, 44);
    ctx.fillStyle = 'rgba(0,240,255,0.4)';
    ctx.fillRect(24, 52, 110, 1);

    const nodes = ['Trigger', 'Condition', 'Action', 'Result'];
    const positions = [[100, 140], [100, 260], [380, 260], [380, 380]];
    nodes.forEach((node, i) => {
      ctx.fillStyle = 'rgba(0,240,255,0.1)';
      ctx.beginPath();
      ctx.roundRect(positions[i][0] - 50, positions[i][1] - 22, 100, 44, 10);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,240,255,0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(node, positions[i][0], positions[i][1] + 4);
      ctx.textAlign = 'start';
      if (i < nodes.length - 1) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,240,255,0.2)';
        ctx.lineWidth = 1.5;
        if (i === 0) { ctx.moveTo(positions[i][0] + 50, positions[i][1]); ctx.lineTo(positions[i + 1][0] - 50, positions[i + 1][1]); }
        else if (i === 1) { ctx.moveTo(positions[i][0], positions[i][1] + 22); ctx.lineTo(positions[i + 1][0], positions[i + 1][1] - 22); }
        else { ctx.moveTo(positions[i][0] + 50, positions[i][1]); ctx.lineTo(positions[i + 1][0] - 50, positions[i + 1][1]); }
        ctx.stroke();
      }
    });
    ctx.fillStyle = '#00ff88';
    ctx.shadowColor = '#00ff88';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(450, 140, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '11px Inter, sans-serif';
    ctx.fillText('Active', 465, 145);
  } else if (type === 'funnel') {
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText('LEAD FUNNEL', 24, 44);
    ctx.fillStyle = 'rgba(0,240,255,0.4)';
    ctx.fillRect(24, 52, 95, 1);

    const stages = [
      { label: 'Visitors', value: '50K', width: 1, color: 'rgba(0,240,255,0.22)' },
      { label: 'Leads', value: '12K', width: 0.78, color: 'rgba(0,200,220,0.2)' },
      { label: 'Qualified', value: '3K', width: 0.55, color: 'rgba(100,80,255,0.18)' },
      { label: 'Customers', value: '800', width: 0.32, color: 'rgba(107,47,255,0.2)' },
    ];
    stages.forEach((stage, i) => {
      const w = 360 * stage.width;
      const x = (512 - w) / 2;
      const y = 90 + i * 90;
      ctx.fillStyle = stage.color;
      ctx.beginPath();
      ctx.roundRect(x, y, w, 58, 8);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,240,255,0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 18px Inter, sans-serif';
      ctx.fillText(stage.value, x + 16, y + 28);
      ctx.fillStyle = 'rgba(255,255,255,0.45)';
      ctx.font = '12px Inter, sans-serif';
      ctx.fillText(stage.label, x + 16, y + 48);
    });
  } else if (type === 'analytics') {
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText('GROWTH METRICS', 24, 44);
    ctx.fillStyle = 'rgba(0,240,255,0.4)';
    ctx.fillRect(24, 52, 110, 1);

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 14;
    ctx.arc(256, 230, 90, 0, Math.PI * 2);
    ctx.stroke();

    const cp = ctx.createLinearGradient(166, 140, 346, 320);
    cp.addColorStop(0, '#00f0ff');
    cp.addColorStop(1, '#6b2fff');
    ctx.strokeStyle = cp;
    ctx.lineWidth = 14;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(256, 230, 90, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * 0.78);
    ctx.stroke();
    ctx.lineCap = 'butt';

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('78%', 256, 240);
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '12px Inter, sans-serif';
    ctx.fillText('GROWTH RATE', 256, 260);
    ctx.textAlign = 'start';

    [[60, 380, '#00f0ff'], [200, 380, '#6b2fff'], [340, 380, '#00f0ff'], [60, 440, '#6b2fff']].forEach(([sx, sy, c]) => {
      ctx.beginPath();
      ctx.strokeStyle = c as string;
      ctx.lineWidth = 2;
      for (let j = 0; j <= 12; j++) ctx.lineTo((sx as number) + j * 10, (sy as number) - Math.sin(j * 0.7) * 18 - j * 1.5);
      ctx.stroke();
    });
    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 13px Inter, sans-serif';
    ctx.fillText('MRR +12%', 60, 360);
    ctx.fillText('ARR +28%', 200, 360);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/* ═══════════════════════════════════════════
   SCREEN DATA
   ═══════════════════════════════════════════ */
interface ScreenConfig {
  position: [number, number, number];
  orbitRadius: number;
  orbitSpeed: number;
  rotationOffset: number;
  type: string;
}

const SCREENS: ScreenConfig[] = [
  { position: [3.8, 1.4, -0.8], orbitRadius: 0.35, orbitSpeed: 0.35, rotationOffset: 0, type: 'marketing' },
  { position: [-3.5, 1.0, -1.8], orbitRadius: 0.3, orbitSpeed: 0.3, rotationOffset: Math.PI * 0.5, type: 'crm' },
  { position: [3.2, -1.2, -1.2], orbitRadius: 0.4, orbitSpeed: 0.25, rotationOffset: Math.PI, type: 'automation' },
  { position: [-2.8, -0.6, -0.3], orbitRadius: 0.25, orbitSpeed: 0.4, rotationOffset: Math.PI * 1.5, type: 'funnel' },
  { position: [0.3, 2.3, -2.2], orbitRadius: 0.32, orbitSpeed: 0.33, rotationOffset: Math.PI * 0.75, type: 'analytics' },
];

/* ═══════════════════════════════════════════
   FLOATING DASHBOARD SCREENS
   ═══════════════════════════════════════════ */
const DashboardScreens: React.FC = () => {
  const screensRef = useRef<THREE.Group[]>([]);
  const textures = useMemo(() => SCREENS.map((s) => createDashboardTexture(s.type)), []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    screensRef.current.forEach((screen, i) => {
      if (!screen) return;
      const d = SCREENS[i];
      const angle = time * d.orbitSpeed + d.rotationOffset;
      screen.position.x = d.position[0] + Math.cos(angle) * d.orbitRadius;
      screen.position.y = d.position[1] + Math.sin(angle * 0.7) * d.orbitRadius * 0.5;
      screen.position.z = d.position[2];
      screen.rotation.y = Math.sin(time * 0.5 + d.rotationOffset) * 0.12;
      screen.rotation.x = Math.cos(time * 0.3 + d.rotationOffset) * 0.06;
    });
  });

  return (
    <>
      {SCREENS.map((_s, i) => (
        <group key={i} ref={(el) => { if (el) screensRef.current[i] = el; }}>
          {/* Glow plane behind */}
          <mesh position={[0, 0, -0.08]}>
            <planeGeometry args={[2.1, 1.45]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.04} side={THREE.DoubleSide} />
          </mesh>
          {/* Screen body */}
          <RoundedBox args={[1.9, 1.28, 0.04]} radius={0.06} smoothness={4}>
            <meshPhysicalMaterial
              map={textures[i]}
              transparent
              opacity={0.92}
              roughness={0.15}
              metalness={0.85}
              clearcoat={1.0}
              clearcoatRoughness={0.1}
              emissive="#00f0ff"
              emissiveIntensity={0.04}
              emissiveMap={textures[i]}
            />
          </RoundedBox>
          {/* Edge glow */}
          <mesh position={[0, 0, 0.025]} scale={[1.01, 1.01, 1]}>
            <planeGeometry args={[1.9, 1.28]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.03} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </>
  );
};

/* ═══════════════════════════════════════════
   PARTICLE SYSTEMS
   ═══════════════════════════════════════════ */
const ParticleField: React.FC<{ count: number; size: number; color: string; opacity: number; spread: number }> = ({
  count, size, color, opacity, spread,
}) => {
  const ref = useRef<THREE.Points>(null);
  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel: Array<{ y: number; speed: number; amp: number }> = [];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5;
      vel.push({ y: 0.003 + Math.random() * 0.012, speed: 0.3 + Math.random() * 1.2, amp: 0.008 + Math.random() * 0.035 });
    }
    return { positions: pos, velocities: vel };
  }, [count, spread]);

  useFrame((state) => {
    if (!ref.current) return;
    const attr = ref.current.geometry.attributes.position;
    const arr = attr.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += velocities[i].y;
      arr[i * 3] += Math.sin(t * velocities[i].speed + i) * velocities[i].amp;
      if (arr[i * 3 + 1] > spread * 0.3) {
        arr[i * 3 + 1] = -spread * 0.3;
        arr[i * 3] = (Math.random() - 0.5) * spread;
        arr[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={opacity} blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation />
    </points>
  );
};

/* ═══════════════════════════════════════════
   GLOWING CONNECTION LINES
   ═══════════════════════════════════════════ */
const ConnectionLines: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    return SCREENS.map((s) => {
      const start = new THREE.Vector3(0, 0.3, 0);
      const end = new THREE.Vector3(...s.position);
      const mid = new THREE.Vector3().lerpVectors(start, end, 0.5).add(new THREE.Vector3(0, 0.4, 0));
      const curve = new THREE.CatmullRomCurve3([start, mid, end]);
      const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40));
      const mat = new THREE.LineBasicMaterial({
        color: '#00f0ff',
        transparent: true,
        opacity: 0.08,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      return new THREE.Line(geo, mat);
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    lines.forEach((line, i) => {
      (line.material as THREE.LineBasicMaterial).opacity = 0.08 + Math.sin(t * 1.5 + i) * 0.05;
    });
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </group>
  );
};

/* ═══════════════════════════════════════════
   VOLUMETRIC LIGHT CONES
   ═══════════════════════════════════════════ */
const VolumetricLight: React.FC<{ position: [number, number, number]; color: string; intensity: number }> = ({
  position, color, intensity,
}) => {
  return (
    <mesh position={position} rotation={[Math.PI, 0, 0]}>
      <coneGeometry args={[3, 8, 32, 1, true]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={intensity * 0.015}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

/* ═══════════════════════════════════════════
   LOGO 3D
   ═══════════════════════════════════════════ */
const Logo3D: React.FC = () => {
  const { logoTexture } = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load('/images/soventraq-logo.png');
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return { logoTexture: tex };
  }, []);

  return (
    <group>
      {/* Outer glow */}
      <mesh position={[0, 0.3, -0.1]}>
        <planeGeometry args={[3.8, 3.8]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.025} side={THREE.DoubleSide} />
      </mesh>
      {/* Mid glow */}
      <mesh position={[0, 0.3, -0.06]}>
        <planeGeometry args={[3.4, 3.4]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.05} side={THREE.DoubleSide} />
      </mesh>
      {/* Logo plane */}
      <mesh position={[0, 0.3, 0]} scale={[3.2, 3.2, 3.2]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={logoTexture} transparent opacity={0.98} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

/* ═══════════════════════════════════════════
   MAIN 3D SCENE
   ═══════════════════════════════════════════ */
const Scene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 0.4;
    mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 0.25;
  }, []);

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (mouseRef.current.x - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (-mouseRef.current.y - groupRef.current.rotation.x) * 0.04;
  });

  return (
    <>
      <fog attach="fog" args={['#03020f', 10, 28]} />
      <ambientLight intensity={0.08} />
      <directionalLight position={[5, 8, 5]} intensity={0.6} color="#00f0ff" />
      <directionalLight position={[-5, 4, 3]} intensity={0.3} color="#6b2fff" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#00f0ff" distance={12} decay={2} />
      <pointLight position={[0, 5, -3]} intensity={0.4} color="#ffffff" distance={15} decay={2} />

      <Stars radius={30} depth={60} count={3000} factor={4} saturation={0} fade speed={1} />

      <Grid
        position={[0, -3, 0]}
        args={[40, 40]}
        cellSize={0.6}
        cellThickness={0.6}
        cellColor="rgba(0,240,255,0.05)"
        sectionSize={4}
        sectionThickness={1}
        sectionColor="rgba(0,240,255,0.1)"
        fadeDistance={28}
        fadeStrength={1.8}
        infiniteGrid
      />

      <VolumetricLight position={[0, 6, 0]} color="#00f0ff" intensity={1.2} />
      <VolumetricLight position={[4, 5, -2]} color="#6b2fff" intensity={0.6} />

      <group ref={groupRef}>
        <Logo3D />
        <DashboardScreens />
        <ConnectionLines />
        <ParticleField count={1000} size={0.025} color="#00f0ff" opacity={0.5} spread={28} />
        <ParticleField count={300} size={0.06} color="#ffffff" opacity={0.2} spread={22} />
        <ParticleField count={200} size={0.04} color="#6b2fff" opacity={0.25} spread={18} />
      </group>

      <EffectComposer>
        <Bloom luminanceThreshold={0.35} luminanceSmoothing={0.85} intensity={0.7} mipmapBlur />
      </EffectComposer>
    </>
  );
};

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: '#03020f' }}
    >
      {/* ── Layer 0: 3D Canvas (full background) ── */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0.5, 8.5], fov: 48 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
          style={{ background: '#03020f' }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* ── Layer 1: Left-side text scrim (keeps text readable) ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(3,2,15,0.93) 0%, rgba(3,2,15,0.82) 40%, rgba(3,2,15,0.35) 65%, transparent 85%)',
        }}
      />

      {/* ── Layer 2: Radial vignette edges ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(3,2,15,0.55) 100%)',
        }}
      />

      {/* ── Layer 3: Content ── */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Spacer for fixed navbar (76px tall) */}
        <div className="h-[76px] shrink-0" />

        {/* Main hero body */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-10 lg:py-0">
            {/* Two-column grid: text left, visual right (right col is intentionally empty — 3D fills it) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

              {/* ── Left column: all text content ── */}
              <div className="flex flex-col justify-center max-w-[600px]">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="caption-text text-cyan/70 tracking-[0.18em]">
                    DIGITAL PLATFORMS & MARKETING SYSTEMS
                  </span>
                </div>

                {/* Headline */}
                <h1 className="h1-hero text-white mb-6 text-glow">
                  Digital Platforms,<br />
                  CRM &{' '}
                  <span className="text-cyan">Marketing</span><br />
                  <span className="text-cyan">Automation</span>{' '}
                  Built for Growth
                </h1>

                {/* Subtitle */}
                <p
                  className="mb-8 leading-relaxed max-w-[460px]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(15px, 1.15vw, 18px)',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  We help businesses build high-converting websites, automate
                  their sales process, and manage leads through smart digital
                  systems.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 pointer-events-auto mb-6">
                  <CTAButton variant="filled" href="#contact">
                    Book a Free Consultation
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="ml-1 shrink-0">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </CTAButton>
                  <CTAButton variant="outlined" href="#services">
                    View Our Services
                  </CTAButton>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-10 pointer-events-none">
                  {['Websites', 'CRM', 'Automation', 'Marketing Systems'].map((tag, i, arr) => (
                    <React.Fragment key={i}>
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-white/30 uppercase">
                        {tag}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="text-cyan/20 text-[10px]">•</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Stats row */}
                <div className="hidden sm:flex gap-8 border-t border-white/[0.06] pt-8">
                  {[
                    { value: '150+', label: 'Platforms Delivered' },
                    { value: '$50M+', label: 'Revenue Generated' },
                    { value: '98%', label: 'Client Retention' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div
                        className="font-display font-bold"
                        style={{
                          fontSize: 'clamp(22px, 2.2vw, 34px)',
                          background: 'linear-gradient(135deg, #00f0ff, #6b2fff)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="caption-text text-white/30 mt-1 text-[9px]">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right column: empty — 3D canvas fills the background ── */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-8 pointer-events-none">
          <div className="flex flex-col items-center gap-2">
            <div className="relative w-[1px] h-[36px] bg-gradient-to-b from-white/20 to-transparent">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-cyan"
                style={{
                  boxShadow: '0 0 8px rgba(0,240,255,0.6)',
                  animation: 'scroll-indicator 2s ease-in-out infinite',
                }}
              />
            </div>
            <span className="caption-text text-white/20 text-[9px]">SCROLL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
