import * as THREE from 'three'
import Experience from "../Experience"

export default class Sections
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.cubeCamera = this.experience.cubeCamera
        this.sizes = this.experience.sizes
        this.time = this.experience.time
        this.debug = this.experience.debug
        
        this.mobileDimension = 480

        this.setGroup()
        this.setLandingSection()
    }

    setGroup()
    {
        this.sectionGroup = new THREE.Object3D()
        this.sectionGroup.applyMatrix4( new THREE.Matrix4().makeTranslation(0, 0, 3) )
        this.sectionGroup.rotation.x = 0

        this.sizes.width > this.mobileDimension ? this.sectionGroup.position.x = -1 : null
        this.scene.add(this.sectionGroup)
    }

    setLandingSection()
    {
        this.resourceLanding = this.resources.items.logo
        
        // Setting up model
        this.landingModel = this.resourceLanding.scene

        const logoScale = .085
        this.landingModel.scale.set(logoScale, logoScale, logoScale)

        this.landingModel.rotation.set(-0.409, 0.452, 0.206)

        this.landingModel.traverse((child) => {
            child.userData = {sectionName: 'about'}
            if (child.isMesh) child.material = this.cubeCamera.material
            this.copyMaterial = child.material
        });

        this.landingModel2 = this.landingModel.clone()


        // 3D Model Group
        this.landingGroup = new THREE.Object3D()
        this.landingGroup2 = new THREE.Object3D()

        this.landingGroup.add(this.landingModel)
        this.landingGroup2.add(this.landingModel2)

        this.landingGroup.position.set(0,0,-3)
        this.landingGroup2.position.set(0,0,3)
        this.landingGroup2.rotation.x = Math.PI

        this.sectionGroup.add(this.landingGroup, this.landingGroup2)

        if(this.debug.active)
        {
            this.dbg = this.debug.gui.addFolder('Logo 2')
            this.dbg.add(this.landingModel2.rotation, 'x').min(0).max(6).step(0.001)
            this.dbg.add(this.landingModel2.rotation, 'z').min(0).max(6).step(0.001)
        }
    }

    setWorkSection()
    {
        this.testSquare = new THREE.Mesh(
            new THREE.SphereGeometry(0.3, 32, 32),
            this.cubeCamera.material
        )

        this.testSquare.position.set(0, 0, 3)
    }

    update()
    {
        this.sectionGroup.position.y = (Math.cos(this.time.elapsed) / 20)

        this.landingGroup.rotation.y = (Math.sin(this.time.elapsed * 0.8) / 6) - 0.2
        this.landingGroup2.rotation.y = (Math.sin(this.time.elapsed * 0.8) / 6) - 0.2

        // this.aboutModel.rotation.x = (Math.sin(this.time.elapsed * 0.5) / 8) - 1.5
        // this.aboutModel.rotation.y = Math.cos(this.time.elapsed * 0.7) / 3
    }
}