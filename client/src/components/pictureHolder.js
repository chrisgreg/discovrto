import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPictures, nextPicture } from '../actions/index';

class PictureHolder extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Fetch initial pictures
    this.props.getPictures();
  }

  nextImage() {
    this.props.nextPicture();
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.props.pictures.currentPicture.largeUrl}></img>
          <h6>Artist:
            <a href={`https://www.flickr.com/photos/${this.props.pictures.currentPicture.owner.ownerId}`}>
              {this.props.pictures.currentPicture.owner.ownerName}
            </a>
          </h6>
        </div>
        <a onClick={this.nextImage.bind(this)}>Next  Image</a>
      </div>
    )
  }
}


function mapStateToProps({ pictures }) {
  return { pictures };
}

export default connect(mapStateToProps, {
  getPictures,
  nextPicture
})(PictureHolder);
