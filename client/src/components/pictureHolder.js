import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPictures } from '../actions/index';

class PictureHolder extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Fetch initial pictures
    this.props.getPictures();
  }

  nextImage() {
    console.log('Todo: Increment current picture');
  }

  render() {
    return (
      <div>
        <div>
          <img src="http://placekitten.com/g/200/300"></img>
          <h6>Artist: <a href="">William A</a></h6>
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
  getPictures
})(PictureHolder);
