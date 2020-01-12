import React from "react";
import { init } from "./youtube-loader";

/**
 * Event driven Youtube Player
 */
class YouTubePlayer extends React.Component {
  YTEvents = [
    "onReady",
    "onStateChange",
    "onPlaybackQualityChange",
    "onPlaybackRateChange",
    "onError"
  ];

  intervalMarker = null;

  /**
   * create when mounted
   */
  componentDidMount() {
    this.createPlayer();
  }

  componentDidUpdate(prevProps) {
    const changes = Object.keys(this.props).filter(
      name => this.props[name] !== prevProps[name]
    );
    this.updateProps(changes);
  }

  componentWillUnmount() {
    if (this.playerInstance) {
      this.playerInstance.destroy();
    }
  }

  findLastMarker = (markers, curTime, nextTime) => {
    const total = markers.length;
    for (let i = 1; i < total; i++) {
      if (markers[i] > curTime && markers[i] <= nextTime) {
        return {
          curStart: markers[i - 1],
          nextStart: markers[i]
        };
      }
    }
    return null;
  }

  /**
   * Youtube Player native event: onPlayerStateChange
   */
  onPlayerStateChange = event => {
    const {
      onCued,
      onBuffering,
      onPause,
      onPlaying,
      onEnd,
      pingInterval,
      markers,
      onSpeechChange
    } = this.props;

    const State = window.YT.PlayerState;

    //trigger event when speech changes
    if (markers !== null && markers.length > 0) {
      if (event.data === State.PLAYING) {
        this.intervalMarker = setInterval(() => {
          let currentTime = event.target.getCurrentTime();
          const marker = this.findLastMarker(markers, currentTime, currentTime + pingInterval / 1000);

          if (marker != null) {
            onSpeechChange && onSpeechChange(marker.nextStart);
          }
        }, pingInterval);
      } else {
        clearInterval(this.intervalMarker);
      }
    }

    switch (event.data) {
      case State.CUED:
        onCued(event);
        break;
      case State.BUFFERING:
        onBuffering(event);
        break;
      case State.PAUSED:
        onPause(event);
        break;
      case State.PLAYING:
        onPlaying(event);
        break;
      case State.ENDED:
        onEnd(event);
        break;
      default:
    }
  };

  getInitialOptions = () => {
    return {
      videoId: this.props.video,
      width: this.props.width,
      height: this.props.height,
      playerVars: {
        autoplay: this.props.autoplay,
        cc_load_policy: this.props.showCaptions ? 1 : 0,
        controls: this.props.controls ? 1 : 0,
        disablekb: this.props.disableKeyboard ? 1 : 0,
        fs: this.props.allowFullscreen ? 1 : 0,
        hl: this.props.lang,
        iv_load_policy: this.props.annotations ? 1 : 3,
        start: this.props.startSeconds,
        end: this.props.endSeconds,
        modestbranding: this.props.modestBranding ? 1 : 0,
        playsinline: this.props.playsInline ? 1 : 0,
        rel: this.props.showRelatedVideos ? 1 : 0,
        showinfo: this.props.showInfo ? 1 : 0
      },
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange
      }
    };
  };

  updateProps = propNames => {
    this.player.then(player => {
      propNames.forEach(name => {
        const value = this.props[name];
        switch (name) {
          case "muted":
            if (value) {
              player.mute();
            } else {
              player.unMute();
            }
            break;
          case "suggestedQuality":
            player.setPlaybackQuality(value);
            break;
          case "volume":
            player.setVolume(value * 100);
            break;
          case "paused":
            if (value && player.getPlayerState() !== 2) {
              player.pauseVideo();
            } else if (!value && player.getPlayerState() === 2) {
              player.playVideo();
            }
            break;
          case "id":
          case "className":
          case "width":
          case "height":
            player.getIframe()[name] = value;
            break;
          case "video":
            if (!value) {
              player.stopVideo();
            } else {
              const { startSeconds, endSeconds, autoplay } = this.props;
              const opts = {
                videoId: value,
                startSeconds: startSeconds || 0,
                endSeconds
              };
              if (autoplay) {
                player.loadVideoById(opts);
              } else {
                player.cueVideoById(opts);
              }
            }
            break;
          case "playAt":
            if (value) {
              const pos = parseFloat(value.split("|")[0]);
              player.seekTo(pos);
            }
            break;
          case "command":
            const actual = value.split("|")[0];
            switch (actual) {
              case "play":
                player.playVideo();
                break;
              case "pause":
                player.pauseVideo();
                break;
              case "reset":
                player.seekTo(0);
                player.playVideo();
                break;
              case "stop":
                player.stopVideo();
                break;
              default:
            }
            break;
          default:
        }
      });
    });
  };

  createPlayer = () => {
    const { volume } = this.props;

    // trigger first event: Player Loading
    this.player = init().then(
      YT =>
        new Promise(resolve => {
          // to resolve when the player is ready
          this.resolvePlayer = resolve;

          const player = new YT.Player(
            this.container,
            this.getInitialOptions()
          );
          this.playerInstance = player;

          this.YTEvents.forEach(name => {
            player.addEventListener(name, event => {
              const handler = this.props[name];
              if (handler) {
                handler(event);
              }
            });
          });
        })
    );

    if (typeof volume === "number") {
      this.updateProps(["volume"]);
    }
  };

  /**
   * Youtube Player native event: onPlayerReady
   */
  onPlayerReady = event => {
    const { volume, muted, suggestedQuality, playbackRate } = this.props;

    if (typeof volume !== "undefined") {
      event.target.setVolume(volume * 100);
    }
    if (typeof muted !== "undefined") {
      if (muted) {
        event.target.mute();
      } else {
        event.target.unMute();
      }
    }
    if (typeof suggestedQuality !== "undefined") {
      event.target.setPlaybackQuality(suggestedQuality);
    }
    if (typeof playbackRate !== "undefined") {
      event.target.setPlaybackRate(playbackRate);
    }

    // linked to 1st event (Player Loading), resolve to Youtube Player when it's ready
    this.resolvePlayer(event.target);
  };

  render() {
    const { id, className } = this.props;

    return (
      <div id={id} className={className} ref={el => (this.container = el)} />
    );
  }
}

YouTubePlayer.defaultProps = {
  autoplay: false,
  showCaptions: false,
  controls: true,
  disableKeyboard: false,
  allowFullscreen: true,
  annotations: true,
  modestBranding: false,
  playsInline: false,
  showRelatedVideos: true,
  showInfo: true,
  pingInterval: 100,
  playAt: null, //  7.591|1578150995863
  onCued: () => { },
  onBuffering: () => { },
  onPlaying: () => { },
  onPause: () => { },
  onEnd: () => { },
  onSpeechChange: null,
  markers: null,
  command: null
};

export default YouTubePlayer;
