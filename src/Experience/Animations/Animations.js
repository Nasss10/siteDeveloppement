import gsap from 'gsap'
import AboutTransition from "./AboutTransition";

export default class Animations
{
    constructor()
    {
        this.about = new AboutTransition()

        this.handleAnimations()
    }

    handleAnimations()
    {
        this.scrollIndicator = document.querySelector('.scrollContainer')


        // Rotation

        gsap.to(this.scrollIndicator,
            {
                rotation: 180,
                duration: 6,
                repeat: -1,
                ease: 'none',
            })

        // Container bounce
        gsap.to(this.scrollIndicator, 
        {
            y: -50,
            duration: 1.2,
            repeat: -1,
            stagger: {
                yoyo:true,
                repeat: 1,
                delay: 4
            },
            ease: 'Power1.easeInOut'
        })

    }
}