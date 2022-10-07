import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from './Experience.js'

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()

        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()

    }

    setInstance()
    {
       this.aspect = this.sizes.width / this.sizes.height
       this.frustum = 3
        this.instance = new THREE.OrthographicCamera(
            -this.aspect * this.frustum / 2,
             this.aspect * this.frustum / 2,
             this.frustum / 2, 
             -this.frustum / 2,
             0.1, 
            1000 
        )
        this.instance.position.set(0, 0, 1)
        this.scene.add(this.instance)
        
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.newAspect = this.sizes.width / this.sizes.height
        this.instance.left = this.frustum * this.newAspect / -2
        this.instance.right = this.frustum * this.newAspect / 2
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        /* this.controls.update() */
    }
}