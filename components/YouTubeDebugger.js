const React = require('react')

class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.handleBitrateClick = this.handleBitrateClick.bind(this)
    this.handleResClick = this.handleResClick.bind(this)

  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}></button>
        <button className="resolution" onClick={this.handleResClick}></button>
      </div>
    )
  }

  handleBitrateClick(event){
    this.setState({
      settings: Object.assign({}, this.state.settings, { bitrate: 12 })
    })
  }

  handleResClick(event){
    this.setState({
      settings: Object.assign({}, this.state.settings, { video: { resolution: '720p' } })
    })
  }

}    //END YouTubeDebugger

module.exports = YouTubeDebugger
