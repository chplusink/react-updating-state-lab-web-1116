const React = require('react')

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.state = {timesClicked: 0}
    this.handleClick = this.handleClick.bind(this)
  }
  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
  handleClick(event){
    this.setState({timesClicked: (this.state.timesClicked+=1)})
  }
}

module.exports = DigitalClicker
