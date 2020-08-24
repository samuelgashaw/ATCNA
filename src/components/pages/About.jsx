import React, { Component } from 'react';
import styled from 'styled-components';
import Mission from '../../images/mission.jpg';
import Vision from '../../images/vision.jpg';
import CoreValues from '../../images/core-values.jpg';
class About extends Component {
  render() {
    return (
      <>
        <AboutUsContainer className="my-3 py-5">
          <div className="container ">
            <div className="bg-light">
              <div>
                <h3 className="display-6">Who We Are</h3>
              </div>
              <p className="lead">
                Hope For Tebassie (H4T) is a legally licensed non-profit
                organization devoted to give hope for most vulnerable groups in
                our hometown Tebassie, Debre Birhan, Ethiopia. We are a North
                America based Non-Governmental Organization (NGO) that offers
                support to most vulnerable groups in our hometown to gain access
                to health services, clean water, and education.Founded by the
                Tebassie Hometown Association (HTA) group, we understand the
                need of our hometown and the work ahead of us to provide aid in
                communities where the capacity of the local government has
                fallen short. We are confident that with our unwavering support,
                we aspire to engage the local community in battling and
                eradicating poverty and expanding opportunities for those
                disregarded and most vulnerable. We passionately believe, with
                helping hands and support from H4T, we can change our community
                by supporting one household at a time. Hope 4 Tebassie has no
                affiliation with any religious or political organizations. Its
                objective is to provide moral, material and financial support to
                most vulnerable groups in need regardless of their religion,
                political affiliation, gender, sex, or creed.
              </p>
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-4">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      src={Vision}
                      className="card-img-top img-thumbnail"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 class="card-title">Our Vision</h3>
                      <p className="card-text">
                        To open opportunities and limitless possibilities to
                        most vulnerable groups who have been disregarded because
                        of their economic and social status.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      src={Mission}
                      className="card-img-top img-thumbnail"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 class="card-title">Our Mission</h3>
                      <p className="card-text">
                        To support most vulnerable groups in our hometown,
                        Tebassie, located in Debre Berhan, Ethiopia to access
                        healthcare, clean water, and education.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div className="card" style={{ width: '18rem' }}>
                    <img
                      src={CoreValues}
                      className="card-img-top img-thumbnail"
                      alt="..."
                    />
                    <div className="card-body">
                      <h3 class="card-title">Core Values</h3>
                      <p className="card-text">
                        We believe in Accountability, Commitment, Teamwork,
                        Integrity, Equality and Equity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <h4 className="display-5">Executive Commitee</h4>
              <br></br>
              <div className="row">
                <div className="card-deck">
                  <div className="card" style={{ border: '0' }}>
                    <img
                      src="../../../images/melesebeyene.jpg"
                      className="card-img-top rounded-circle rounded-sm img-fluid img-thumbnail"
                      alt="..."
                    />
                    <center>
                      <div className="card-body card-body text-black rgba-black-light p-0">
                        <strong>Melese Abate</strong>
                        <h6 className="card-title">
                          <kbd>Chairman</kbd>
                        </h6>
                      </div>
                    </center>
                  </div>
                  <div className="card" style={{ border: '0' }}>
                    <img
                      src="../../../images/bayush.jpg"
                      className="card-img-top rounded-circle rounded-sm img-fluid img-thumbnail"
                      alt="..."
                    />
                    <center>
                      <div className="card-body text-black rgba-black-light p-0">
                        <strong>Bayush Gebrewold</strong>
                        <h6 className="card-title">
                          <kbd>Vice Chairman</kbd>
                        </h6>
                      </div>
                    </center>
                  </div>
                  <div className="card" style={{ border: '0' }}>
                    <img
                      src="../../../images/alayu.jpg"
                      className="card-img-top rounded-circle img-fluid img-thumbnail"
                      alt="..."
                    />
                    <center>
                      <div className="card-body text-black rgba-black-light p-0">
                        <strong>Alayu Tadesse</strong>
                        <h6 className="card-title">
                          <kbd>Secretary</kbd>
                        </h6>
                      </div>
                    </center>
                  </div>
                  <div className="card " style={{ border: '0' }}>
                    <img
                      src="../../../images/sam.png"
                      className="card-img-top rounded-circle rounded-sm img-fluid img-thumbnail"
                      alt="..."
                    />
                    <center>
                      <div className="card-body text-black rgba-black-light p-0">
                        <strong>Samuel Gashaw</strong>{' '}
                        <h6 className="card-title">
                          <kbd>Public Relation</kbd>
                        </h6>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card-deck">
                  <div className="card" style={{ border: '0' }}>
                    <img
                      src="../../../images/mulugeta.jpg"
                      className="card-img-top rounded-circle img-fluid img-thumbnail"
                      alt="..."
                    />
                    <center>
                      <div className="card-body text-black rgba-black-light p-0">
                        <strong>Mulugeta Tsigie</strong>
                        <h6 className="card-title">
                          <kbd>Treasurer</kbd>
                        </h6>
                      </div>
                    </center>
                  </div>

                  <div className="card" style={{ border: '0' }}>
                    <img
                      src="../../../images/abyot.jpg"
                      className="card-img-top rounded-circle img-fluid img-thumbnail"
                      alt="..."
                    />
                    <center>
                      <div className="card-body text-black rgba-black-light p-0">
                        <strong>Abyot Hundessa</strong>{' '}
                        <h6 className="card-title">
                          <kbd>Audit and Control Chairman</kbd>
                        </h6>
                      </div>
                    </center>
                  </div>
                  <div className="card" style={{ border: '0' }}>
                    <img
                      src="../../../images/zele.jpg"
                      className="card-img-top rounded-circle img-fluid img-thumbnail"
                      alt="..."
                    />
                    <center>
                      <div className="card-body text-black rgba-black-light p-0">
                        <strong>Zelalem Gizaw</strong>{' '}
                        <h6 className="card-title">
                          <kbd>Audit and Control Secretary</kbd>
                        </h6>
                      </div>
                    </center>
                  </div>
                  <div className="card" style={{ border: '0' }}>
                    <img
                      src="../../../images/mulu.jpg"
                      className="card-img-top rounded-circle img-fluid img-thumbnail"
                      alt="..."
                    />
                    <center>
                      <div className="card-body text-black rgba-black-light p-0">
                        <strong>Mulu Setargie</strong>
                        <h6 className="card-title m-auto">
                          <kbd>Audit and Control Member</kbd>
                        </h6>
                      </div>
                    </center>
                  </div>
                </div>
              </div>
            </div>*/}
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
