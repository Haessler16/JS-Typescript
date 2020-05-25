import MediaPlayer from "../MediaPlayer"

class AutoPause{
    private threshold: number
    private player: MediaPlayer

    constructor(){
        this.threshold = 0.25
        this.handleIntersection = this.handleIntersection.bind(this)
        this.handleVisible = this.handleVisible.bind(this)
    }

    run(player: any){
        this.player = player

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })

        observer.observe(player.media)

        document.addEventListener("visibilitychange", this.handleVisible)
    }

   private handleIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0]
        const isVisible = entry.intersectionRatio >= this.threshold
        
        if(isVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }

   private handleVisible(){
        const isVisible = document.visibilityState === "visible"
        if(isVisible){
            this.player.play()
        }else{
            this.player.pause()
        }
    }
}

export default AutoPause