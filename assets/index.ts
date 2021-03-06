import MediaPlayer from "./MediaPlayer"
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"

const $video = document.querySelector("video")
const $button = document.querySelectorAll("button")

const player = new MediaPlayer({
    el: $video, 
    plugins:[ new AutoPlay(), new AutoPause()]
})

$button[0].onclick = ()=> player.toggle()
$button[1].onclick = ()=> player.toggleMute()

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/sw.js").catch(error => console.log(error.message))
}