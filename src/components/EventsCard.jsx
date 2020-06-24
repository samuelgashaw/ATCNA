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
          <Events className=" card container mt-2 mb-3 p-5" id="eventCard">
            <div className="card-body" id="eventCardBody">
              <h4 className="card-title display-6" style={{ color: '#4fb7f7' }}>
                {newsTitle}
              </h4>
              <p className="card-text  lead">{newsText}</p>
              <h6>{date}</h6>
              <a
                role="button"
                className="card-link collapsed"
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              ></a>
              {/* <Link className="card-link">Read More &gt;&gt; </Link> */}
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
`;
