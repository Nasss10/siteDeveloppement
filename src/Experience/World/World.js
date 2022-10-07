import Experience from "../Experience.js"
import AnimatedSphere from './AnimatedSphere.js'
import Environment from './Environment.js'
import Sections from './Sections.js'
import Slider from "./Slider.js"

export default class World
{
    constructor()
    {
        this.experience = new Experience()

        this.scene = this.experience.scene
        this.resources = this.experience.resources
        

        this.resources.on('ready', () =>
        {
            // Setup
            this.animatedSphere = new AnimatedSphere()
            this.sections = new Sections()
            this.slider = new Slider()
            this.environment = new Environment()
        })
    }

    resize()
    {
        this.animatedSphere.resize()
    }

    update()
    {
        if(this.animatedSphere)
        {
            this.animatedSphere.update()
        }
        if(this.sections)
        {
            this.sections.update()
        }
        if(this.slider)
        {
            this.slider.update()
        }
    }
}