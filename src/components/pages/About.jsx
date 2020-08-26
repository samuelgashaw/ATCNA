import React, { Component } from 'react';
import styled from 'styled-components';
import Mission from '../../images/mission.jpg';
import Vision from '../../images/vision.jpg';
import CoreValues from '../../images/core-values.jpg';
import bgImg from '../../images/lightBlue.jpg';
class About extends Component {
  render() {
    return (
      <>
        <AboutUsContainer className=" py-3">
          <div
            className="container "
            style={{ background: 'url(' + { bgImg } + ')' }}
          >
            <div>
              <div>
                <h4 className="display-4">About Us</h4>
              </div>
              <div className="text-justify">
                <p className="lead text-dark">
                  Hope For Tebassie (H4T) is a legally licensed non-profit
                  organization devoted to give hope for most vulnerable groups
                  in our hometown Tebassie, Debre Birhan, Ethiopia. We are a
                  North America based Non-Governmental Organization (NGO) that
                  offers support to most vulnerable groups in our hometown to
                  gain access to health services, clean water, and education.
                  Founded by the Tebassie Hometown Association (HTA) group, we
                  understand the need of our hometown and the work ahead of us
                  to provide aid in communities where the capacity of the local
                  government has fallen short. We are confident that with our
                  unwavering support, we aspire to engage the local community in
                  battling and eradicating poverty and expanding opportunities
                  for those disregarded and most vulnerable. We passionately
                  believe, with helping hands and support from H4T, we can
                  change our community by supporting one household at a time.
                </p>
                <p className="lead text-dark">
                  Hope 4 Tebassie has no affiliation with any religious or
                  political organizations. Its objective is to provide moral,
                  material and financial support to most vulnerable groups in
                  need regardless of their religion, political affiliation,
                  gender, sex, or creed.
                </p>
              </div>
            </div>
          </div>
          <div className="container ">
            <div id="features" className="mb-500">
              <div className="featureBox bg-warning">
                <i className="fas fa-binoculars fa-3x"></i>
                <h3>Our Vission</h3>
                <p className="">
                  To open opportunities and limitless possibilities to most
                  vulnerable groups who have been disregarded because of their
                  economic and social status.
                </p>
              </div>
              <div className="featureBox bg-warning">
                <i className="fas fa-dot-circle fa-3x"></i>
                <h3>Our Mission</h3>
                <p className="">
                  To support most vulnerable groups in our hometown, Tebassie,
                  located in Debre Berhan, Ethiopia to access healthcare, clean
                  water, and education.
                </p>
              </div>

              <div className="featureBox bg-warning">
                <i className="fas fa-user-friends fa-3x"></i>
                <h3>Core Values</h3>
                <p className="">
                  We believe in Accountability, Commitment, Teamwork, Integrity,
                  Equality and Equity.
                  <br></br>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="text-white">
              <center>.</center>
            </div>
          </div>
        </AboutUsContainer>
      </>
    );
  }
}

export default About;

const AboutUsContainer = styled.section`
  * {
    color: #000;
  }
  h4 {
    text-align: left;
    padding: 10px;
    color: #121214;
    width: 25%;
    :hover {
      opacity: 0.5;
    }
  }
  img {
    :hover {
      cursor: pointer;
      opacity: 0.75;
    }
  }

  kbd {
    color: var(--mainYellow);
  }
`;
