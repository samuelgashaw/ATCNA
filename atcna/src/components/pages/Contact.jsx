import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
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
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form>
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
                    rows="3"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>

                  <Link
                    className="btn btn-outline-primary text-uppercase mt-3"
                    // style={{ background: '#415396', color: '#ffc30c' }}
                  >
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    <i className="fba fa-telegram-plane"></i>&nbsp;send
                  </Link>
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
