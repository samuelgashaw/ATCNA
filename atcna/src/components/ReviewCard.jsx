import React, { Component } from 'react';
import { InfoConsumer } from './context';
class ReviewCard extends Component {
  render() {
    const { id, name, avatar, comment } = this.props.person;
    return (
      <InfoConsumer>
        {(data) => {
          return (
            <>
              <div className="media mt-5">
                <img
                  src={avatar}
                  alt={name}
                  className="mr-3"
                  style={{ width: '40px' }}
                />
              </div>
              <div className="media-body">
                <h5 className="mt-0">{name}</h5>
                <p>{comment}</p>
              </div>
            </>
          );
        }}
      </InfoConsumer>
    );
  }
}
export default ReviewCard;
