import * as THREE from 'three'
import Experience from "../Experience";
import vertex from '../../shaders/vertex.glsl'
import fragment1 from '../../shaders/fragment1.glsl'

export default class AnimatedSphere
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes
        this.mouse = this.experience.mouseEvents

        this.setModel()
    }

    setModel()
    {
        let uColor1 = new THREE.Vector3(20./255., 28./255., 42./255.)
        let uColor2 = new THREE.Vector3(54./255., 65./255., 79./255.)
        let uColor3 = new THREE.Vector3(206./255., 203./255., 197./255.)

        this.geometry = new THREE.PlaneGeometry(/* 9*(this.sizes.width/this.sizes.height), 20, 20 */15*(this.sizes.width/this.sizes.height), 15)
        this.material = new THREE.ShaderMaterial({
            precision: 'lowp',
            extensions: {
            derivatives: "#extension GL_OES_standard_derivatives : enable"
            },
            side: THREE.DoubleSide,
            uniforms: {
            time: { value: 0 },
            resolution: { value: new THREE.Vector4() },
            uBasePatternLines: { value : 0.6},
            uSecondPatternLines: { value : 0.15},
            uBaseUv : {value : 0.04},
            uFracMultiplier : {value : 35.0},
            uColor1 : { value : uColor1},
            uColor2 : { value : uColor2},
            uColor3 : { value : uColor3},
            uBasePattern : { value : new THREE.Line(0.04, 0.15)}
            },
            // wireframe: true,
            // transparent: true,
            vertexShader: vertex,
            fragmentShader: fragment1
        });

        this.mesh = new THREE.Mesh(
            this.geometry,
            this.material
        )

        this.mesh2 = new THREE.Mesh(
            this.geometry,
            this.material
        )

        this.mesh.position.z = -.5
        this.mesh2.position.z = -2.36

        this.scene.add(this.mesh, this.mesh2)

        if(this.debug.active)
        {
            this.debug.gui.add(this.mesh2.position, 'z').min(-10).max(50).step(0.001).name('Plane 2')
        }
    }

    mousemove()
    {
        this.mousePos = Math.abs((this.mouse.instance.x / window.innerWidth) - .5) * Math.abs((this.mouse.instance.y / window.innerHeight) - .5) 
        this.mesh.position.x = -((this.mouse.instance.x / window.innerWidth) -.5)  * .5
        this.mesh.position.y = ((this.mouse.instance.y / window.innerHeight) -.5) * .5
    }

    update()
    {
        if(this.mousePos < 0)
        {
            this.mousePos = 2
        }
        // this.mesh.rotation.x = this.time.elapsed / 20
        this.mesh.material.uniforms.uFracMultiplier.value = ((Math.sin(this.time.elapsed / 10) * 20) + 35)

        console.log(this.mousePos)
    }

    resize()
    {

    }

    setDebug()
    {
        if(this.debug.active)
        {
            this.debugSphere = this.debug.gui.addFolder('Background Sphere')

            this.debugSphere.add(this.mesh.position, 'x').min(-10).max(10).step(0.001)
            this.debugSphere.add(this.mesh.position, 'y').min(-10).max(10).step(0.001)
            this.debugSphere.add(this.mesh.position, 'z').min(-10).max(10).step(0.001)
        }
    }
}