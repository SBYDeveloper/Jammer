import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
	checkProps() {
		console.log(this.props.tracks)
	}
  render() {
  	// {this.checkProps()}
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => <Track key={track.uri} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />)}
      </div>
    );
  }
}

export default TrackList;
