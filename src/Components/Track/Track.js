import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    console.log(this.props)
    if (this.props.isRemoval) {
      return (
        <div className="Track-information Track-action" onClick={this.removeTrack} >
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album} | {this.props.track.duration}</p>
        </div>
      );
    } else {
      return (
          <div className="Track-information Track-action" onClick={this.addTrack} >
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album} | {this.props.track.duration}</p>
          </div>
      );
    }
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(event) {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
