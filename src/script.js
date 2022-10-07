import './style.css'
import Experience from './Experience/Experience.js'

const experience = new Experience(document.querySelector('.webgl'))
// import * as THREE from 'three'
// import gsap from 'gsap'
// import GUI from 'lil-gui'
// import vertex from "./shaders/vertex.glsl";
// import fragment1 from "./shaders/fragment1.glsl";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
// import { DotScreenShader } from './DotScreenShader';

// // Debug
// const gui = new GUI().hide()

// const uGui = gui.addFolder('uniforms').close()
// const logoGui = gui.addFolder('Logo')

// // DOM
// const article = document.querySelector('.section2')
// let articleActive = false

// const titleLetters = document.querySelectorAll('.headline')

// const canvas = document.querySelector('canvas.webgl')

// const cursor = document.querySelector('.cursor')
// const cursorCross = document.querySelector('.crossContainer')
// const links = document.querySelectorAll('a')



//     gsap.to('.headline', {
//         '--wght': 600,
//         repeat: -1,
//         stagger: {
//             yoyo: true,
//             from: 'start',
//             each: 0.2,
//             repeat: 1
//         },
//         ease: 'sine.out',

//         duration: 0.6,
//     });

// /* 
//     Animations
// */

//     // Reveal

//     const revealDelay = 0.4
//     const revealDuration = 1.5
//     const revealTotal = revealDelay + revealDuration
//     let shaderBegin = {value: 20}
//     let cursorValue = {value : 0}
//     gui.add(shaderBegin, 'value').min(0).max(100).step(1)

//     // Landing
//     gsap.to(shaderBegin,
//         {
//             delay: revealDelay,
//             duration: 3,
//             value: 0,
//             ease: 'Power1.easeInOut'
//         })

//     gsap.from(".navLinks span",
//     {
//         delay: 0.4,
//         duration: 1,
//         x: -30,
//         skewX: 2,
//         stagger:{
//             amount: -1,
//             ease: 'Power0.easeInOut'
//         },
//         opacity: 0,
//         ease: "Power2.easeOut",
//     })

//     gsap.from(".headline",
//     {
//         delay: 0.4,
//         duration: 1,
//         x: 50,
//         skewX: 2,
//         stagger:{
//             amount: 1,
//             ease: 'Power0.easeInOut'
//         },
//         opacity: 0,
//         ease: "Power2.easeOut",
//     })

//     // Animation lettre titre

//     titleLetters.forEach(letter => letter.addEventListener('mouseover', () => letterAnimation(letter)))
//     /* linkLetters.forEach(letter => letter.addEventListener('mouseover', () => letterAnimation(letter))) */

//     function letterAnimation(letter)
//     {
//         let randomNumber = (Math.random() * 20) - 10
//         gsap.to(letter,
//             {
//                 y : randomNumber,
//                 duration: 0.4,
//                 ease: 'Bounce.easeOut',
//             })
//         letter.addEventListener('mouseleave', () =>
//         {
//             gsap.to(letter,
//                 {
//                     y : 0,
//                     duration: 0.4,
//                     ease: 'Bounce.easeOut'
//                 })
//         })
//     }
    

//     // Rotation svg 'scroll down'

//     const scrollIndicator = document.getElementsByClassName('scrollIndicator')

//     gsap.to(scrollIndicator, 
//         {
//             rotation:"360",
//             ease: 'none',
//             duration: 10,
//             repeat:-1,
//         });

//     gsap.from(scrollIndicator,
//         {
//             delay: revealTotal + 1.4,
//             opacity: 0,
//             duration: 2,
//             ease: 'easeInOut'
//         })

// // Loader
// const gltfLoader = new GLTFLoader()
// const textureLoader = new THREE.TextureLoader()

// // Scene
// const scene = new THREE.Scene()

// /**
//  * 3D Models
//  */

// let sj = false
// let mixer = false

// // Logo Material
// const logoMaterial = new THREE.MeshLambertMaterial({ 
//     color: 0xffffff,
//     combine: THREE.MixOperation,
//     reflectivity: 0.7
// })

// const sectionGroup = new THREE.Object3D()
// sectionGroup.applyMatrix4( new THREE.Matrix4().makeTranslation(0, 0, 3) )
// scene.add(sectionGroup)

