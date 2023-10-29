'use client';

import { useEffect } from 'react';
import * as THREE from 'three';

export default function Home() {
  useEffect(() => {
    // Three.jsの基本設定
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // プレイヤーの宇宙船（立方体）を生成
    const playerGeometry = new THREE.BoxGeometry();
    const playerMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const playerCube = new THREE.Mesh(playerGeometry, playerMaterial);
    scene.add(playerCube);
    playerCube.position.z = -5;

    // カメラの位置を設定
    camera.position.z = 5;

    // WASDで移動するためのイベントリスナー
    document.addEventListener("keydown", function (event) {
      switch (event.key) {
        case "w":
          playerCube.position.y += 0.1;
          break;
        case "a":
          playerCube.position.x -= 0.1;
          break;
        case "s":
          playerCube.position.y -= 0.1;
          break;
        case "d":
          playerCube.position.x += 0.1;
          break;
      }
    });

    // アニメーション関数
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    // アニメーション開始
    animate();
  }, []);

  return (
    <div id="canvas-container" style={{ width: '1000vw', height: '1000vh' }}>
      {/* Canvas will be appended here */}
    </div>
  )
}
