import * as THREE from 'three'
import Experience from "../Experience";
import { models } from '../sources';

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()


        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setAmbientLight()
        this.setDirectionalLight()
        this.setLogoMesh()
    }

    setAmbientLight()
    {
        this.ambientLight = new THREE.AmbientLight()
        this.scene.add(this.ambientLight)
    }

    setDirectionalLight()
    {
        this.directionalLight = new THREE.DirectionalLight(0xfff0dd, 0.7)
        this.directionalLight.position.set(0,0,2)

        
        this.scene.add(this.directionalLight)
    }

    setLogoMesh()
    {
        this.logoMesh = this.experience.resources[models.name == 'sj']
    }
}