// const logoGroup = new THREE.Group()
// sectionGroup.add(logoGroup)

// gui.add(logoMaterial, 'reflectivity').min(0.8).max(1.1).step(0.001)

// gltfLoader.load(
//     'models/logo/logo.gltf',
//     (gltf) =>
//     {
//         sj = gltf.scene

//         const logoScale = 0.03
//         sj.scale.set(logoScale, logoScale, logoScale)
//         sj.position.x = 0

//         sj.rotation.set(-0.409, 0.452, 0.206)

//         sj.traverse((child) => {
//             if (child.isMesh) child.material = logoMaterial; 
//         });

//         logoGroup.position.set(0,0, -2.8)
//         logoGroup.add(sj)

//         logoGui.add(sj.rotation, 'x').min(-5).max(5).step(0.001).name('rotation x')
//         logoGui.add(sj.rotation, 'y').min(-5).max(5).step(0.001).name('rotation y')
//         logoGui.add(logoGroup.rotation, 'y').min(-5).max(5).step(0.001).name('group rotation y')
//         logoGui.add(sj.rotation, 'z').min(-5).max(5).step(0.001).name('rotation z')

//         const testSquare = new THREE.Mesh(
//             new THREE.BoxGeometry(0.3,0.3,0.3),
//             logoMaterial
//         )
//         testSquare.position.set(sj.position.x, sj.position.y, sj.position.z + 3)
//         const testSphere = new THREE.Mesh(
//             new THREE.SphereGeometry(0.3, 32, 32),
//             logoMaterial
//         )
//         testSphere.position.set(0 ,3 ,0)

//         sectionGroup.add(testSphere)

//         sectionGroup.add(testSquare)
//     }
// )

// let questionBlock 
// gltfLoader.load(
//     'models/about/scene.gltf',
//     (gltf) =>
//     {
//         questionBlock = gltf.scene
//         questionBlock.scale.set(0.0015, 0.0015, 0.0015)
//         questionBlock.position.set(0, -3, 0)
//         sectionGroup.add(questionBlock)
//         questionBlock.traverse((child) => {
//             if (child.isMesh && child.name !== '1003_?_0') child.material = logoMaterial
//         });

//         gui.add(questionBlock.rotation, 'x').min(-5).max(5).step(0.001)
//     }
// )

// /* 
//     Objects
//  */

// // Background Object

// let uColor1 = new THREE.Vector3(20./255., 28./255., 42./255.)
// let uColor2 = new THREE.Vector3(54./255., 65./255., 79./255.)
// let uColor3 = new THREE.Vector3(206./255., 203./255., 197./255.)

// const geometry = new THREE.SphereGeometry(2.5, 32, 32)
// const material = new THREE.ShaderMaterial({
//     precision: 'lowp',
//     extensions: {
//       derivatives: "#extension GL_OES_standard_derivatives : enable"
//     },
//     side: THREE.DoubleSide,
//     uniforms: {
//       time: { value: 0 },
//       resolution: { value: new THREE.Vector4() },
//       uBasePatternLines: { value : 0.6},
//       uSecondPatternLines: { value : 0.15},
//       uBaseUv : {value : 0.04},
//       uFracMultiplier : {value : 35.0},
//       uColor1 : { value : uColor1},
//       uColor2 : { value : uColor2},
//       uColor3 : { value : uColor3},
//       uBasePattern : { value : new THREE.Line(0.04, 0.15)}
//     },
//     // wireframe: true,
//     // transparent: true,
//     vertexShader: vertex,
//     fragmentShader: fragment1
//   });

// uGui.add(
//         material.uniforms.uBasePatternLines, 'value').
//             min(0.0).
//             max(1.0).
//             step(0.001).
//             name('uBasePatternLines')

// uGui.add(
//         material.uniforms.uSecondPatternLines, 'value').
//             min(0.0).
//             max(1.0).
//             step(0.001).
//             name('uSecondPatternLines')

// uGui.add(
//         material.uniforms.uBaseUv, 'value').
//             min(0.0).
//             max(0.3).
//             step(0.001).
//             name('uBaseUv')



// const sphere = new THREE.Mesh(
//     geometry,
//     material
// )
// sphere.visible = true
// scene.add(sphere)

// /* 

//     RayCasting

// */
// let currentIntersect = null
// const raycaster = new THREE.Raycaster()

