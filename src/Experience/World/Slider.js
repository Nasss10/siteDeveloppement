import * as THREE from 'three'
import sliderVertex from '../../shaders/sliderVertex.glsl'
import sliderFragment from '../../shaders/sliderFragment.glsl'
import Experience from '../Experience'

import img1 from '../../../static/images/slider/img1.jpg'
import img2 from '../../../static/images/slider/img2.jpg'
import img3 from '../../../static/images/slider/img3.jpg'
import img4 from '../../../static/images/slider/img4.jpg'
import img5 from '../../../static/images/slider/img5.jpg'
import dis from '../../../static/images/slider/disp.png'

export default class Slider
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.aspect = this.sizes.width / this.sizes.height
        this.debug = this.experience.debug
        
        this.sectionGroup = this.experience.world.sections.sectionGroup

        this.debugObject =
        {
            x: 0,
            y: 0,
            z: 2 * Math.PI
        }

        if(this.debug.active)
        {
            this.debug.gui.add(this.debugObject, "x").min(0).max(12)
            this.debug.gui.add(this.debugObject, "y").min(0).max(12)
            this.debug.gui.add(this.debugObject, "z").min(0).max(12)
        }
        
        this.setNavigation()
        this.addObjects()
        this.updateMeshes()
    }

   

    setNavigation()
    {

        // Desktop Listeners
        this.isMouseDown = false

        window.addEventListener('mousedown', (e) => 
        {
            this.isMouseDown = true
            this.clientX = e.clientX
        })
        window.addEventListener('mouseup', () => this.isMouseDown = false)

        window.addEventListener('mousemove', (e) => 
        {
            this.isMouseDown && this.setDirection(e)
        })

        // Responsive Listener
        window.addEventListener('touchstart', (e) => this.touchstart = e.changedTouches[0].clientX)
        window.addEventListener('touchmove', (e) => this.setDirection(e))

        this.setDirection = (e) =>
        {
            // Desktop Navigation
            if(e.movementX)
            {
                this.scrollTarget = e.movementX
            }

            // Mobile Navigation
            else if(e.changedTouches)
            {
                e.changedTouches[0].clientX < this.touchstart ? this.scrollTarget = -e.changedTouches[0].clientX * .3 : this.scrollTarget = e.changedTouches[0].clientX * .3
            }
        }
    }

    addObjects() {
         // Meshes
         this.meshes = []
         this.geometry = new THREE.PlaneGeometry(1.5, 1.2)
         const images = [img1, img2, img3, img4, img5]
         const textures = images.map(img => new THREE.TextureLoader().load(img))
         this.projects = 5
 
         for(let i = 0; i < this.projects; i++)
         {
             const shaderMesh = new THREE.Mesh(
                 this.geometry,
                 this.material = new THREE.MeshBasicMaterial(
                    {
                    //    vertexShader: sliderVertex,
                    //    fragmentShader: sliderFragment,
                    //    uniforms: 
                    //    {
                    //     uTexture: {value : textures[i] /* textures[i%textures.length] */},
                    //     uAlpha: {value: 0.0},
                    //     uOffset: {value: new THREE.Vector2(0.0, 0.0)},
                    //     uScroll: {value : this.scroll}
                    //   }
                        map: textures[i%textures.length]
                    })
                 )
                 
             this.meshes.push({shaderMesh, index: i})
             this.sectionGroup.add(shaderMesh)
         }

         // Copy Slider
 
         this.margin = 2.1
         this.sliderWidth = this.projects*this.margin
         this.scroll = 0.0
         this.currentScroll = 0
         this.scrollTarget = 0
      }

      

      updateMeshes(){
        this.wholeWidth = this.n*this.margin;
      }

      update()
      {
        this.meshes.forEach( obj => 
            {
                    obj.shaderMesh.position.y = -3
                    obj.shaderMesh.lookAt(this.debugObject.x, this.debugObject.y, this.debugObject.z)
                    obj.shaderMesh.position.x =( this.margin * obj.index + this.currentScroll + 42069*this.sliderWidth)%this.sliderWidth - 2*this.margin

                    //obj.shaderMesh.material.uniforms.uOffset.value.set((this.scroll) * 5 , -(this.scroll) * 5 )
            })
        this.scroll += (this.scrollTarget - this.scroll)*0.1
        this.scroll *=0.9;
        this.scrollTarget *=0.9;
        this.currentScroll +=this.scroll*0.01;
      }
}