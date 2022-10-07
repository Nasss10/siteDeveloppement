import gsap from 'gsap'
import Experience from "../Experience";
import EventEmitter from "./EventEmitter";

export default class ScrollEvents extends EventEmitter
{
    constructor()
    {
        super()

        this.experience = new Experience()
        this.eventEmitter = new EventEmitter()
        this.world = this.experience.world

        this.currentSection = 0
        this.isCurrentSection = 1
        this.isCurrentlySwitching = false
        
        this.allSections = document.querySelectorAll('.navigation_links')
        this.activeSection = document.querySelector(`.navigation_links:nth-child(${this.isCurrentSection})`)
        this.activeSection.style.fontWeight = '600'

        window.addEventListener('wheel', (e) => !this.isCurrentlySwitching && this.checkSection(e))

        window.addEventListener('touchstart', (e) => this.touchstart = e.changedTouches[0].clientY)
        window.addEventListener('touchmove', (e) => !this.isCurrentlySwitching && this.checkSection(e))
    }

    checkSection(e)
    {
        let switchSection = 0

        if(e.changedTouches) // Mobile
        {
            e.changedTouches[0].clientY < this.touchstart ? switchSection = 1 : switchSection = -1
            this.delayTime = 1000
        }
        else // Desktop
        {
            e.deltaY < switchSection ? switchSection = -1 : switchSection = 1
            this.delayTime = 1500
        }

        this.switchSection(switchSection)
    }

    switchSection(switchSection)
    {
        if(this.world.sections.sectionGroup)
        {
            this.isCurrentlySwitching = true
            this.currentSection += switchSection
            this.isCurrentSection += switchSection

            // test on which section is the user
            if(this.isCurrentSection > 4)
            {
                this.isCurrentSection -= 4
            }
            else if (this.isCurrentSection < 1)
            {
                this.isCurrentSection += 4
            }
            this.activeSection = document.querySelector(`.navigation_links:nth-child(${this.isCurrentSection})`)

             // Link Font-Weight
             this.allSections.forEach(section => 
                {
                    gsap.timeline()
                    .to(section,
                    {
                        fontWeight:100,
                    })
                    .to(this.activeSection,
                    {
                        fontWeight:600,
                    })
                })

            // Section's rotations
            gsap.to(this.world.sections.sectionGroup.rotation,
                {
                    x: (Math.PI * 0.5) * this.currentSection,
                    duration: 1.2,
                    ease: 'Power4.easeInOut'
                })


            this.hideScrollIndicator()
            setTimeout(() => this.isCurrentlySwitching = false, this.delayTime)
        }

    }

    hideScrollIndicator()
    {
        gsap.to('.scrollContainer',
        {
            opacity: 0,
            duration: .8,
            ease: 'Power0.easeIn',
            display: "none"
        })
    }
}