// function handleArticleReveal()
// {
//     if(currentIntersect && sj && questionBlock)
//     {
//         const currentObject = currentIntersect.object.name
//         switch(true)
//         {
//             // S logo
//             case currentObject.includes('Curve'):
//                 gsap.to(sj.children[1].rotation,
//                     {
//                         x: sj.children[1].rotation.x + (Math.PI * 2),
//                         duration: 1.75,
//                         ease: 'Power2.easeInOut'
//                     })
                
//                 break

//             // Question Block
//             case currentObject.includes('1003'):
//                 articleOpeningAnim()
//                 break
//         }
//     }
// }

// function articleOpeningAnim()
// {
//     articleActive = true
//     gsap.timeline(

//         gsap.to(article,
//             {
//                 display:'flex'
//             }),

//         gsap.to('.reveal1',
//         {
//             top: '0%',
//             duration: 0.5,
//         }),

//         gsap.to('.reveal2',
//         {
//             bottom: '0%',
//             duration: 0.5,
//         }),

//         gsap.from('.aboutSectionTitle h1',
//         {
//             y: -300,
//             delay: .5,
//             duration: .5,
//             stagger: {
//                 amount:.5,
//             },
//         }),
//         gsap.to('.aboutSectionTitle h1',
//         {
//             delay: 1.7,
//             duration: .5,
//             color: '#303846',
//         })
//     )
//     cursor.style.border = "2px solid #303846"
// }

// /* 
//     Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff)
// scene.add(ambientLight)

// /**
//  * Sizes
//  */
// const width = window.innerWidth
// const height = window.innerHeight

// const sizes = {
//     width: width,
//     height: height
// }

// window.addEventListener('resize', onWindowResize)
// function onWindowResize() {

//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();

//     renderer.setSize( window.innerWidth, window.innerHeight );
//     composer.setSize( window.innerWidth, window.innerHeight );
// }

// /**
//  * Camera
//  */
// const cameraGroup = new THREE.Group()
// scene.add(cameraGroup)
// const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
// camera.position.z = 1.5
// cameraGroup.add(camera)
// gui.add(camera.position, 'z').min(0).max(5).step(0.001)
// gui.add(camera.rotation, 'x').min(-3).max(5).step(0.001)
// gui.add(camera.rotation, 'y').min(0).max(5).step(0.001)
// // CubeCamera
// const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );
// const cubeCamera = new THREE.CubeCamera(1, 10, cubeRenderTarget); 
// scene.add(cubeCamera);

// // Enable reflection on logoMaterial
// logoMaterial.envMap = cubeRenderTarget.texture


// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */

// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     powerPreference: 'default',
//     alpha: true,
//     opacity: 0
// })

// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// // Post Processing
// const composer = new EffectComposer(renderer)

// composer.setSize(sizes.width, sizes.height)
// composer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// composer.addPass( new RenderPass(scene, camera))
// const effect1 = new ShaderPass(DotScreenShader)
// effect1.uniforms['scale'].value = 4;
// composer.addPass(effect1);


// /**
//  * Animate
//  */

//     // Animations based on mousemove
//     const cursorPosition = new THREE.Vector2()
//     const cursorRaycaster = new THREE.Vector2()

//     let mouseY = window.innerHeight / 2

//     // Cursor positions
//     window.addEventListener('mousemove', (e) => 
//     {
//         e.preventDefault()
//         cursorPosition.x = e.clientX
//         cursorPosition.y = e.clientY

//         cursorRaycaster.x = e.clientX / sizes.width * 2 - 1
//         cursorRaycaster.y = - (e.clientY / sizes.height) * 2 + 1
            
//         cursor.style.left = cursorPosition.x + 'px'
//         cursor.style.top = cursorPosition.y + 'px'
//     })



//     setTimeout(() =>
//     {
//         window.addEventListener('mousemove', (e) =>
//         {
//             mouseY = Math.abs(e.clientY / sizes.height)
//             gsap.to(cursorValue,
//             {
//                 duration: 0.75,
//                 ease: 'Power1.easeOut',
//                 value: mouseY
//             })
//         })
//     }
//     ,revealTotal * 1000)

//     // Handle cursor style changes on events
//     let hovering3dObject = false

