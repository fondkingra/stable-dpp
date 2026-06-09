import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

export function TestGLB() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadingStatus, setLoadingStatus] = useState('Loading...');

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Scene + camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xffffff, 1);
    directional.position.set(5, 5, 5);
    scene.add(directional);

    // Load GLB model
    const loader = new GLTFLoader();
    let model: THREE.Group;
    let raf: number;
    
    loader.load(
      '/t-shirt.glb',
      (gltf) => {
        setLoadingStatus('Loaded successfully!');
        model = gltf.scene;
        
        // Debug: log the model structure
        console.log('GLB loaded:', gltf);
        console.log('Scene structure:', model);
        
        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        console.log('Model size:', size);
        console.log('Model center:', center);
        
        // Scale to fit in view
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;
        model.scale.setScalar(scale);
        
        // Center the model
        model.position.sub(center.multiplyScalar(scale));
        
        scene.add(model);
        
        // Animation loop
        const animate = () => {
          raf = requestAnimationFrame(animate);
          if (model) {
            model.rotation.y += 0.01;
          }
          renderer.render(scene, camera);
        };
        animate();
      },
      (progress) => {
        console.log('Loading progress:', progress);
        setLoadingStatus(`Loading: ${Math.round((progress.loaded / progress.total) * 100)}%`);
      },
      (error) => {
        console.error('Error loading GLB:', error);
        setLoadingStatus(`Error: ${error.message}`);
      }
    );

    // Cleanup
    return () => {
      if (raf) cancelAnimationFrame(raf);
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
  }, []);

  return (
    <div style={{ width: '100%', height: '400px', border: '2px solid #ccc', position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        left: '10px', 
        background: 'rgba(0,0,0,0.7)', 
        color: 'white', 
        padding: '5px 10px', 
        borderRadius: '5px',
        fontSize: '12px'
      }}>
        {loadingStatus}
      </div>
    </div>
  );
}