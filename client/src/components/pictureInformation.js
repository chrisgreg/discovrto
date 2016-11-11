import React, { Component } from 'react';

export default class PictureInformation extends Component {
  render() {

    const details = this.props.picture;

    return (
      <div>
      <h2>{details.title} by
        <a href={`https://www.flickr.com/photos/${details.owner.ownerId}`}>
          {details.owner.ownerName}
        </a>
      </h2>
      <h3>{this.getDescription()}</h3>
      </div>
    )
  }

  getDescription() {
    if (!this.props.picture) {
      return '';
    } else {

      return this.props.picture.description ? this.props.picture.description._content : '';
    }

  }
}