//     links.forEach(link =>
//     { 
//             link.addEventListener('mouseover', () =>
//         {
//             cursor.classList.add('hover')
//         })
//             link.addEventListener('mouseleave', () =>
//         {
//             cursor.classList.remove('hover')
//         })
//     })

//     let scrollY = window.scrollY
//     let sectionTimeOut = true
//     let scrollRotation = 0
//     let responsiveY
//     window.addEventListener('wheel', (e)  => sectionTimeOut && !articleActive && sectionWheel(e))
//     window.addEventListener('keydown', (e)  => sectionTimeOut && !articleActive && sectionKey(e))

//     window.addEventListener('touchstart', (e) => 
//     {
//         responsiveY = e.changedTouches[0].clientY
//         cursorRaycaster.x = e.changedTouches[0].clientX / sizes.width * 2 - 1
//         cursorRaycaster.y = - (e.changedTouches[0].clientY / sizes.height) * 2 + 1
//     })
//     window.addEventListener('touchmove', (e) => sectionTimeOut && !articleActive && sectionMobile(e))

//     function sectionMobile(e)
//     {
//         e.changedTouches[0].clientY >responsiveY ? scrollRotation -=1 : scrollRotation +=1
//         let delayTime = 800
//         handleSectionChange(delayTime)
//     }

//     function sectionWheel(e)
//     {
//         e.deltaY > 0 ? scrollRotation += 1  : scrollRotation -=1 
//         handleSectionChange()
//     }

//     function sectionKey(e)
//     {
//         e.key == 'ArrowUp' ? scrollRotation -=1 : null
//         e.key == 'ArrowDown' ? scrollRotation +=1 : null

//         handleSectionChange()
//     }

//     function handleSectionChange(delayTime)
//     {
//         sectionTimeOut = false

//         gsap.to(sectionGroup.rotation,
//             {
//                 x : (0.5 * Math.PI) * scrollRotation,
//                 duration: 1,
//                 delay:0,
//                 ease: 'Power1.easeInOut'
//             })

//         delay(delayTime)
//     }

//     const delay = (delayTime) => setTimeout(() => sectionTimeOut = true, delayTime || 1500)


// const clock = new THREE.Clock()


// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()

//     // Render
//     renderer.render(scene, camera)

//     // Render shader reflection on meshes
//     logoMaterial.visible = false
//     cubeCamera.update( renderer, scene );
//     logoMaterial.visible = true

//     // Raycasting

//     raycaster.setFromCamera(cursorRaycaster, camera)
//     if(sj, questionBlock)
//     {
//         const objectsToTest = [sj, questionBlock]
//         const intersects = raycaster.intersectObjects(objectsToTest)
        
//         if(intersects.length)
//         {
//             if(!currentIntersect && !articleActive)
//             {
//                 hovering3dObject = true

//                 cursor.classList.add('hover3d')
//                 cursorCross.classList.add('hover3d')
//             }
    
//             currentIntersect = intersects[0]
//         }
//         else
//         {
//             if(currentIntersect)
//             {
//                 hovering3dObject = false
//                 console.log(hovering3dObject)
//                 cursor.classList.remove('hover3d')
//                 cursorCross.classList.remove('hover3d')
//                 window.addEventListener('click', (e) => !articleActive && hovering3dObject && handleArticleReveal(e))
//                 window.addEventListener('touchstart', handleArticleReveal)
//                 console.log(hovering3dObject)
//             }
//             currentIntersect = null
//         }
//     }



//     // Logo 3D model
//     sectionGroup.position.y = (Math.cos(elapsedTime) / 20)

//     if(sj)
//     {
//         logoGroup.rotation.y = (Math.sin(elapsedTime * 0.8) / 5) - 0.2
//     }

//     if(questionBlock)
//     {
//         questionBlock.rotation.x = (Math.sin(elapsedTime * 0.5) / 8) - 1.5
//         questionBlock.rotation.y = Math.cos(elapsedTime * 0.7) / 3
//     }

//     cameraGroup.position.y = -scrollY / sizes.height 

//     // Animation Shaders Texture
//     sphere.rotation.x = elapsedTime / 20
//     material.uniforms.uFracMultiplier.value = ((Math.sin(elapsedTime / 10) * 10) + 35) + (cursorValue.value * 5) - shaderBegin.value

//     /* controls.update() */

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
//     composer.render()
// }


// tick()