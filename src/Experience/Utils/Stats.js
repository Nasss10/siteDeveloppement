import Stats from 'stats.js'
export default class Stat
{
    constructor()
    {
        this.stats = new Stats()

        this.stats.showPanel( 0); // 0: fps, 1: ms, 2: mb, 3+: custom
        document.body.appendChild( this.stats.dom )
    }

    begin()
    {
        this.stats.begin()
    }

    end()
    {
        this.stats.end()
    }
}