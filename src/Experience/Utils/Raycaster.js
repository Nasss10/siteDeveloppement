import * as THREE from 'three'
import Experience from "../Experience";``

export default class Raycaster
{
    constructor()
    {
        this.experience = new Experience()

        this.mouseEvents = this.experience.mouseEvents
        this.sizes = this.experience.sizes
        this.camera = this.experience.camera
        this.resources = this.experience.resources
        this.animations = this.experience.animations
        this.world = this.experience.world

        this.isSectionActive = false
        this.setInstance()
    }

    setInstance()
    {
        this.instance = new THREE.Raycaster()

        this.currentIntersect = null
        this.hovering3dObject = null

        this.raycasterPosition = new THREE.Vector2
    }

    mousemove()
    {
        this.raycasterPosition.x = this.mouseEvents.instance.x / this.sizes.width * 2 - 1
        this.raycasterPosition.y = - (this.mouseEvents.instance.y / this.sizes.height) * 2 + 1
    }

    checkRaycast()
    {
        if(
            this.world.sections
        )
        {
             // Instance Tested Models
            if(this.world.sections.landingModel && this.world.sections.landingModel2)
            {
                this.logo = this.world.sections.landingModel
                this.logo2 = this.world.sections.landingModel2
            }

                // Objets affectés par le Raycaster 
            this.raycastingObjects = [this.logo, this.logo2]
            this.intersects = this.instance.intersectObjects(this.raycastingObjects)
        
            if(this.intersects.length && !this.isSectionActive)
            {
                if(!this.currentIntersect)
                {
                    this.mouseEvents.cursor.classList.add('hover3d')
                    this.mouseEvents.cursorCross.classList.add('hover3d')
                    this.cursorText = document.querySelector('.cursorText')

                    this.hovering3dObject = true
                    this.setCursorOnRaycast()
                }
        
                this.currentIntersect = this.raycastingObjects[0]
            }
            else
            {
                if(this.currentIntersect)
                {
                    this.hovering3dObject = false
                    this.mouseEvents.cursor.classList.remove('hover3d')
                    this.mouseEvents.cursorCross.classList.remove('hover3d')
                    this.cursorText.innerText = ''
                }
                this.currentIntersect = null
                this.sectionName = null
                window.addEventListener('click', (e) => !this.isSectionActive && this.sectionName && this.handleRaycastingEvents(e))
                window.addEventListener('touchend', (e) => !this.isSectionActive && this.sectionName && this.handleRaycastingEvents(e))
            }
        }
        this.instance.setFromCamera(this.raycasterPosition, this.camera.instance)
    }

    // add the section name under the cursor
    setCursorOnRaycast()
    {

        this.sectionName = this.intersects[0].object.userData.sectionName
        if(this.sectionName)
        {
            this.cursorText.innerText = this.experience.articles[this.sectionName].cursorPreview
        }
    }

    handleRaycastingEvents()
    {
            switch(true)
            {
                case this.sectionName === 'about':
                    if(!this.isSectionActive)
                    {
                        this.isSectionActive = true
                        this.animations.about.open()
                    }
        }
    }
    update()
    {
        this.checkRaycast()
        // this.raycastedObjects = [this.resource.items.logo]
        // this.intersects = this.instance.intersectObjects(this.raycastedObjects)
    }
}