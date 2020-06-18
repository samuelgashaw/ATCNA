import React, { Component } from 'react';
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
class EventsCard extends Component {
  render() {
    const { id, newsTitle, newsText, date } = this.props.item;
    return (
      <InfoConsumer>
        {(value) => (
          <Events className="card container mt-2 mb-3 p-5" id="eventCard">
            <div className="card-body" id="eventCardBody">
              <h5 key={id} className="card-title">
                {newsTitle}
              </h5>
              <p className="card-text">{newsText}</p>
              <h6>{date}</h6>
              <Link className="card-link">Read More &gt;&gt; </Link>
            </div>
          </Events>
        )}
      </InfoConsumer>
    );
  }
}
export default EventsCard;

const Events = styled.div`
  list-style: none;
  padding: 20px;
  border: #cccccc solid 1px;
  margin-bottom: 5px;
  background: #efefef;
`;
