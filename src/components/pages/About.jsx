import React, { Component } from 'react';
import styled from 'styled-components';
class About extends Component {
  render() {
    return (
      <>
        <AboutUsContainer className="my-3 py-5">
          <div className="container">
            <div className="col-lg-12">
              <div>
                <h4 className="display-6">Who We Are</h4>
              </div>
              <p className="lead">
                <em>
                  The “Hope For Tebasse” was established by the will of its
                  members on May 02, 2020. The association is a non-profit
                  organization which is established regardless of race,
                  religion, political view, and gender to solve the
                  socio-economic challenges of our members in North America and
                  in the community where we were born and/or grow up in Ethiopia
                  within accordance of the law and order of the United State.
                </em>
              </p>
            </div>
            <div className="col-lg-12">
              <div className="well well-sm">
                <h4 className="display-5">Vision</h4>
              </div>
              <div className="well well-lg">
                <p className="lead">
                  <em>
                    Seeing a reliable and strong association that overcome the
                    economic and social problems of members in North America and
                    their senior community in Tebasie, Ethiopia.
                  </em>
                </p>
              </div>
            </div>

            <div className="col-lg-12">
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
