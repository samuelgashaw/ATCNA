import React, { Component } from 'react';
class Contacts extends Component {
  sendEmail = () => {};

  render() {
    return (
      <section className=" my-0 py-0 bg-light" id="aboutDiv">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3 className="display-5">
                <strong>Our Location</strong>
              </h3>
              <iframe
                title="location"
                src="https://www.google.com/maps/d/u/0/embed?mid=1VoIdpcPfMEOFMzl78555sGikEhjUqisn"
                style={{
                  border: '0',
                  width: '100%',
                  height: '350px',
                  frameborder: '0',
                }}
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-5">
              <h3 className="display-5">
                <strong>Contact Us</strong>
              </h3>
              <form action="post">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  ></input>
                </div>

                <div className="form-group">
                  <textarea
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>

                  <button
                    className="btn btn-outline-primary text-uppercase mt-3"
                    onClick={(senderEmail) => this.sendEmail}

                    // style={{ background: '#415396', color: '#ffc30c' }}
                  >
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    <i className="fba fa-telegram-plane"></i>&nbsp;send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contacts;
