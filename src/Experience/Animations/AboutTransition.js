import gsap from 'gsap'
import Experience from "../Experience";

export default class AboutTransition
{
    constructor()
    {
        this.section = document.querySelector('.about__section')

        this.revealHalfUp = document.querySelector('.about__reveal__up')
        this.revealHalfDown = document.querySelector('.about__reveal__down')

        this.experience = new Experience()
    }

    open()
    {
        console.log(this.section)
        gsap.timeline()
            .set(
                [this.section, '.about__section__main'],
                {
                    display: 'none'
                })
            .set(
                this.revealHalfUp,
                {
                    y: '-100%'
                }
            )
            .set(
                this.revealHalfDown,
                {
                    y: '100%'
                }
            )

            .to(
                this.section,
                {
                    display: 'block',

                })
            .to(
                [this.revealHalfUp, this.revealHalfDown],
                {
                    y: 0,
                    duration: 1,
                    ease: 'Power3.inOut'
                })


            .set(
                '.about__section__main',
                {
                    display: 'block',
                    opacity: 0
                }
            )
            .to(
                '.about__section__main',
                {
                    opacity: 1,
                    duration: .5,
                    ease: 'Power3.inOut',
                    stagger:
                    {
                        amount: 2
                    }
                }
            )
            .to(
                '.about__hider',
                {
                    y: '100%;'
                }
            )

            
    }       
    
    close()
    {

    }
}