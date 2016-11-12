import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPictures, nextPicture } from '../actions/index';
import PictureInformation from './pictureInformation';

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
      <div className="pictureHolder">

          <div className="image-box">
            <img src={this.props.pictures.currentPicture.largeUrl}></img>
          </div>

          <div className="image-details-container">
            <PictureInformation picture={this.props.pictures.currentPicture}/>
            <h4 className="next-image details-box"><a onClick={this.nextImage.bind(this)}>Next  Image</a></h4>
          </div>

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
