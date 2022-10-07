import GUI from 'lil-gui'
export default class Debug
{
    constructor()
    {
      /*   this.canvas = document.querySelector('.section1')
        console.log(window.history)

        this.canvas.addEventListener('click',  () => 
        {
            let stateObj = { id: "200" };
            window.history.replaceState(stateObj,
                        "Page 3", "/works")
            console.log(window.history)
        }) */
        this.active = window.location.hash == '#debug'

        if(this.active)
        {
            this.gui = new GUI()
        }

        if(this.test)
        {
            if(!this.testFlag) window.location.reload
            this.testFlag = true
        }
    }
}