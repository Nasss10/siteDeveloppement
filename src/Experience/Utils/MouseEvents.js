import gsap from 'gsap'
import EventEmitter from './EventEmitter'

export default class MouseEvents extends EventEmitter
{
    constructor()
    {
        super()

        this.eventEmitter = new EventEmitter()

        this.instance = {}
        this.cursor = document.querySelector('.cursor')
        this.cursorText = document.querySelector('.cursorTextContainer')
        this.cursorCross = document.querySelector('.crossContainer')
        this.links = document.querySelectorAll('.navigation_link_item')

        window.addEventListener('mousemove', (e) =>
        {
            this.instance.x = e.clientX
            this.instance.y = e.clientY
            this.trigger('mousemove')
        })

        window.addEventListener('mouseover', (e) =>
        {
            this.mouseover(e)
        })

        window.addEventListener('click', (e) => 
        {
            this.handleMouseClick(e)
        })
    }

    mousemove()
    {

        // CSS Cursor position
        this.cursor.style.left = this.instance.x + 'px'
        this.cursor.style.top = this.instance.y + 'px'

        this.cursorText.style.left = this.instance.x + 30 + 'px'
        this.cursorText.style.top = this.instance.y + 20 + 'px'
    }

    mouseover(e)
    {
        if(e.path) 
        {
            this.hovered = e.path[1].classList.value
        }
        else if(e.target.className)
        {
            this.hovered = e.target.className
        }

        if(this.hovered)
       { 
            switch(true)
            {   
                // Cursor hovering link
                case this.hovered.includes('navigation_links'):
                    this.links.forEach(link =>
                        {
                            this.cursor.classList.add('hover')
                            link.addEventListener('mouseleave',(e) => this.mouseleave(e))
                        })
                
                break
            }
        }
    }

    mouseleave(e)
    {
        this.cursor.classList.remove('hover')
        this.cursor.classList.remove('hover3d')
    }

    handleMouseClick(e)
    {
        this.clickAnimationDuration = .2
        this.cursor.classList.add('click')
        
        setTimeout(() =>
        {
           this.cursor.classList.remove('click')

        }, this.clickAnimationDuration * 1000)

    }
}