import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { DotScreenShader } from '../../DotScreenShader';
import Experience from "../Experience"

export default class Composer
{
    constructor()
    {
        this.experience = new Experience()

        this.debug = this.experience.debug
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.renderer = this.experience.renderer
        this.camera = this.experience.camera

        this.setInstance()
    }

    setInstance()
    {
        this.instance = new EffectComposer(this.renderer.instance)
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))

        this.renderPass = new RenderPass(this.scene, this.camera.instance)
        this.instance.addPass(this.renderPass)

        this.dotScreenPass = DotScreenShader
        this.shaderPass = new ShaderPass(this.dotScreenPass)
        this.instance.addPass(this.shaderPass)
    }

    update()
    {
        this.instance.render()
    }
}