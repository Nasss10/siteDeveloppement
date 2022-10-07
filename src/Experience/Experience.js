import * as THREE from 'three'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Utils/Renderer.js'
import Composer from './Utils/Composer.js'
import Resources from './Utils/Resources.js'
import { models, articles } from './sources.js'
import World from './World/World.js'
import CubeCamera from './Utils/CubeCamera'
import MouseEvents from './Utils/MouseEvents.js'
import ScrollEvents from './Utils/ScrollEvents.js'
import Raycaster from './Utils/Raycaster.js'
import Debug from './Utils/Debug.js'
import Animations from './Animations/Animations.js'
import Stats from './Utils/Stats.js'

let instance = null

export default class Experience
{
    constructor(canvas)
    { 
        if(instance)
        {
            return instance
        }

        instance = this

        // Global access
        window.experience = this

        // Datas
        this.articles = articles

        // Debug
        this.debug = new Debug()

        // Scene
        this.time = new Time()
        this.domAnimations = new Animations()
        this.canvas = canvas
        this.sizes = new Sizes()
        this.scene = new THREE.Scene()
        this.resources = new Resources(models, articles)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.cubeCamera = new CubeCamera()
        this.composer = new Composer()
        this.world = new World()

        // Animations
        this.animations = new Animations()

        // Events
        this.mouseEvents = new MouseEvents()
        this.scrollEvents = new ScrollEvents()
        this.raycaster = new Raycaster()

         // Resize event
         this.sizes.on('resize', () => this.resize() )

         // Time tick event
        this.time.on('tick', () => this.update() )

        // MouseMove event
        this.mouseEvents.on('mousemove', () => this.mousemove())

        this.stats = new Stats()
    }

    resize()
    {    
        this.sizes.resize()
        this.camera.resize()
        this.renderer.resize()
        this.world.resize()
    }

    update()
    {
        this.stats.begin()
        this.camera.update()
        this.cubeCamera.update()
        this.raycaster.update()
        this.world.update()
        this.composer.update()
        this.stats.end()
        /* this.renderer.update() */
    }

    mousemove()
    {
        this.mouseEvents.mousemove()
        this.raycaster.mousemove()
        this.world.animatedSphere.mousemove()
    }

}