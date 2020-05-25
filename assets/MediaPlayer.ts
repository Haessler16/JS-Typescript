class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>

  constructor(config: any) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlugin();
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  toggle() {
    if (this.media.paused) {
      this.play();
    }
    else {
      this.pause();
    }
  }

 private initPlugin() {
    // const player = {
    //   play: () => this.play(),
    //   pause: () => this.pause(),
    //   media: this.media,
    //   get muted() {
    //     return this.media.muted;
    //   },
    //   set muted(value) {
    //     this.media.muted = value;
    //   }
    // };
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    if (this.media.muted) {
      this.unmute();
    }
    else {
      this.mute();
    }
  }
}

export default MediaPlayer