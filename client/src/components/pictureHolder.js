import React, { Component } from 'react';
import { connect } from 'react-redux';

class PictureHolder extends Component {
  render() {
    return (
      <div>
        <img src="http://placekitten.com/g/200/300"></img>
        <h6>Artist: <a href="">William Morris</a></h6>
      </div>
    )
  }
}


function mapStateToProps({ pictures }) {
  return { pictures };
}

export default connect(mapStateToProps)(PictureHolder);
