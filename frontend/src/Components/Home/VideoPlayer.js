import React, {Component} from 'react'
import { render } from 'react-dom'
import ReactAwesomePlayer from 'react-awesome-player'

class VideoPlayer extends Component {
  state = {
    options: {
      poster: "http://pic2.52pk.com/files/130514/1283314_143556_2145.jpg",
      sources: [{
        type: "video/mp4",
        src: "https://www.porntrex.com/get_file/10/4d5b90f0bd7b6252a22aa60fab0bc19f6588004d02/923000/923902/923902_720p.mp4/"
      }],
      subtitles: [{
          language: 'zh',
          url: "https://feawesome.github.io/react-awesome-player/zh.vtt",
          label: "中文"
        },
        {
          language: 'en',
          url: "https://feawesome.github.io/react-awesome-player/en.vtt",
          label: "EN"
      }],
      defaultSubtitle: 'en'
    }
  }
  loadeddata() {
    console.log('loadeddata')
  }
  canplay() {
    console.log('canplay')
  }
  canplaythrough() {
    console.log('canplaythrough')
  }
  play() {
    console.log('play')
  }
  pause() {
    console.log('pause')
  }
  waiting() {
    console.log('waiting')
  }
  playing() {
    console.log('playing')
  }
  ended() {
    console.log('ended')
  }
  error() {
    console.log('error')
  }

  render () {
    const { options } = this.state
    return <ReactAwesomePlayer
      options={options}
      loadeddata={this.loadeddata}
      canplay={this.canplay}
      canplaythrough={this.canplaythrough}
      play={this.play}
      pause={this.pause}
      waiting={this.waiting}
      playing={this.playing}
      ended={this.ended}
      error={this.error}
    />
  }
}
export default VideoPlayer;