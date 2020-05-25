import MediaPlayer from "../MediaPlayer"

class AutoPlay {
    player: MediaPlayer
    constructor() { }
    run(player:any) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    }
}


export default AutoPlay