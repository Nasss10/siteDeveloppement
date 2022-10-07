import * as THREE from 'three'
import Experience from "../Experience"

export default class Renderer
{
    constructor()
    {
        this.experience = new Experience()

        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.aspect = this.sizes.width / this.sizes.height
        this.camera = this.experience.camera
        this.scene = this.experience.scene

        this.renderTarget = new THREE.WebGLRenderTarget(
            this.sizes.width,this.sizes.height,
            {
              format: THREE.RGBAFormat,
              magFilter: THREE.NearestFilter,
              minFilter: THREE.NearestFilter,
            })
      
        this.renderTarget1 = new THREE.WebGLRenderTarget(
            this.sizes.width,this.sizes.height,
            {
            format: THREE.RGBAFormat,
            magFilter: THREE.NearestFilter,
            minFilter: THREE.NearestFilter,
            })



        this.backgroundQuad = new THREE.Mesh(
            new THREE.PlaneGeometry(4*this.aspect,4),
            new THREE.MeshBasicMaterial({
                // transparent: true
            })
            )
        this.backgroundQuad.position.z = -0.5
        this.scene.add(this.backgroundQuad)


        this.setInstance()
    }

    setInstance()
    {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            powerPreference: 'default',
            alpha: true,
            opacity: 0
        })
        this.instance.setSize( this.sizes.width, this.sizes.height )
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    resize()
    {
        this.instance.setSize( this.sizes.width, this.sizes.height )
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }
    update()
    {
    }
}