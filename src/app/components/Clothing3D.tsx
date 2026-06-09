import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

function useGLTFScene(glbPath: string, cameraZ: number) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    setLoading(true);
    setError(null);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Scene + camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = cameraZ;

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(3, 4, 3);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xd2ffeb, 0.4);
    fill.position.set(-2, -1, 2);
    scene.add(fill);
    const rim = new THREE.PointLight(0x189b77, 0.6);
    rim.position.set(0, 3, 2);
    scene.add(rim);

    // Load GLB model
    const loader = new GLTFLoader();
    let model: THREE.Group;
    let raf: number;
    
    loader.load(
      glbPath,
      (gltf) => {
        console.log('GLB loaded successfully:', glbPath, gltf);
        model = gltf.scene;
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        console.log('Model size:', size);
        console.log('Model center:', center);
        
        // Scale model to reasonable size
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scale = 2 / maxDim;
          model.scale.setScalar(scale);
        }
        
        // Center the model
        model.position.sub(center);
        
        scene.add(model);
        setLoading(false);
        
        // Animation loop
        const startTime = performance.now();
        const animate = () => {
          raf = requestAnimationFrame(animate);
          const t = (performance.now() - startTime) / 1000;
          if (model) {
            model.rotation.y = Math.sin(t * 0.5) * 0.4;
            model.rotation.x = Math.sin(t * 0.3) * 0.07;
            model.position.y = -center.y + Math.sin(t * 0.7) * 0.06;
          }
          renderer.render(scene, camera);
        };
        animate();
      },
      (progress) => {
        console.log('Loading progress:', glbPath, progress);
      },
      (error) => {
        console.error('Error loading GLB:', glbPath, error);
        setError(`Failed to load ${glbPath}: ${error.message}`);
        setLoading(false);
      }
    );

    // Resize
    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(el);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      if (model) {
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, [glbPath, cameraZ]);

  return { mountRef, error, loading };
}

export function TShirt3D() {
  const { mountRef, error, loading } = useGLTFScene('/t-shirt.glb', 4.8);
  
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#1ac8b0',
          fontSize: '12px'
        }}>
          Loading...
        </div>
      )}
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'red',
          fontSize: '10px',
          textAlign: 'center',
          padding: '5px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
}

export function Jeans3D() {
  const { mountRef, error, loading } = useGLTFScene('/jeans.glb', 5.0);
  
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#1ac8b0',
          fontSize: '12px'
        }}>
          Loading...
        </div>
      )}
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'red',
          fontSize: '10px',
          textAlign: 'center',
          padding: '5px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
}
