import * as THREE from 'three';

class HeroVisual {
  constructor() {
    this.container = document.getElementById('hero-canvas');
    if (!this.container) return;
    
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.container,
      alpha: true,
      antialias: true
    });
    
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    
    this.init();
    this.animate();
    this.handleResize();
  }
  
  init() {
    // Create a smooth abstract sphere with displacement
    const geometry = new THREE.IcosahedronGeometry(1.5, 64);
    
    this.material = new THREE.MeshStandardMaterial({
      color: 0x0044ff,
      roughness: 0.1,
      metalness: 0.8,
      wireframe: false,
      emissive: 0x001144,
      emissiveIntensity: 0.5
    });
    
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.scene.add(this.mesh);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    this.pointLight = new THREE.PointLight(0x0044ff, 2);
    this.pointLight.position.set(2, 3, 4);
    this.scene.add(this.pointLight);
    
    this.camera.position.z = 4;
    
    // Add some "floaty" particles
    this.particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    this.particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    this.particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });
    
    this.particlesMesh = new THREE.Points(this.particlesGeometry, this.particlesMaterial);
    this.scene.add(this.particlesMesh);
  }
  
  handleResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    });
  }
  
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    const time = Date.now() * 0.001;
    
    // Morph the mesh subtly
    if (this.mesh) {
        this.mesh.rotation.y = time * 0.1;
        this.mesh.rotation.x = time * 0.05;
        
        // Pulse effect
        const s = 1 + Math.sin(time) * 0.05;
        this.mesh.scale.set(s, s, s);
    }
    
    if (this.particlesMesh) {
        this.particlesMesh.rotation.y = time * 0.02;
    }
    
    this.renderer.render(this.scene, this.camera);
  }
}

export default HeroVisual;
