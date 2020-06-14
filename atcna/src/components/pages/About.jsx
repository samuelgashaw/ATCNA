import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="my-3 py-5">
        <div className="container">
          <div className="col-lg-12">
            <div className="well well-sm">
              <h4 className="display-5">
                <center>Who We Are</center>
              </h4>
            </div>
            <p className="lead justify-content-around">
              The “Association of Tebasie Community in North America” was
              established by the will of its members on May 02, 2020. This
              association is a non-profit organization which was established
              regardless of race, religion, political view, and gender to solve
              the social and economic challenges of our members in North America
              and in the community where we were born and/or grow up in Ethiopia
              within accordance of the law and order of the United State.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="well well-sm">
              <h5 className="display-5">
                <center>Vision</center>
              </h5>
            </div>
            <p className="lead">
              Seeing a reliable and strong association that overcome the
              economic and social problems of members in North America and their
              senior community in Tebasie, Ethiopia.
            </p>
          </div>

          <div className="col-lg-12 ">
            <h5 className="display-5">
              <center>Current Executive Commitee</center>
            </h5>
            <div className="row">
              <div className="card-deck">
                <div className="card" style={{ border: '0' }}>
                  <img
                    src="../../../images/melesebeyene.jpg"
                    className="card-img-top rounded-circle rounded-sm img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Chairman</h6>
                    <p className="card-text">Melese Abate</p>
                  </div>
                </div>
                <div className="card" style={{ border: '0' }}>
                  <img
                    src="../../../images/bayush.jpg"
                    className="card-img-top rounded-circle rounded-sm img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Vice Chairman</h6>
                    <p className="card-text">Bayush Gebrewold</p>
                  </div>
                </div>
                <div className="card" style={{ border: '0' }}>
                  <img
                    src="../../../images/alayu.jpg"
                    className="card-img-top rounded-circle img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Secretary</h6>
                    <p className="card-text">Alayu Tadesse</p>
                  </div>
                </div>
                <div className="card " style={{ border: '0' }}>
                  <img
                    src="../../../images/sam.png"
                    className="card-img-top rounded-circle rounded-sm img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Public Relation</h6>
                    <p className="card-text">Samuel Gashaw</p>
                  </div>
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
                  <div className="card-body">
                    <h6 className="card-title">Treasurer</h6>
                    <p className="card-text">Mulugeta Tsigie</p>
                  </div>
                </div>

                <div className="card" style={{ border: '0' }}>
                  <img
                    src="../../../images/abyot.jpg"
                    className="card-img-top rounded-circle img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Audit and Control Chairman</h6>
                    <p className="card-text">Abyot Hundessa</p>
                  </div>
                </div>
                <div className="card" style={{ border: '0' }}>
                  <img
                    src="../../../images/zele.jpg"
                    className="card-img-top rounded-circle img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Audit and Control Secretary</h6>
                    <p className="card-text">Zelalem Gizaw</p>
                  </div>
                </div>
                <div className="card" style={{ border: '0' }}>
                  <img
                    src="../../../images/mulu.jpg"
                    className="card-img-top rounded-circle img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title">Audit and Control Member</h6>
                    <p className="card-text">Mulu Setargie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
