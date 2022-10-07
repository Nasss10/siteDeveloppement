import * as THREE from 'three'
import Experience from "../Experience";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

export default class CubeCamera
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.renderer = this.experience.renderer
        this.debug = this.experience.debug

        this.setInstance()
        this.setMaterial()
    }

    setMaterial()
    {
        this.hdrEquirect = new RGBELoader().load(
            "images/studio.hdr",  
            () => { 
              this.hdrEquirect.mapping = THREE.EquirectangularReflectionMapping; 
            }
        )

        this.textureLoader = new THREE.TextureLoader()
        this.normalMap = this.textureLoader.load('images/normalMap.jpeg')
        this.normalMap.minFilter = THREE.LinearMipMapNearestFilter;
        this.normalMap.magFilter = THREE.LinearMipMapNearestFilter;
        this.normalScaleObj = {
            value: 6
        }

        // this.material = new THREE.MeshBasicMaterial(
        //     {
        //         color: 0xF5F5F5,
        //         reflectivity: 0.9,
        //         transparent: true,
        //         combine: THREE.MixOperation,
        //         envMap: this.hdrEquirect,
        //         specularMap: this.hdrEquirect
        //     }
        // )

        this.material = new THREE.MeshPhysicalMaterial(
            {
                // color: 0xB5B5B5,
                emissive: 0x212121,
                roughness: .2,
                transmission: 1,
                thickness: 1,
                reflectivity: 0.6555,
                envMap: this.hdrEquirect,
                envMapIntensity: 4,
                clearcoat: 0.6,
            }
        )

        if(this.debug.active)
        {
            this.debug.gui.addColor(this.material, 'color').min(0).max(10).step(0.001)
            this.debug.gui.addColor(this.material, 'emissive').min(0).max(10).step(0.001)
            this.debug.gui.add(this.material, 'roughness').min(0).max(10).step(0.001)
            this.debug.gui.add(this.material, 'transmission').min(0).max(1).step(0.001)
            this.debug.gui.add(this.material, 'thickness').min(0).max(1).step(0.001)
            this.debug.gui.add(this.material, 'reflectivity').min(0).max(10).step(0.001)
            this.debug.gui.add(this.material, 'envMapIntensity').min(0).max(10).step(0.001)
            this.debug.gui.add(this.material, 'clearcoat').min(0).max(10).step(0.001)
            // this.debug.gui.add(this.material, 'clearcoatRoughness').min(0).max(1).step(0.001)
            // this.debug.gui.add(this.normalScaleObj, 'value').min(0).max(10).step(0.001).onChange(() => this.material.normalScale = new THREE.Vector2(this.normalScaleObj.value, this.normalScaleObj.value))
        }


        this.material.envMap = this.target.texture
    }

    setInstance()
    {
        this.target = new THREE.WebGLCubeRenderTarget( 128, { generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } )
        this.instance = new THREE.CubeCamera(1, 10, this.target)
        
        this.scene.add(this.instance)
    }

    setDebug()
    {
        if(this.debug.active)
        {
            this.cubeGui = this.debug.gui.addFolder('CubeCamera')

            this.cubeGui
                .add(this.material, 'reflectivity')
                .name('Mat Rflcty')
                .min(0)
                .max(1.3)
                .step(0.001)
        }
    }

    update()
    {
        this.material.visible = false
        this.instance.update(this.renderer.instance, this.scene)
        this.material.visible = true
    }
}