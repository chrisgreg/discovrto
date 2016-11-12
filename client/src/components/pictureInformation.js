import React, { Component } from 'react';

export default class PictureInformation extends Component {
  render() {

    const details = this.props.picture;

    return (
      <div className="details details-box">
        <h2 className="title">{details.title} by
          <a href={`https://www.flickr.com/photos/${details.owner.ownerId}`}>
            {details.owner.ownerName}
          </a>
        </h2>
        <p className="description">{this.getDescription()}</p>
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
