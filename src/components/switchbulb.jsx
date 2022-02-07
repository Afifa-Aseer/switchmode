import React from 'react'
import offbulb from "../img/off.png"
import onbulb from "../img/on.png"

class ExampleApplication extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       imgSrc: offbulb
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: onbulb
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: offbulb   
    });
  }

  render() {
    return (
      <div>
        <h2 style={{textAlign:"center"}}><i>Switch on/off Bulb</i></h2>
        <img onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} src={this.state.imgSrc}/>
      </div>
    );
  }

}

export default ExampleApplication;